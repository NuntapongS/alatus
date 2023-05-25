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

      <div className="flex min-h-max gap-5 text-white pt-24">
        <div className="flex max-h-max w-full justify-center items-center">
          <img
            src={profile}
            className="flex border-4 border-border-primary rounded-full h-80 w-80 object-cover"
            alt=""
          />
        </div>
        <div className="w-full text-white ">Test</div>
      </div>
    </div>
  );
};

export default AboutMe;
