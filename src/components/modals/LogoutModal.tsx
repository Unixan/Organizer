interface Props {
  logout: (value: boolean) => void;
}

const LogoutModal = ({ logout }: Props) => {
  return (
    <>
      <div className="justify-center z-30 absolute h-screen w-screen bg-black opacity-70"></div>
      <div className=" inset-0 m-auto z-40 absolute w-2/3 h-fit p-3 border-4 rounded-3xl border-blue-800 opacity-100 bg-blue-500">
        <p className="text-center text-white p-3">Du blir logget ut</p>
        <div className="flex justify-center gap-5 p-5">
          <button
            onClick={() => logout(false)}
            className="loginbutton rounded-full w-32 text-white border-4 p-2 bg-blue-600 border-blue-800"
          >
            Avbryt
          </button>
          <button
            onClick={() => logout(true)}
            className="loginbutton rounded-full w-32 text-white border-4 p-2 bg-blue-600 border-blue-800"
          >
            OK
          </button>
        </div>
      </div>
    </>
  );
};

export default LogoutModal;
