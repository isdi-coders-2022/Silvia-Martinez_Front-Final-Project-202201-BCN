import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { wrapper } from "../redux/store";
import React, { FC } from "react";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(MyApp);
