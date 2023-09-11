import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import useCreateNew from "../hooks/createNew";

export const CreateAccount = () => {
  const { setCreateNew } = useCreateNew();

  const [isHidden, setIsHidden] = useState(true);

  const newUser = z
    .object({
      email: z.string().email({ message: "Ugyldig Email adresse" }),
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

  const onSubmit = (data: FieldValues) => console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newUser),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6 h-screen">
        <h1 className="py-10 top-16 text-center text-white text-4xl font-bold drop-shadow-lg">
          Opprett ny bruker
        </h1>
        <div className="flex flex-col gap-4 font-bold">
          <div className="flex flex-col items-center">
            <input
              {...register("email")}
              className={`rounded-full p-3 w-4/6 max-w-[250px] h-12 ${
                errors.email
                  ? "border-red-600 border-[5px]"
                  : "border-blue-800 border-4"
              }`}
              id="Email"
              type="text"
              placeholder="E-mail adresse ..."
              autoComplete="on"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col items-center">
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
            {errors.screenName && (
              <p className="text-red-600">{errors.screenName.message}</p>
            )}
          </div>
          <div className="flex flex-col items-center">
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
            {errors.newPassword && (
              <p className="text-red-600">{errors.newPassword.message}</p>
            )}
          </div>
          <div className="flex flex-col items-center">
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
            {errors.confirm && (
              <p className="text-red-600">{errors.confirm.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-center gap-8 m-10 h-12">
          <button
            onClick={() => setCreateNew()}
            className="loginbutton border-4 w-32 bg-blue-600 border-blue-800 rounded-full text-white shadow-xl active:shadow-none"
          >
            Avbryt
          </button>
          <button className="loginbutton border-4 w-32 bg-blue-600 border-blue-800 rounded-full text-white shadow-xl active:shadow-none">
            Opprett
          </button>
        </div>
      </div>
    </form>
  );
};
