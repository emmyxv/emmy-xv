import linea from "../assets/linea.png";
import verdaderoRegalo from "../assets/verdadero-regalo.png";
import compañia from "../assets/compañia.png";

export default function Regalo() {
  return (
    <section className="bg-[#ffffff] flex flex-col items-center mb-10">
      <img
        src={linea}
        alt=""
        className="w-[250px] sm:w-[220px] md:w-[300px]"
        data-aos="fade-in"
      />
      <img
        src={verdaderoRegalo}
        alt=""
        className="w-[320px] sm:w-[280px] md:w-[350px]"
        data-aos="fade-up"
      />
      <img
        src={compañia}
        alt=""
        className="w-[300px] sm:w-[260px] md:w-[320px] -mt-6 mr-5 sm:-mt-7 sm:mr-6 md:-mt-8 md:mr-7"
        data-aos="fade-up"
        data-aos-delay="200"
      />
      <div
        className="flex flex-col font-area text-center gap-4 mt-5 px-4 text-[#333333]"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <p className="text-[13px] sm:text-[15px] md:text-[16px] tracking-[2px] leading-relaxed">
          SI ADEMÁS TE GUSTARÍA <br /> HACERME UN PRESENTE <br /> MI CUENTA ES
        </p>
        <p className="text-[14px] sm:text-[16px] md:text-[17px] tracking-[1px] text-[#000000]">
          ALIAS: <span className="font-bold">EMMA.BOTHEATOZ</span>
        </p>
      </div>
    </section>
  );
}
