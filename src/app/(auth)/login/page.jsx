import LoginForm from "@/components/LoginForm";
import { handleGoogleLogin } from "@/utils/action";

const LoginPage = () => {
  return (
    <>
    <div className='hidden lg:flex'>
      <div className="h-[700px]"
      style={{
        backgroundImage: "url('/images/login2.jpg')",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "multiply",
      }}
      >
        <div className="justify-center items-center pt-[120px] hidden lg:block">
          <div className="font-semibold italic flex text-[30px] text-[white] justify-center items-center pl-[40px]">You, yourself, as much as anybody in the entire universe, deserve your love and affection.</div>
          <div className="mt-[30px] flex justify-end mx-[200px] text-[white] text-[20px] italic">-Buddha</div>
        </div> 
      </div>
      <div className="lg:w-[25%] w-[50%] rounded-[15px] flex flex-col items-center mt-10 lg:static absolute left-[26%]">
        <LoginForm />
      </div>
    </div>
    <div className="flex lg:hidden justify-center py-[70px]"
    style={{
      backgroundImage: "url('/images/login2.jpg')",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backgroundBlendMode: "multiply",
    }}
    >
    <div className="bg-[#faf8f8] lg:w-[25%] w-[50%] rounded-[15px] flex flex-col items-center mt-10">
        <LoginForm />
      </div>
    </div>
    </>
  );
};

export default LoginPage;
 