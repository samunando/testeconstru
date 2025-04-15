import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/global.css";

const AosInit = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return null;
};

export default AosInit;
