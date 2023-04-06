import { Inter } from "next/font/google";
import styles from "./css/page.module.css";
import Splash from "./components/Splash";
import Gallery from "./components/Gallery";
import Locations from "./components/Locations";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

export default function Home() {
  return (
    <main id="home" className={`${styles.homeMain} ${inter.variable}`}>
      <Splash />
      <Gallery />
      <Locations />
    </main>
  );
}
