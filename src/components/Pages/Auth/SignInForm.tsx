import Input from "@/components/ui/Input";

interface SignInFormProps {
  isActive: boolean;
  onSubmit: (e: React.FormEvent) => void;
  setUsername: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

export default function SignInForm({
  isActive,
  onSubmit,
  setUsername,
  setEmail,
  setPassword,
}: SignInFormProps) {
  return (
    <div
      className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ${
        isActive ? "translate-x-full opacity-0 z-10" : "opacity-100 z-20"
      }`}
    >
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center text-center px-10 h-full bg-white"
      >
        <h1 className="font-bold text-2xl">Sign In</h1>
        <Input
          name="username"
          label="Username"
          placeholder="hemantyadav"
          type="text"
          required={false}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          name="email"
          label="Email"
          placeholder="hemant@google.com"
          type="email"
          required={false}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          label="Password"
          placeholder="*******"
          type="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#" className="text-sm text-blue-500 mt-2 underline">
          Forgot your password?
        </a>
        <button className="mt-4 bg-[#FF4B2B] text-white font-bold py-3 px-10 rounded-full text-sm uppercase shadow-2xl hover:bg-white hover:text-red-400 hover:border-red-400 border cursor-pointer">
          Sign In
        </button>
      </form>
    </div>
  );
}
