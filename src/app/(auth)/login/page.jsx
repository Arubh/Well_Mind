import LoginForm from "@/components/LoginForm";
import { Waves } from "@/components/ui/Waves";
import { handleGoogleLogin } from "@/utils/action";

const LoginPage = () => {
  return (
    <div className='flex'>
      <Waves />
      <div className="lg:w-[30%] w-[50%] rounded-[15px] flex flex-col items-center mt-10 lg:static absolute left-[26%]">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
 