import LoginForm from "@/components/LoginForm";
import { handleGoogleLogin } from "@/utils/action";

const LoginPage = () => {
  return (
    <div className='flex'>
      <div className='w-[600px] h-[670px] flex-1 bg-cover bg-center' style={{ backgroundImage: "url('/images/login.jpg')", }}>
      
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
