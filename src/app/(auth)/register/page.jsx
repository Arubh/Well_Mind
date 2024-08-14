import RegisterForm from "@/components/RegisterForm";
import { Waves } from "@/components/ui/Waves";

const RegisterPage = () => {
  return (
    <div className='flex'>
      <Waves />
      <div className="w-[30%] flex flex-col items-center mt-10">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
