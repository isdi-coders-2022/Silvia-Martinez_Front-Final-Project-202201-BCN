import Head from "next/head";
import { Navigation } from "../Navigation/Navigation";

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Wallaplop</title>
      </Head>
      <Navigation />
      {children}
    </>
  );
};
