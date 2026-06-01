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
  <h2 className="text-base sm:text-lg md:text-xl font-medium mb-8">
    Trusted by top Youtuber and Production House
  </h2>

  {/* Logo Row */}
  <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">

    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="brand"
        className="
          h-8 sm:h-10 md:h-12 lg:h-14
          w-auto
          max-w-[100px] sm:max-w-[120px]
          object-contain
          opacity-80
          hover:opacity-100
          transition
        "
      />
    ))}

  </div>

</div>
  );
}

export default Production;