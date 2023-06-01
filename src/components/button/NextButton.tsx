type nextButtonProps = {
  message: string;
  onClick: () => void;
};

const NextButton = (props: nextButtonProps) => {
  return (
    <button
      className="flex justify-center items-center font-serif bg-black hover:bg-border-next text-white  w-[184px] h-12 rounded-full border-4 border-border-next"
      onClick={props.onClick}
    >
      {props.message}
    </button>
  );
};

export default NextButton;
