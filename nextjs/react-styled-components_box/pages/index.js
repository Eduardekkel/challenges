import StyledBox from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
export default function HomePage() {
  return (
    <div style={{ display: "flex" }}>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox $isBlack={true} />
    </div>
  );
}
