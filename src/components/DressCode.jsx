import zapatos from "../assets/zapatos.png";
import elemento from "../assets/elemento.png";

export default function DressCode() {
  return (
    <section className="flex flex-col items-center relative">
      <img src={elemento} alt="" className="w-full object-cover" data-aos="fade-in" />
      <img
        src={zapatos}
        alt=""
        className="absolute pt-12 md:pt-16 lg:pt-20 w-[100px] md:w-[130px] lg:w-[150px]"
        data-aos="fade-down"
      />
      <div className="flex flex-col items-center absolute tracking-[2px] bottom-20 md:bottom-32 lg:bottom-25 " data-aos="fade-up" data-aos-delay="200">
        <p className="font-area font-thin text-[#ffffff] text-[16px] md:text-[22px] lg:text-[26px]">
          DRESS CODE
        </p>
        <p className="font-area text-[#ffffff] text-[28px] md:text-[40px] lg:text-[48px]">
          ELEGANTE
        </p>
      </div>
    </section>
  );
}
