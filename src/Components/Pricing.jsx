function Pricing() {

  const plans = [
    {
      id: 1,
      title: "Basic",
      desc: "Download any royalty-free sound effects",
      price: "Free",
      button: "Get Started",
      bg: "bg-transparent border border-white/40",
    },

    {
      id: 2,
      title: "Premium",
      desc: "Download premium sound effects and use them for any business purpose",
      price: "Start from $12/month",
      button: "Get Started",
      bg: "bg-blue-500",
    },
  ];

  return (

    <div className="bg-blue-700 py-24 px-6">

      {/* Heading */}
      <h1 className="text-white text-5xl font-bold text-center">
        Download sound effects for your project
      </h1>

      {/* Sub Heading */}
      <p className="text-white text-center text-xl mt-10">
        Find the right plan for you
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-24">

        {plans.map((item) => (

          <div
            key={item.id}
            className={`w-[360px] h-[370px] rounded-2xl p-10 text-white ${item.bg}`}
          >

            {/* Title */}
            <h2 className="text-5xl font-bold">
              {item.title}
            </h2>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-white/90 max-w-xs">
              {item.desc}
            </p>

            {/* Price */}
            <h3 className="mt-24 text-3xl font-bold">
              {item.price}
            </h3>

            {/* Button */}
            <button className="mt-6 bg-white text-blue-700 font-semibold px-10 py-4 rounded-lg hover:bg-gray-100 transition">

              {item.button}

            </button>

          </div>

        ))}

      </div>

      {/* Bottom Text */}
      <p className="text-center text-white text-xl mt-24">
        Join premium with 434,849 creators.
      </p>

    </div>

  );
}

export default Pricing;