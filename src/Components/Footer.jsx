import waves from "../assets/img/wave.png";

function Footer() {
  return (

    <footer className="bg-blue-950 text-white py-10 px-4 sm:px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

        {/* Section 1 */}
        <div className="text-center lg:text-left">

  <img
    src={waves}
    alt="logo"
    className="w-28 mx-auto lg:mx-0"
  />

  <p className="mt-6 leading-7 text-sm sm:text-base">
    WavesCo provides high quality sound effects
    and audio assets for video creators,
    filmmakers, and music producers.
  </p>

  <p className="mt-8 text-sm">
    WavesCo ©2021, All rights reserved
  </p>

</div>

        {/* Section 2 */}
        <div>

          <h2 className="text-l font-bold mb-6">
            Social Media
          </h2>

          <ul className="space-y-4 text-white">

            <li>
              <a href="#">Twitter</a>
          
            </li>

            <li>
               <a href="#">Instagram</a>
            </li>

            <li>
              <a href="#">Youtube</a>
            </li>

            <li>
              <a href="#">Facebook</a>
            </li>

          </ul>

        </div>

        {/* Section 3 */}
        <div>

          <h2 className="text-lg font-bold mb-5">
            Company
          </h2>

          <ul className="space-y-4 text-white">

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">About us</a>
            </li>

            <li>
              <a href="#">Help</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>

          </ul>

        </div>

        {/* Section 4 */}
        <div>

          <h2 className="text-l font-bold mb-6">
            Product
          </h2>

          <ul className="space-y-3 text-white">

            <li>
              <a href="#">Browse Sound</a>
            </li>

            <li>
              <a href="#">pricing</a>
            </li>

            <li>
              <a href="#">FAQ</a>
            </li>

            <li>
              <a href="#">Affilate</a>
            </li>

          </ul>

        </div>

      </div>

    </footer>

  );
}

export default Footer;