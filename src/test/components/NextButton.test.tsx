import * as nextButton from "../../components/button/NextButton";

describe("NextButton", () => {
  test("User should see background next button is black and border is [#E53A68]", () => {
    const actual = nextButton.styleNextButton();
    expect(actual).toBe(
      "flex justify-center items-center font-serif bg-black hover:bg-border-next text-white  w-[184px] h-12 rounded-full border-4 border-border-next"
    );
  });
});
