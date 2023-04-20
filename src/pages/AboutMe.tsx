import { useNavigate } from "react-router-dom";
import profile from "../images/S__10960911.jpg";
import NavigateBackButton from "../components/button/Button";

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
      <div className="flex justify-between items-center min-h-[600px] p-32 text-white">
        <div className="flex p-3 border-4 rounded-lg border-white w-[700px] h-96 ">
          <div className="flex w-full justify-center items-center p-5">
            <img
              src={profile}
              className="flex border rounded-full h-64 w-64 object-cover"
              alt=""
            />
          </div>
          <div className="flex w-full p-5">test</div>
        </div>
        <div className="flex p-3 border-4 rounded-lg border-white w-[700px] h-96">
          Test
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
