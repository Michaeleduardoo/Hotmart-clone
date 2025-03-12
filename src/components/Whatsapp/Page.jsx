import { useState, useEffect } from "react";
import { BiUpArrow } from "react-icons/bi";

function Whatsapp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#"
      className={`btn-whatsapp-pulse btn-whatsapp-pulse-border ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <BiUpArrow />
    </a>
  );
}

export default Whatsapp;
