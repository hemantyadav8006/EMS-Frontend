interface OverlayProps {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

export default function Overlay({ isActive, setIsActive }: OverlayProps) {
  return (
    <div
      className={`absolute top-0 left-1/2 w-1/2 h-full z-30 transition-transform duration-500 ${
        isActive ? "-translate-x-full" : ""
      }`}
    >
      <div className="bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] text-white flex flex-col justify-center items-center px-10 py-12 h-full">
        {isActive ? (
          <div className="text-center">
            <h1 className="font-bold text-2xl">Welcome Back!</h1>
            <p className="text-sm my-4">
              To keep connected with us please login with your personal info
            </p>
            <button
              className="bg-transparent border border-white text-white font-bold py-3 px-10 rounded-full text-sm uppercase mt-4 shadow-2xl hover:bg-white hover:text-red-400 hover:border-red-400 cursor-pointer"
              onClick={() => setIsActive(false)}
            >
              Sign In
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="font-bold text-2xl">Hello, Friend!</h1>
            <p className="text-sm my-4">
              Enter your personal details and start your journey with us
            </p>
            <button
              className="bg-transparent border border-white text-white font-bold py-3 px-10 rounded-full text-sm uppercase mt-4 shadow-2xl hover:bg-white hover:text-red-400 hover:border-red-400 cursor-pointer"
              onClick={() => setIsActive(true)}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
