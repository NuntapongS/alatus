import { useNavigate } from "react-router-dom";
import NavigateBackButton from "../components/button/BackButton";
import NextButton from "../components/button/NextButton";
import profile from "../images/S__10960912.jpg";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-[url('https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg')] bg-cover">
      <div className="flex justify-between p-4">
        <NavigateBackButton
          onClick={() => {
            navigate("/profile");
          }}
        />
        <NextButton
          message={"Home"}
          onClick={() => {
            navigate("/Home");
          }}
        />
      </div>
      <div className="flex min-h-max gap-5 text-white pt-40">
        <div className="flex max-h-max w-full justify-center items-center">
          <img
            src={profile}
            className="flex border-4 border-border-primary rounded-full h-96 w-96 object-cover"
            alt=""
          />
        </div>
        <div className="w-full font-serif font-bold">
          <div>
            <div className="text-2xl text-text-title">My Portfolio</div>
            <div className="flex items-center gap-4 my-10">
              <i className="fa-solid fa-file-lines fa-2xl"></i>
              <div className="text-2xl text-text-title">Test</div>
            </div>
            <div className="flex items-center gap-4 my-10">
              <i className="fa-solid fa-file-lines fa-2xl"></i>
              <div className="text-2xl text-text-title">Test</div>
            </div>
            <div className="flex items-center gap-4 my-10">
              <i className="fa-solid fa-file-lines fa-2xl"></i>
              <div className="text-2xl text-text-title">Test</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
