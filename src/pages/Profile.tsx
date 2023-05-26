import { useNavigate } from "react-router-dom";
import profile from "../images/S__10960911.jpg";
import NavigateBackButton from "../components/button/BackButton";
import NextButton from "../components/button/NextButton";

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-[url('https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg')] bg-cover">
      <div className="flex justify-between p-4">
        <NavigateBackButton
          onClick={() => {
            navigate("/home");
          }}
        />
        <NextButton
          message={"Portfolio"}
          onClick={() => {
            navigate("/portfolio");
          }}
        />
      </div>

      <div className="flex min-h-max gap-5 text-white pt-32">
        <div className="flex max-h-max w-full justify-center items-center">
          <img
            src={profile}
            className="flex border-4 border-border-primary rounded-full h-96 w-96 object-cover"
            alt=""
          />
        </div>
        <div className="w-full font-serif font-bold">
          <div className="text-xl">Hello World !</div>
          <div className="text-text-title text-4xl pb-10">
            Welcome To My Profile
            <span className="blink font-bold">|</span>
          </div>
          <div>
            Name: Nuntapong (Pat) Siripanyawong | นันทพงศ์ (ภัทร์) ศิริปัญญาวงศ์
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
