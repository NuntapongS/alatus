import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-[url('https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg')] bg-cover">
      <button
        className="flex justify-center items-center bg-white text-Text-title w-[184px] h-12 rounded-full border-4 border-button-primary"
        onClick={() => navigate("/home")}
      >
        Back
      </button>
    </div>
  );
};

export default AboutMe;
