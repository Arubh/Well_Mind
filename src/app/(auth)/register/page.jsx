import RegisterForm from "@/components/RegisterForm";
import { Waves } from "@/components/ui/Waves";

const RegisterPage = () => {
  return (
    <div className='flex'>
      <Waves />
      <div className="lg:w-[30%] w-[50%] rounded-[15px] flex flex-col items-center mt-10 lg:static absolute left-[26%]">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
