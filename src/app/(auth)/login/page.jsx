import LoginForm from "@/components/LoginForm";
import { handleGoogleLogin } from "@/utils/action";

const LoginPage = () => {
  return (
    <div className='flex'>
      <div className='w-[70%] h-[670px] bg-[red]'>
        jijo
      </div>
      <div className="w-[30%] flex flex-col items-center mt-10">
      <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
