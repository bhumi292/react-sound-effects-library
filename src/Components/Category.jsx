import musicImg from "../assets/img/music.png";
import industryImg from "../assets/img/industry.jpg";
import movieImg from "../assets/category/movie.jpg";
import animalImg from "../assets/category/animal.jpg";
import peopleImg from "../assets/category/people.jpg";
import vehicleImg from "../assets/category/vehicle.jpg";
import soundImg from "../assets/category/sound.jpg";
import emergencyImg from "../assets/category/emergency.jpg";
import bellImg from "../assets/category/bell.jpg";
import natureImg from "../assets/category/nature.jpg";
import cartoonImg from "../assets/category/cartoon.jpg";
import horrorImg from "../assets/category/horror.jpg";

function Category() {
  const categories = [
    { id: 1, title: "Music", image: musicImg },
    { id: 2, title: "Industry", image: industryImg },
    { id: 3, title: "Movie", image: movieImg },
    { id: 4, title: "Animal", image: animalImg },
    { id: 5, title: "People", image: peopleImg },
    { id: 6, title: "Vehicle", image: vehicleImg },
    { id: 7, title: "Sound-design", image: soundImg },
    { id: 8, title: "Emergency", image: emergencyImg },
    { id: 9, title: "Bell", image: bellImg },
    { id: 10, title: "Nature", image: natureImg },
    { id: 11, title: "Cartoon", image: cartoonImg },
    { id: 12, title: "Horror", image: horrorImg },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-12">
        Browse by category
      </h1>

      {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">

        {categories.map((item) => (

          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
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