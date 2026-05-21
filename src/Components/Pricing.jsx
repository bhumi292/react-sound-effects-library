function Pricing() {

 return (

    <div className="bg-blue-700 py-24 px-6">

      {/* Heading */}
      <h1 className="text-white text-2xl font-bold text-center">
        Download sound effects for your project
      </h1>

      {/* Sub Heading */}
      <p className="text-white text-center text-m mt-10">
        Find the right plan for you
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-24">

        {/* Basic Box */}
        <div className="w-[320px] h-[360px] rounded-2xl p-10 text-white border border-white/40">

          <h2 className="text-2xl font-bold">
            Basic
          </h2>

          <p className="mt-8 text-sm leading-8 text-white/90 max-w-xs">
            Download any royalty-free sound effects
          </p>

          <h3 className="mt-10 text-l">
            Free
          </h3>

          <button className="mt-6 border border-white text-white font-semibold px-10 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition">

            Get Started

          </button>

        </div>

        {/* Premium Box */}
        <div className="w-[320px] h-[360px] rounded-2xl p-10 text-white bg-blue-500">

          <h2 className="text-2xl font-bold mt-auto">
            Premium
          </h2>

          <p className="mt-8 text-sm leading-8 text-white/90 max-w-xs">
            Download premium sound effects and use
            them for any business purpose
          </p>

          <h3 className="mt-10 text-l">
            Start from $12/month
          </h3>

          <button className="mt-6 bg-white text-blue-700 font-semibold px-10 py-4 rounded-lg hover:bg-gray-100 transition">

            Get Started

          </button>

        </div>

      </div>

      {/* Bottom Text */}
      <p className="text-center text-white text-l mt-24">
        Join premium with 434,849 creators.
      </p>

    </div>

  );
}

export default Pricing;