type nextButtonProps = {
  message: string;
  onClick: () => void;
};

const NextButton = ({ message, onClick }: nextButtonProps) => {
  return (
    <button className={styleNextButton()} onClick={onClick}>
      {message}
    </button>
  );
};

export default NextButton;

export const styleNextButton = () => {
  return "flex justify-center items-center font-serif bg-black hover:bg-border-next text-white  w-[184px] h-12 rounded-full border-4 border-border-next";
};
