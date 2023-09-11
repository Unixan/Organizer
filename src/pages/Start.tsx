import { CreateAccount } from "../components/CreateAccount";
import { Login } from "../components/Login";
import useCreateNew from "../hooks/createNew";

export const Start = () => {
  const { createNew } = useCreateNew();

  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-900">
      {createNew ? <CreateAccount /> : <Login />}
    </div>
  );
};
