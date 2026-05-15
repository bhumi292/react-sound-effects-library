import {
  FaHeadphones,
  FaMusic,
  FaUsers,
  FaStar,
} from "react-icons/fa";

function S_six() {

  const stats = [
    {
      id: 1,
      icon: <FaHeadphones />,
      title: "Customer satisfied",
      desc: "We've helped more than 1 million customers find best sound effects.",
    },

    {
      id: 2,
      icon: <FaMusic />,
      title: "Sound Effects",
      desc: "Huge collection of high quality sounds ready for your projects.",
    },

    {
      id: 3,
      icon: <FaUsers />,
      title: "Active Users",
      desc: "Thousands of creators trust our platform every single day.",
    },

    {
      id: 4,
      icon: <FaStar />,
      title: "Positive Reviews",
      desc: "Our users love the quality and simplicity of our sound library.",
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

              {/* Icon */}
              <div className="text-4xl text-blue-600">
                {item.icon}
              </div>

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

export default S_six;