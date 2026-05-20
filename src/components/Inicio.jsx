import perfume from "../assets/perfume.png";

export default function Inicio() {
  return (
    <section className="bg-[#000000] pt-8 md:pt-12 lg:pt-16">
      <div className="font-area font-normal tracking-[0.3em] text-md md:text-lg lg:text-xl text-[#ffffff] flex justify-center gap-4 md:gap-7 ">
        <h1 data-aos="fade-down" data-aos-delay="100">READY</h1>
        <h1 data-aos="fade-down" data-aos-delay="300">FOR</h1>
        <h1 data-aos="fade-down" data-aos-delay="500">THE</h1>
        <div className="flex gap-4">
          <h1 data-aos="fade-down" data-aos-delay="700">PARTY</h1>
          <h1 data-aos="fade-down" data-aos-delay="900">?</h1>
        </div>
      </div>
      <img
        data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="1500"
        className="pl-1 mt-[-10%] md:w-[85%] md:mx-auto md:mt-[-5%]"
        src={perfume}
        alt=""
      />
    </section>
  );
}
