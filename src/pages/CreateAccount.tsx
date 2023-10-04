import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { z } from "zod";
import { User, newUser } from "../model/interfaces";
import { createUser } from "../services/apiServices";
import useCurrentUser from "../hooks/useCurrentUser";

export const CreateAccount = () => {
  const { user, setUser } = useCurrentUser();
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();

  const newUser = z
    .object({
      email: z
        .string()
        .toLowerCase()
        .email({ message: "Ugyldig Email adresse" }),
      screenName: z
        .string()
        .min(3, { message: "Navn må inneholde minst 3 tegn" }),
      newPassword: z
        .string()
        .min(8, { message: "Passord må inneholde minst 8 tegn" }),
      confirm: z
        .string()
        .min(8, { message: "Passord må inneholde minst 8 tegn" }),
    })
    .refine((data) => data.newPassword === data.confirm, {
      message: "Passordene er ikke like!",
      path: ["confirm"],
    });

  type FormData = z.infer<typeof newUser>;

  const onSubmit = (data: FieldValues) => {
    const user = {
      screenName: data.screenName,
      email: data.email,
      password: data.newPassword,
    };
    const { postUser, cancel } = createUser.post<User>(user as newUser);
    setIsLoading(true);
    postUser
      .then((res) => {
        if (res.data) {
          setUser(res.data);
        } else {
          setLoginError("Email finnes fra før");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setLoginError(err.message);
        setIsLoading(false);
      });
    return () => cancel();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newUser),
  });
  if (user) return <Navigate to="/" />;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6 h-screen bg-gradient-to-b from-blue-400 to-blue-900">
        <h1 className="py-10 top-16 text-center text-white text-4xl font-bold drop-shadow-lg">
          Opprett ny bruker
        </h1>
        <div className="flex flex-col gap-2 font-bold items-center w-full">
          <input
            {...register("email")}
            className={`rounded-full p-3 w-4/6 max-w-[250px] h-12 ${
              errors.email
                ? "border-red-600 border-[5px]"
                : "border-blue-800 border-4"
            }`}
            onFocus={() => setLoginError("")}
            id="Email"
            type="text"
            placeholder="E-mail adresse ..."
            autoComplete="on"
          />

          <p className="text-red-600 h-[24px]">
            {errors.email ? errors.email.message : ""}
            {loginError ? loginError : ""}
          </p>
          <input
            {...register("screenName")}
            className={`rounded-full p-3 w-4/6 max-w-[250px] h-12 ${
              errors.screenName
                ? "border-red-600 border-[5px]"
                : "border-blue-800 border-4"
            }`}
            id="Name"
            type="text"
            placeholder="Skjermnavn ..."
            autoComplete="on"
          />
          <p className="text-red-600 h-[24px]">
            {errors.screenName ? errors.screenName.message : ""}
          </p>
          <input
            {...register("newPassword")}
            className={`rounded-full p-3 w-4/6 max-w-[250px] h-12 ${
              errors.newPassword
                ? "border-red-600 border-[5px]"
                : "border-blue-800 border-4"
            }`}
            id="Password"
            type={isHidden ? "password" : "text"}
            placeholder="Ønsket passord ..."
            autoComplete="on"
          />
          <p className="text-red-600 h-[24px]">
            {errors.newPassword ? errors.newPassword.message : ""}
          </p>
          <input
            {...register("confirm")}
            className={`rounded-full p-3 w-4/6 max-w-[250px] h-12 ${
              errors.confirm
                ? "border-red-600 border-[5px]"
                : "border-blue-800 border-4"
            }`}
            id="Passwordcontrol"
            type="password"
            placeholder="Gjenta passord ..."
            autoComplete="on"
          />
          <p className="text-red-600 h-[24px]">
            {errors.confirm ? errors.confirm.message : ""}
          </p>
        </div>
        <div className="grid grid-cols-2 justify-items-center gap-8 m-10 h-12">
          <button
            onClick={() => navigate("/login")}
            className={`loginbutton rounded-full text-white border-4 w-44 place-self-center h-12 ${
              isLoading
                ? "bg-gray-600 border-gray-800"
                : "bg-blue-600 border-blue-800"
            } `}
            disabled={isLoading}
          >
            Tilbake
          </button>
          <button
            className={`loginbutton rounded-full text-white border-4 w-44 place-self-center h-12 ${
              isLoading
                ? "bg-gray-600 border-gray-800"
                : "bg-blue-600 border-blue-800"
            } `}
            disabled={isLoading}
          >
            Opprett
          </button>
        </div>
      </div>
    </form>
  );
};
