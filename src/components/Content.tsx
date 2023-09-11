import usePrivacyState from "../hooks/privacyState";
import { Todo } from "./Todo";
import { TodoCommon } from "./TodoCommon";

export const Content = () => {
  const { isPrivate } = usePrivacyState();

  return (
    <div className="fillscreen overflow-hidden">
      {isPrivate ? <Todo /> : <TodoCommon />}
      {/* <div
        className={`absolute duration-300 ease-in-out z-[5]  transition-all ${
          isPrivate ? "translate-y-0 delay-150" : "-translate-y-full"
        }`}
      >
        <Todo />
      </div>
      <div
        className={`absolute duration-300 ease-in-out ${
          !isPrivate ? "translate-y-0 delay-150" : "translate-y-full"
        }`}
      >
        <TodoCommon />
      </div> */}
    </div>
  );
};
