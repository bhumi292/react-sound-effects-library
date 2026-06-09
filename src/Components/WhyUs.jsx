import img1 from "../assets/img/icon-primary.png";
import img2 from "../assets/img/ip1.png";
import img3 from "../assets/img/ip2.png";
import img4 from "../assets/img/ip3.png";

function WhyUs() {
  const stats = [
    {
      id: 1,
      image: img1,
      title: "1.203.322 Customer satisfied",
      desc: "We've helped more than 1 million customers find best sound effects",
    },

    {
      id: 2,
      image: img2,
      title: "650.654 Sounds",
      desc: "More than 600 thousand high quality to download. Still counting",
    },

    {
      id: 3,
      image: img3,
      title: "Royalty-free",
      desc: "Just download and use the sound for your videos without royalty",
    },

    {
      id: 4,
      image: img4,
      title: "Provide proper sounds",
      desc: "We just provide sounds with the best quality for customers",
    },
  ];

  return (

  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

    {/* Left Section */}
    <div className="text-center lg:text-left">

      <h1 className="text-xl sm:text-2xl font-bold text-orange-500">
        Why-us?
      </h1>

      <p className="mt-4 text-black font-bold text-2xl sm:text-3xl leading-relaxed max-w-md mx-auto lg:mx-0">
        We are provide the best quality sound
        effects without copyright.
      </p>

    </div>

    {/* Right Section */}
   <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">

      {stats.map((item) => (

        <div
          key={item.id}
          className="text-center sm:text-left"
        >

          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-14 h-14 object-contain mx-auto sm:mx-0"
          />

          <h3 className="mt-4 text-lg sm:text-xl font-semibold">
            {item.title}
          </h3>

          <p className="mt-3 text-black leading-7 text-sm sm:text-base">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</div>

  );
}

export default WhyUs;