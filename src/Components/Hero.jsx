import heroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="max-w-4xl w-full mx-auto px-4 py-10 flex flex-col min-h-screen text-center">

        {/* 🔝 Top + Middle (gap here) */}
        <div className="flex flex-col gap-20">

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
              className="px-4 py-3 w-64 md:w-80 rounded-l-lg outline-none"
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-r-lg">
              Search
            </button>
          </div>

          <p className="text-white text-lg">
            Try keyword : happy, funny, natural, horror, jumpscare and more
          </p>

        </div>

        {/* 🔻 Bottom line (separate) */}
        <p className="text-white text-lg mt-auto">
          650,654 Available Sounds. Library Updated Weekly. See popular sounds
        </p>

      </div>
    </section>
  );
}

export default Hero;