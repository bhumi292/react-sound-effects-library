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

    <div className="max-w-7xl mx-auto px-10 py-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* Left Section */}
        <div>

          <h1 className="text-5xl font-bold leading-tight">
            Why-us?
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8 max-w-md">

            We are provide the best quality sound
            effects without copyright.

          </p>

        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {stats.map((item) => (

            <div key={item.id}>

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 object-contain"
              />

              <h3 className="mt-4 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default WhyUs