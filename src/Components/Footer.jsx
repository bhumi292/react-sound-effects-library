import waves from "../assets/img/wave.png";

function Footer() {
  return (

    <footer className="bg-black text-white py-16 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* Section 1 */}
        <div>

          {/* Logo */}
          <img
            src={waves}
            alt="logo"
            className="w-40"
          />

          {/* Description */}
          <p className="text-gray-400 mt-6 leading-7">
            WavesCo provides high quality sound effects
            and audio assets for video creators,
            filmmakers, and music producers.
          </p>

          {/* Copyright */}
          <p className="text-gray-500 mt-10 text-sm">
            WavesCo ©2021, All rights reserved
          </p>

        </div>

        {/* Section 2 */}
        <div>

          <h2 className="text-xl font-bold mb-6">
            Social Media
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li>
              <a href="#">Instagram</a>
            </li>

            <li>
              <a href="#">Twitter</a>
            </li>

            <li>
              <a href="#">Facebook</a>
            </li>

            <li>
              <a href="#">YouTube</a>
            </li>

          </ul>

        </div>

        {/* Section 3 */}
        <div>

          <h2 className="text-xl font-bold mb-6">
            Company
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li>
              <a href="#">About Us</a>
            </li>

            <li>
              <a href="#">Careers</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>

          </ul>

        </div>

        {/* Section 4 */}
        <div>

          <h2 className="text-xl font-bold mb-6">
            Product
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li>
              <a href="#">Sound Effects</a>
            </li>

            <li>
              <a href="#">Music Packs</a>
            </li>

            <li>
              <a href="#">Voice Over</a>
            </li>

            <li>
              <a href="#">Audio Library</a>
            </li>

          </ul>

        </div>

      </div>

    </footer>

  );
}

export default Footer;