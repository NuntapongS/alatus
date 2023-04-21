import { useNavigate } from "react-router-dom";
import NextButton from "../components/button/NextButton";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center h-screen w-full bg-[url('https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg')] bg-cover">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center  tracking-[6px]  pb-10">
          <div className="font-semibold font-mono text-3xl text-text-title">
            Nuntapong (Pat) Siripanyawong
            <span className="blink font-bold">|</span>
          </div>
        </div>
        <div className="flex justify-center text-xl text-text-title font-mono tracking-[6px] font-semibold pb-10">
          Welcome To My Page
        </div>
      </div>
      <div className="flex justify-center w-full">
        <NextButton
          message={"About Me"}
          onClick={() => {
            navigate("/about-me");
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
