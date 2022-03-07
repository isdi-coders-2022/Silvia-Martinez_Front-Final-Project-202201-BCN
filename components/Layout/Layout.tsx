import Head from "next/head";

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Wallaplop</title>
      </Head>
      {children}
    </>
  );
};
