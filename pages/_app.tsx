import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { RootState, wrapper } from "../redux/store";
import React, { FC, useEffect } from "react";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { useDispatch, useSelector } from "react-redux";
import { LoadUserThunks } from "../redux/thunks/thunks";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user || !user._id) {
      if (localStorage.getItem("token")) {
        dispatch(LoadUserThunks);
      }
    }
  }, [user, dispatch]);
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
