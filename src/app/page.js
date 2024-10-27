import Home_V1 from "./(home)/home-v1/page";
import Wrapper from "./layout-wrapper/wrapper";
import Head from 'next/head'; // Import Head component


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
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper>
        <Home_V1 />
      </Wrapper>
    </>
  );
}
