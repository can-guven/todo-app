import Header from "./Header";
import renderer from "react-test-renderer";

describe("Header component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
