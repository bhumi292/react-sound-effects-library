import img1 from "../assets/img/wb.png";
import img2 from "../assets/img/wb.png";
import img3 from "../assets/img/wb.png";
import img4 from "../assets/img/wb.png";
import img5 from "../assets/img/wb.png";
import img6 from "../assets/img/wb.png";
import img7 from "../assets/img/wb.png";


function Production() {
   const images = [
    { id: 1, src: img1, alt: "Sound 1" },
    { id: 2, src: img2, alt: "Sound 2" },
    { id: 3, src: img3, alt: "Sound 3" },
    { id: 4, src: img4, alt: "Sound 4" },
    { id: 5, src: img5, alt: "Sound 5" },
    { id: 6, src: img6, alt: "Sound 6" },
    { id: 7, src: img7, alt: "Sound 7" },
  ];

  return (
    <div className="flex justify-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3 place-items-center">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-full max-w-[100px] h-[100px] object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default Production;
