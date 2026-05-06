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
    <div className="py-10 text-center">

      {/* Title */}
      <h2 className="text-lg font-medium mb-8">
        Trusted by top Youtuber and Production House
      </h2>

      {/* Logo Row */}
      <div className="flex justify-center items-center gap-20 flex-nowrap">

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="brand"
            className="h-15 w-25 object-contain opacity-80 hover:opacity-100 transition"
          />
        ))}

      </div>
    </div>
  );
}
export default Production;
