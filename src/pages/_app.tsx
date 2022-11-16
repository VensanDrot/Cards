import "../../styles/globals.css";
import "../../styles/main.css";
import Nav from "../components/Nav";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </>
  );
}
