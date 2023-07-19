type navigateButtonProps = {
  onClick: () => void;
};

const NavigateBackButton = (props: navigateButtonProps) => {
  return (
    <button className={styleBackButton()} onClick={props.onClick}>
      Back
    </button>
  );
};

export default NavigateBackButton;

export const styleBackButton = () => {
  return "flex justify-center items-center bg-black hover:bg-border-next font-serif text-white w-[184px] h-12 rounded-full border-4 border-border-back";
};
