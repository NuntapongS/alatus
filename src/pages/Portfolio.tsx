import { useNavigate } from "react-router-dom";
import NavigateBackButton from "../components/button/BackButton";
import NextButton from "../components/button/NextButton";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-[url('https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg')] bg-cover">
      <div className="flex justify-between p-4">
        <NavigateBackButton
          onClick={() => {
            navigate("/about-me");
          }}
        />
        <NextButton
          message={"Home"}
          onClick={() => {
            navigate("/Home");
          }}
        />
      </div>
    </div>
  );
};

export default Portfolio;
