import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import "@/styles/toastify.css";

function CargoshipApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Toaster />
    </SessionProvider>
  );
}

export default CargoshipApp;
