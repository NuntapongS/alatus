import { useNavigate } from "react-router-dom";
import profile from "../images/S__10960911.jpg";
import NavigateBackButton from "../components/button/BackButton";

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-[url('https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg')] bg-cover">
      <div className="flex justify-between p-4">
        <NavigateBackButton
          onClick={() => {
            navigate(-1);
          }}
        />
        <button
          className="flex justify-center items-center bg-white text-text-next w-[184px] h-12 rounded-full border-4 border-boarder-next"
          onClick={() => navigate("/portfolio")}
        >
          Portfolio
        </button>
      </div>
      <div className="flex justify-between items-center gap-5 min-h-[600px] text-white">
        <div className="flex p-3 border-4 rounded-lg border-white w-full h-96 ">
          <div className="flex w-full  justify-center items-center p-5">
            <img
              src={profile}
              className="flex border rounded-full h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full">Test</div>
        </div>
        <div className="flex p-3 border-4 rounded-lg border-white w-full h-96">
          <div className="w-full">Test</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
