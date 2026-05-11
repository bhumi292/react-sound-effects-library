import { Play, Heart, Download, MoreHorizontal } from "lucide-react";

function S_list() {

  const sounds = [
    {
      id: 1,
      name: "Sound name",
      time: "0:12",
      desc: "Confused excited crowd slight panic and distress",
      category: "Shocking, jumpscare",
    },

    {
      id: 2,
      name: "Sound name",
      time: "0:12",
      desc: "Confused excited crowd slight panic and distress",
      category: "Shocking, jumpscare",
    },

    {
      id: 3,
      name: "Sound name",
      time: "0:12",
      desc: "Confused excited crowd slight panic and distress",
      category: "Shocking, jumpscare",
    },

    {
      id: 4,
      name: "Sound name",
      time: "0:12",
      desc: "Confused excited crowd slight panic and distress",
      category: "Shocking, jumpscare",
    },

    {
      id: 5,
      name: "Sound name",
      time: "0:12",
      desc: "Confused excited crowd slight panic and distress",
      category: "Shocking, jumpscare",
    },

    {
      id: 6,
      name: "Sound name",
      time: "0:12",
      desc: "Confused excited crowd slight panic and distress",
      category: "Shocking, jumpscare",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-12">
        Best sound effects for youtube videos
      </h1>

      {/* Top Menu */}
      <div className="flex justify-between items-center flex-wrap gap-5 mb-12">

        {/* Categories */}
        <ul className="flex gap-8 flex-wrap text-lg">

          <li className="font-bold underline cursor-pointer">
            All
          </li>

          <li className="cursor-pointer hover:text-blue-500">
            Jumpscare
          </li>

          <li className="cursor-pointer hover:text-blue-500">
            Mellow
          </li>

          <li className="cursor-pointer hover:text-blue-500">
            Happiness
          </li>

          <li className="cursor-pointer hover:text-blue-500">
            Ambience
          </li>

          <li className="cursor-pointer hover:text-blue-500">
            Zonk
          </li>

        </ul>

        {/* Filter Button */}
        <button className="border px-5 py-2 rounded-md hover:bg-gray-100">
          Filter
        </button>

      </div>

      {/* Table Rows */}
      <div className="flex flex-col gap-8">

        {sounds.map((sound) => (

          <div
            key={sound.id}
            className="grid grid-cols-1 md:grid-cols-[250px_1fr_250px_150px] gap-6 items-center"
          >

            {/* Left */}
            <div className="flex items-center gap-4">

              <button className="bg-blue-100 p-3 rounded-full">
                <Play
                  size={18}
                  className="text-blue-500 fill-blue-500"
                />
              </button>

              <div>
                <h3 className="font-semibold">
                  {sound.name}
                </h3>

                <p className="text-gray-500">
                  {sound.time}
                </p>
              </div>

            </div>

            {/* Description */}
            <p className="text-gray-700">
              {sound.desc}
            </p>

            {/* Category */}
            <p className="text-gray-700">
              {sound.category}
            </p>

            {/* Icons */}
            <div className="flex items-center gap-6">

              <Heart className="cursor-pointer hover:text-red-500" />

              <Download className="cursor-pointer hover:text-blue-500" />

              <MoreHorizontal className="cursor-pointer" />

            </div>

          </div>

        ))}

      </div>

      {/* Bottom Link */}
      <button className="mt-12 text-blue-600 underline">
        See all sound effects
      </button>

    </div>
  );
}

export default S_list;