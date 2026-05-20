import { useState, useEffect } from "react";

export default function Faltan() {
  const calcularTiempoRestante = () => {
    const diferencia = new Date("2026-10-17") - new Date();

    let tiempoRestante = {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };

    // Si la fecha aún no ha pasado, calculamos las unidades
    if (diferencia > 0) {
      tiempoRestante = {
        dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diferencia / 1000 / 60) % 60),
        segundos: Math.floor((diferencia / 1000) % 60),
      };
    }

    return tiempoRestante;
  };

  const [tiempo, setTiempo] = useState(calcularTiempoRestante());

  useEffect(() => {
    // Actualizamos el estado cada 1000 ms (1 segundo)
    const timer = setInterval(() => {
      setTiempo(calcularTiempoRestante());
    }, 1000);

    // Limpiamos el intervalo cuando el componente se desmonta
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="bg-[#000000] font-area text-[#ffffff] flex flex-col items-center gap-2
        pt-10 pb-10 md:pt-16 md:pb-16 tracking-[0.2em] 
    "
    >
      <h2 className="md:text-xl lg:text-2xl" data-aos="fade-up">FALTAN</h2>
      {tiempo ? (
        <div className="flex text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] gap-1 font-normal" data-aos="zoom-in" data-aos-delay="200">
          <p>{tiempo.dias.toString().padStart(2, "0")}</p>
          <p>:</p>
          <p>{tiempo.horas.toString().padStart(2, "0")}</p>
          <p>:</p>
          <p>{tiempo.minutos.toString().padStart(2, "0")}</p>
          <p>:</p>
          <p>{tiempo.segundos.toString().padStart(2, "0")}</p>
        </div>
      ) : null}

      <h2 className="pt-1 md:text-xl lg:text-2xl" data-aos="fade-up" data-aos-delay="400">PARA CELEBRAR</h2>
    </section>
  );
}
