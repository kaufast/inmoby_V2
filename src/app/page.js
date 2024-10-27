import Home_V1 from "./(home)/home-v1/page";
import Wrapper from "./layout-wrapper/wrapper";

// Define metadata object
export const metadata = {
  title: "Inmobi v1 || Inmobiliaria - Real Estate",
  robots: {
    index: false,
    follow: false
  }
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V1 />
    </Wrapper>
  );
}
