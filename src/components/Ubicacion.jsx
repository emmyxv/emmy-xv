import hero from "../assets/hero-tienda.png";
import ubicacion from "../assets/ubicacion.png";
import btnComoLlegar from "../assets/como-llegar.png";

export default function Ubicacion() {
  return (
    <section className="flex flex-col items-center bg-[#ffffff]">
      <img src={hero} alt="" className="w-full object-cover" data-aos="fade-in" data-aos-duration="1500" />
      <img
        src={ubicacion}
        alt=""
        className="pt-8 pb-3 mr-16 w-[225px] md:w-[275px] md:mr-24 lg:w-[300px]"
        data-aos="fade-left"
      />
      <div className="flex flex-col items-end font-area ml-20 md:ml-32 pb-10 md:pb-14" data-aos="fade-right">
        <p className="text-[15px] md:text-[20px] lg:text-[22px]">
          CENTRO DE COMERCIO
        </p>
        <p className="text-[12px] md:text-[16px] lg:text-[18px]">
          SAN MARTÍN 1232
        </p>
        <a
          href="https://maps.app.goo.gl/AXPizx1KrAQk9hwU9"
          target="_blank"
          className="pt-2 md:pt-4"
          data-aos="zoom-in" data-aos-delay="300"
        >
          <img
            src={btnComoLlegar}
            alt=""
            className="w-[140px] md:w-[180px] lg:w-[200px]"
          />
        </a>
      </div>
    </section>
  );
}
