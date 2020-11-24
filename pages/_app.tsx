import type { AppProps } from "next/app";
import Head from "next/head";
import withApollo from "@components/withApollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key="title">abc</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default withApollo(MyApp);

