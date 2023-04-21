import { useNavigate } from "react-router-dom";
import NavigateBackButton from "../components/button/BackButton";

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
        <button
          className="flex justify-center items-center bg-white text-text-next w-[184px] h-12 rounded-full border-4 border-border-next"
          onClick={() => navigate("/home")}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
