import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { wrapper } from "../redux/store";
import React, { FC } from "react";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <>
          <NextNProgress
            color="#fd9cca"
            startPosition={0.3}
            stopDelayMs={200}
            height={9}
            showOnShallow={true}
            options={{ showSpinner: false }}
          />
          <Component {...pageProps} />
        </>
      </Layout>
    </>
  );
};

export default wrapper.withRedux(MyApp);
