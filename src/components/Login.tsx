import useCreateNew from "../hooks/createNew";

export const Login = () => {
  const { setCreateNew } = useCreateNew();

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h1 className="py-10 top-16 text-center text-white text-4xl font-bold drop-shadow-lg">
        Velkommen!
      </h1>
      <div className="flex flex-col gap-10 h-screen">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <input
              className="rounded-full p-3 w-4/6 max-w-[250px] h-12 border-4 border-blue-800"
              id="username"
              type="email"
              placeholder="Brukernavn (E-Mail) ..."
              autoComplete="on"
            />
          </div>
          <div className="flex flex-col items-center">
            <input
              className="rounded-full p-3 w-4/6 max-w-[250px] h-12 border-4 border-blue-800"
              id="password"
              type="text"
              placeholder="Passord ..."
              autoComplete="on"
            />
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <div className="flex justify-center h-12">
            <button className="loginbutton border-4 w-44 bg-blue-600 border-blue-800 rounded-full text-white">
              Logg inn
            </button>
          </div>
          <div className="text-white text-center pt-2">
            Ingen konto? Opprett en{" "}
            <a href="#" onClick={() => setCreateNew()} className="underline">
              her
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};
