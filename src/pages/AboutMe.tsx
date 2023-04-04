import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-[url('https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg')] bg-cover">
      <div className="flex justify-between p-4">
        <button
          className="flex justify-center items-center bg-white text-text-back w-[184px] h-12 rounded-full border-4 border-boarder-back"
          onClick={() => navigate("/home")}
        >
          Back
        </button>
        <button
          className="flex justify-center items-center bg-white text-text-next w-[184px] h-12 rounded-full border-4 border-boarder-next"
          onClick={() => navigate("/portfolio")}
        >
          Portfolio
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
