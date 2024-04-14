import type { AppProps } from "next/app";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-grow flex-col h-full">
      <Header />
      <div className="flex-grow overflow-y-auto">
        <Component {...pageProps}></Component>
      </div>
      <Footer />
    </div>
  );
}
