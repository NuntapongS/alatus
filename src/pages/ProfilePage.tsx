import { useNavigate } from "react-router-dom";
import profile from "../images/S__10960911.jpg";
import NavigateBackButton from "../components/button/BackButton";
import NextButton from "../components/button/NextButton";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-[url('https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg')] bg-cover">
      <div className="flex justify-between p-4">
        <NavigateBackButton
          onClick={() => {
            navigate("/home");
          }}
        />
        <NextButton
          message={"Portfolio"}
          onClick={() => {
            navigate("/portfolio");
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
          <div className="text-xl">Hello World !</div>
          <div className="text-text-title text-4xl pb-10">
            Welcome To My Profile
            <span className="blink font-bold">|</span>
          </div>
          <div>
            <div className="py-1">
              Interview: I believe that making software has to be fun and always
              self-improvement
            </div>
            <div className="py-1">
              Name: Nuntapong (Pat) Siripanyawong | นันทพงศ์ (ภัทร์)
              ศิริปัญญาวงศ์
            </div>
            <div className="py-1">
              Job: I am product developer at ODDS| Team LeSSExample
            </div>
            <div className="py-1">Age: 1998 - Present</div>
          </div>
          <div className="mt-8 text-xl text-text-title">Social Media</div>
          <div className="flex py-10">
            <div className="mx-10">
              <a
                href="https://www.facebook.com/bloodzlu5t/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook fa-2xl"></i>
              </a>
            </div>

            <div className="mx-10">
              <a
                href="https://github.com/NuntapongS"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github fa-2xl"></i>
              </a>
            </div>

            <div className="mx-10">
              <a
                href="https://www.instagram.com/nuntapong.sr/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram fa-2xl"></i>
              </a>
            </div>

            <div className="mx-10">
              <a
                href="mailto:nuntapong.sr@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-envelope fa-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
