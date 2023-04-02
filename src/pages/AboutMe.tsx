import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-[url('https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg')] bg-cover">
      <div className="flex justify-between p-4">
        <button
          className="flex justify-center items-center bg-white text-Text-title w-[184px] h-12 rounded-full border-4 border-button-boarder"
          onClick={() => navigate("/home")}
        >
          Back
        </button>
        <button
          className="flex justify-center items-center bg-white text-Text-title w-[184px] h-12 rounded-full border-4 border-button-boarder"
          onClick={() => navigate("/home")}
        >
          Portfolio
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
