import * as backButton from "../../components/button/BackButton";

describe("BackButton", () => {
  test("User should see background back button is black and border is [#E53A68]", () => {
    const actaul = backButton.styleBackButton();
    expect(actaul).toBe(
      "flex justify-center items-center bg-black hover:bg-border-next font-serif text-white w-[184px] h-12 rounded-full border-4 border-border-back"
    );
  });
});
