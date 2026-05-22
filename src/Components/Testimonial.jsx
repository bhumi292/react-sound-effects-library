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
      name: "John Carter",
      role: "Music Producer",
      review:
        "Amazing sound quality and very easy to use for our creative projects every day.",
    },

    {
      id: 3,
      image: user3,
      name: "Sarah Smith",
      role: "Content Creator",
      review:
        "Huge collection of sound effects with professional quality and simple downloads.",
    },
  ];

  return (

    <div className="max-w-7xl mx-auto px-6 py-24">

      {/* Small Title */}
      <h3 className="text-center text-blue-600 font-semibold tracking-[3px] uppercase">
        Testimonials
      </h3>

      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center mt-6 leading-tight">

        Hear good experiences
        <br />
        from our customers

      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">

        {testimonials.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-lg p-10 text-center"
          >

            {/* Quote Icon */}
            <div className="flex justify-center text-blue-600 text-4xl">

              <FaQuoteLeft />

            </div>

            {/* Review */}
            <p className="mt-8 text-gray-600 leading-8">
              {item.review}
            </p>

            {/* Customer Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mt-10"
            />

            {/* Name */}
            <h2 className="mt-6 text-2xl font-bold">
              {item.name}
            </h2>

            {/* Role */}
            <p className="mt-2 text-gray-500">
              {item.role}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Testimonial;