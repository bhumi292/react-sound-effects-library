import { FaQuoteLeft } from "react-icons/fa";

import user1 from "../assets/img/image-1.png";
import user2 from "../assets/img/image-2.png";
import user3 from "../assets/img/image-3.png";

function Testimonial() {

  const testimonials = [
    {
      id: 1,
      image: user1,
      name: "Anne Joyce",
      role: "Video editor at Dude Perfect",
      review:
        "The sounds from WavesCo is great and it really helps our team to save time and production costs.",
    },

    {
      id: 2,
      image: user2,
      name: "Edward Sann",
      role: "Head of Video editor at Netflix",
      review:
        "WavesCo was a great choice for our team for film production, the quality is amazingly great.",
    },

    {
      id: 3,
      image: user3,
      name: "Ronn D.",
      role: "Video Editor at PewDiePie",
      review:
        "Perfect way to get best quality sound effects for youtube videos. Thanks to WavesCo team.",
    },
  ];

  return (

    <div className="max-w-6xl mx-auto px-6 py-24">

      {/* Small Title */}
      <h3 className="text-center text-orange-600 font-semibold tracking-[3px] uppercase">
        Testimonials
      </h3>

      {/* Main Heading */}
      <h1 className="text-xl font-bold text-center mt-6 leading-tight">
         Hear good experiences from our customers
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-20">

        {testimonials.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-xl  border border-black p-10 text-center"
          >

            {/* Quote Icon */}
            <div className="flex justify-center text-orange-600 text-2xl">

              <FaQuoteLeft />

            </div>

            {/* Review */}
            <p className="text-black leading-6">
              {item.review}
            </p>

            {/* Customer Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-full object-cover mx-auto mt-8"
            />

            {/* Name */}
            <h2 className="mt-6 text-lg font-bold">
              {item.name}
            </h2>

            {/* Role */}
            <p className=" text-gray-500">
              {item.role}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Testimonial;