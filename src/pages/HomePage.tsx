import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-[url('https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg')] bg-cover">
      <div className="flex flex-col ">
        <div className="flex flex-col justify-center items-center  tracking-[6px]  pt-[230px] pb-10">
          <div className="font-semibold text-3xl text-Text-title">
            Nuntapong (Pat) Siripanyawong
            <span className="blink font-bold">|</span>
          </div>
        </div>
        <div className="flex justify-center text-xl text-Text-title tracking-[6px] font-semibold pb-10">
          Welcome To My Page
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button
          className="flex justify-center items-center bg-white text-Text-title w-[184px] h-12 rounded-full border-4 border-button-boarder"
          data-testid="about-me-button"
          onClick={() => navigate("/about-me")}
        >
          About Me
        </button>
      </div>
    </div>
  );
};

export default HomePage;
