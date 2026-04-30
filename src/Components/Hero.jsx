import heroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <section 
      className="py-20 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      
      <div className="max-w-4xl mx-auto px-4 p-6 rounded">

        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Trusted by top Youtuber and Production House
        </h1>

        <p className="mt-6 text-white text-lg md:text-xl">
          Best sound effects for youtube videos. 
          Download high-quality audio without copyright.
        </p>

        <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Browse Sounds
        </button>

      </div>

    </section>
  );
}

export default Hero;