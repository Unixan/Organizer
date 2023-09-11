import usePrivacyState from "../hooks/privacyState";

export const PrivacyBar = () => {
  const { isPrivate, changeIsPrivate } = usePrivacyState();

  return (
    <div className=" h-[40px] bg-sky-950">
      <ul className="grid grid-cols-2 text-center items-stretch px-5">
        <li>
          <button
            disabled={isPrivate}
            className={`text-xl ${
              isPrivate ? "font-bold text-white px-4" : "text-gray-400"
            }`}
            onClick={() => changeIsPrivate()}
          >
            Privat
          </button>
        </li>
        <li>
          <button
            disabled={!isPrivate}
            className={`text-xl ${
              !isPrivate ? "font-bold text-white px-4" : "text-gray-400"
            }`}
            onClick={() => changeIsPrivate()}
          >
            Felles
          </button>
        </li>
      </ul>
    </div>
  );
};
