import Home_V1 from "./(home)/home-v1/page";
import Wrapper from "./layout-wrapper/wrapper";
import Head from 'next/head'; // Import Head component

export const metadata = {
  title: "Inmobi v1 || Inmobiliaria - Real Estate",
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
