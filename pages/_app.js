import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  // @NOTE: default
  // return  <Component {...pageProps} />;
  return <>
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  </>;
}
