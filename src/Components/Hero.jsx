import heroImg from "../assets/img/Hero.jpg";

function Hero() {
  return (
    <section
      className="h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="max-w-4xl w-full mx-auto px-4 flex flex-col text-center">

        {/* 🔝 Top + Middle */}
        <div className="flex flex-col gap-6">

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Free download sound effects without copyright
          </h1>

          <p className="text-white text-lg">
            Download free copyright sound effect for your YouTube video and any use
          </p>

          {/* Search */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search sound effects..."
              className="px-4 py-3 w-64 md:w-80 rounded outline-none"
            />
          </div>

          <p className="text-white text-lg">
            Try keyword : happy, funny, natural, horror, jumpscare and more
          </p>

          {/* Bottom line */}
          <p className="text-white text-lg mt-2">
            650,654 Available Sounds. Library Updated Weekly. See popular sounds
          </p>

        </div>

      </div>
    </section>
  );
}

export default Hero;