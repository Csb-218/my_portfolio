import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/navigation/Navbar";
import { NavProvider } from "@/context/NavContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavProvider>
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
      </NavProvider>
    </>
  )

    ;
}
