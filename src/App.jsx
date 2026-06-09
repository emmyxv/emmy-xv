import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ConfirmarAsistencia from "./components/ConfirmarAsistencia";
import DressCode from "./components/DressCode";
import EmmyXV from "./components/EmmyXV";
import Faltan from "./components/Faltan";
import Fecha from "./components/Fecha";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Ubicacion from "./components/Ubicacion";
import Regalo from "./components/Regalo";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    // Recalcular posiciones por si las imágenes demoran en cargar en celular
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black flex justify-center overflow-x-hidden">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-[#ffffff] shadow-2xl relative">
        <Inicio />
        <Fecha />
        <Faltan />
        <Ubicacion />
        <Regalo />
        <DressCode />
        <ConfirmarAsistencia />
        <EmmyXV />
        <Footer />
      </div>
    </div>
  );
}

export default App;
