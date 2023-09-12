import { z } from "zod";
import useCreateNew from "../hooks/createNew";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

export const Login = () => {
  const loginInfo = z.object({
    login: z.string().toLowerCase().email({ message: "Ugyldig format" }),
    password: z.string().min(8, { message: "Passord for kort" }),
  });

  type FormData = z.infer<typeof loginInfo>;

  const onsSubmit = (data: FieldValues) => console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(loginInfo) });

  return (
    <div className="h-screen bg-gradient-to-b from-blue-400 to-blue-900">
      <form onSubmit={handleSubmit(onsSubmit)}>
        <h1 className="py-10 top-16 text-center text-white text-4xl font-bold drop-shadow-lg">
          Velkommen!
        </h1>
        <div className="flex flex-col font-bold gap-2 items-center">
          <input
            {...register("login")}
            className={`rounded-full p-3 h-12 w-4/6 max-w-[250px] ${
              errors.login
                ? "border-red-600 border-[5px]"
                : "border-blue-800 border-4"
            }`}
            id="username"
            type="email"
            placeholder="Brukernavn (Email) ..."
            autoComplete="on"
          />
          <p className="text-red-600 h-[24px]">
            {errors.login ? errors.login.message : ""}
          </p>
          <input
            {...register("password")}
            className={`rounded-full p-3 h-12 w-4/6 max-w-[250px] ${
              errors.password
                ? "border-red-600 border-[5px]"
                : "border-blue-800 border-4"
            }`}
            id="password"
            type="text"
            placeholder="Passord ..."
            autoComplete="off"
          />
          <p className="text-red-600 h-[24px]">
            {errors.password ? errors.password.message : ""}
          </p>
          <div className="flex justify-center flex-col">
            <button className="loginbutton border-4 w-44 place-self-center h-12 bg-blue-600 border-blue-800 rounded-full text-white">
              Logg inn
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
