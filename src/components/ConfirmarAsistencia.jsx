import elemento2 from "../assets/elementos2.png";
import confirmarAsistencia from "../assets/confirmar-asistencia.png";
import estaFiesta from "../assets/esta-fiesta.png";

export default function ConfirmarAsistencia() {
  return (
    <section className="flex flex-col items-center relative bg-[#ffffff]">
      <img
        src={elemento2}
        alt=""
        className="-mt-14 w-full object-cover lg:-mt-18"
        data-aos="fade-in"
      />
      <img
        src={estaFiesta}
        alt=""
        className="pt-10 md:pt-16 lg:pt-20 absolute w-[330px] md:w-[420px] lg:w-[480px]"
        data-aos="zoom-in"
      />
      <a
        href="https://forms.gle/WSReL2Em4SgoB1eY8"
        target="_blank"
        className="absolute bottom-15 md:bottom-18 lg:bottom-20"
        data-aos="zoom-in-up" data-aos-delay="300"
      >
        <img
          src={confirmarAsistencia}
          alt=""
          className="w-[230px] md:w-[300px] lg:w-[350px]"
        />
      </a>
    </section>
  );
}
