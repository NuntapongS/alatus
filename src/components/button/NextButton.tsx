type nextButtonProps = {
  message: string;
  onClick: () => void;
};

const NextButton = (props: nextButtonProps) => {
  return (
    <button
      className="flex justify-center items-center bg-white text-text-next w-[184px] h-12 rounded-full border-4 border-border-next"
      onClick={props.onClick}
    >
      {props.message}
    </button>
  );
};

export default NextButton;
