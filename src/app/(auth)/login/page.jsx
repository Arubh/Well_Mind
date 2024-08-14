import LoginForm from "@/components/LoginForm";
import { Waves } from "@/components/ui/Waves";
import { handleGoogleLogin } from "@/utils/action";

const LoginPage = () => {
  return (
    <div className='flex'>
      <Waves />
      <div className="w-[30%] flex flex-col items-center mt-10">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
