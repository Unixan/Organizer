import usePrivacyState from "../hooks/privacyState";
import { Todo } from "./Todo";
import { TodoCommon } from "./TodoCommon";

export const Content = () => {
  const { isPrivate } = usePrivacyState();

  return (
    <div className="fillscreen overflow-hidden">
      {isPrivate ? <Todo /> : <TodoCommon />}
    </div>
  );
};
