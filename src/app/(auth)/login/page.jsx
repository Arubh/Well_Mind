import LoginForm from "@/components/LoginForm";
import { handleGoogleLogin } from "@/utils/action";

const LoginPage = () => {
  return (
    <div className=''>
      <div className=''>
        <form action={handleGoogleLogin}>
          <button className=''>Login with Google</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
