import img1 from "../assets/img/dudeperfect.png";
import img2 from "../assets/img/Pewdiepie.png";
import img3 from "../assets/img/MrBeast.png";
import img4 from "../assets/img/wb.png";
import img5 from "../assets/img/netflix.png";
import img6 from "../assets/img/pixar.png";
import img7 from "../assets/img/picky picks.png";

function Production() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="py-10 px-4 text-center">

      {/* Title */}
      <h2 className="text-lg md:text-xl font-medium mb-8">
        Trusted by top Youtuber and Production House
      </h2>

      {/* Logo Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt="category"
      className="w-full h-auto object-cover"
    />
  ))}

      </div>

    </div>
  );
}

export default Production;