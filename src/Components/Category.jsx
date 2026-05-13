import img1 from "../assets/img/music.png";
import img2 from "../assets/img/industry.png";
import img3 from "../assets/img/movie.png";
import img4 from "../assets/img/animal.png";
import img5 from "../assets/img/peoples.png";
import img6 from "../assets/img/cars.png";
import img7 from "../assets/img/sound-design.png";
import img8 from "../assets/img/bell.png";
import img9 from "../assets/img/sos.png";
import img10 from "../assets/img/nature.png";
import img11 from "../assets/img/cartoon.png";
import img12 from "../assets/img/horror.png";

function Category() {

  const categories = [
    { id: 1, title: "Music", image: img1 },
    { id: 2, title: "Industry", image: img2 },
    { id: 3, title: "Movie", image: img3 },
    { id: 4, title: "Animal", image: img4 },
    { id: 5, title: "People", image: img5 },
    { id: 6, title: "Vehicle", image: img6 },
    { id: 7, title: "Sound-design", image: img7 },
    { id: 8, title: "Emergency", image: img8 },
    { id: 9, title: "Bell", image: img9 },
    { id: 10, title: "Nature", image: img10 },
    { id: 11, title: "Cartoon", image: img11 },
    { id: 12, title: "Horror", image: img12 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-16 py-6">

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-12">
        Browse by category
      </h1>

      {/* Gallery */}
     <div className="flex flex-wrap justify-center gap-6">

        {categories.map((item) => (

    <div
      key={item.id}
      className="relative overflow-hidden cursor-pointer group w-[160px]"
    >

      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

        <h2 className="text-white text-xl font-semibold text-center">
          {item.title}
        </h2>

      </div>

    </div>

  ))}

</div>

      {/* Bottom Link */}
      <button className="mt-12 text-blue-600 underline">
        See all category
      </button>

    </div>
  );
}

export default Category;