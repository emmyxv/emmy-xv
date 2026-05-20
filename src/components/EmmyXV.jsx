export default function EmmyXV() {
  const texto = Array.from({ length: 4 }).map((_, i) => (
    <h1 key={i} className="text-xl md:text-4xl font-area mx-3 tracking-tighter">
      <span className="font-extrabold">EMMY</span>XV
    </h1>
  ));

  return (
    <section
      className="pt-2 pb-4 overflow-hidden"
      data-aos="fade-in"
      data-aos-offset="0"
    >
      <div className="flex w-max animate-marquee">
        <div className="flex w-max items-center">{texto}</div>
        <div className="flex w-max items-center" aria-hidden="true">
          {texto}
        </div>
      </div>
    </section>
  );
}
