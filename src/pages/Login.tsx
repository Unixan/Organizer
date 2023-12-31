import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { z } from "zod";
import useCurrentUser from "../hooks/useCurrentUser";
import { User } from "../model/interfaces";

import { useState } from "react";
import { getUser } from "../services/apiServices";

export const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useCurrentUser();

  const loginInfo = z.object({
    accountName: z.string().toLowerCase().email({ message: "Ugyldig format" }),
    password: z.string().min(8, { message: "Passord for kort" }),
  });

  type LoginData = z.infer<typeof loginInfo>;

  const onSubmit = (data: FieldValues) => {
    const { request, cancel } = getUser.get<User>(data);
    setIsLoading(true);
    request
      .then((res) => {
        setUser(res.data);
        setLoginError("");
        if (!res.data) {
          setLoginError("Brukernavn eller passord er feil");
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
  } = useForm<LoginData>({ resolver: zodResolver(loginInfo) });

  if (user) return <Navigate to="/" />;
  return (
    <div className="h-screen bg-gradient-to-b from-blue-400 to-blue-900">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="py-10 top-16 text-center text-white text-4xl font-bold drop-shadow-lg">
          Velkommen!
        </h1>
        <div className="flex flex-col font-bold gap-2 items-center">
          <input
            {...register("accountName")}
            className={`rounded-full p-3 h-12 w-4/6 max-w-[250px] ${
              errors.accountName
                ? "border-red-600 border-[5px]"
                : "border-blue-800 border-4"
            }`}
            onFocus={() => setLoginError("")}
            id="username"
            type="email"
            placeholder="Brukernavn (Email) ..."
            autoComplete="on"
          />
          <p className="text-red-600 h-[24px]">
            {errors.accountName ? errors.accountName.message : ""}
            {loginError ? loginError : ""}
          </p>
          <input
            {...register("password")}
            className={`rounded-full p-3 h-12 w-4/6 max-w-[250px] ${
              errors.password
                ? "border-red-600 border-[5px]"
                : "border-blue-800 border-4"
            }`}
            id="password"
            type="password"
            placeholder="Passord ..."
            autoComplete="off"
          />
          <p className="text-red-600 h-[24px]">
            {errors.password ? errors.password.message : ""}
          </p>
          <div className="flex justify-center flex-col">
            <button
              className={`loginbutton rounded-full text-white border-4 w-44 place-self-center h-12 ${
                isLoading
                  ? "bg-gray-600 border-gray-800"
                  : "bg-blue-600 border-blue-800"
              } `}
              disabled={isLoading}
            >
              {isLoading ? "Logger inn" : "Logg inn"}
            </button>
            <div className="text-white text-center pt-2">
              Ingen konto? Opprett en{" "}
              <Link to="/createaccount" className="underline">
                her
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
