const HomePage = () => {
  return (
    <div className="h-screen w-full bg-[url('https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg')] bg-cover">
      <div className="flex flex-col ">
        <div className="flex flex-col justify-center items-center text-3xl text-Text-title tracking-[6px] font-semibold pt-[250px] pb-10">
          Nuntapong (Pat) Siripanyawong |
        </div>
        <div className="flex justify-center text-xl text-Text-title tracking-[6px] font-semibold pb-10">
          Welcome To My Page
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button className="flex justify-center items-center bg-white text-Text-title w-[184px] h-12 rounded-full border-4 border-button-primary">
          About Me
        </button>
      </div>
    </div>
  );
};

export default HomePage;
