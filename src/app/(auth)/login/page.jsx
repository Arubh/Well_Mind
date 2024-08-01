import LoginForm from "@/components/LoginForm";
import { handleGithubLogin } from "@/utils/action";

const LoginPage = () => {
  return (
    <div className=''>
      <div className=''>
        <form action={handleGithubLogin}>
          <button className=''>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
