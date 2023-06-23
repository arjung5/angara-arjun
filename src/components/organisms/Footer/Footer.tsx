import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid-x dark large-p-t-b-30 large-m-t-80 medium-m-t-60 m-t-40">
      <div className="cell">
        <div className="grid-x grid-container grid-padding-x grid-padding-y grid-margin-y">
          <div className="cell medium-6 large-3">
            <Link
              className="a-light-gray font-size-large display-block m-b-20"
              href="/"
            >
              Products
            </Link>
            <div className="m-t-10 p-l-5">
              <div>
                <Link
                  className="a-medium-gray font-size-small m-t-10 display-block"
                  href="/"
                >
                  Neem Oil
                </Link>
              </div>
              <div>
                <Link
                  className="a-medium-gray font-size-small m-t-10 display-block"
                  href="/"
                >
                  Aloe Vera Oil
                </Link>
              </div>
              <div>
                <Link
                  className="a-medium-gray font-size-small m-t-10 display-block"
                  href="/"
                >
                  Amla Oil
                </Link>
              </div>
            </div>
          </div>
          <div className="cell medium-6 large-3">
            <Link
              className="a-light-gray font-size-large display-block m-b-20"
              href="/"
            >
              Blogs
            </Link>
            <div className="m-t-10 p-l-5">
              <div>
                <Link
                  className="a-medium-gray font-size-small m-t-10 display-block"
                  href="/"
                >
                  Everything You Need To Know About Hair Spa
                </Link>
              </div>
              <div>
                <Link
                  className="a-medium-gray font-size-small m-t-10 display-block"
                  href="/"
                >
                  Why Oiling Is Important For Healthy Hair?
                </Link>
              </div>
              <div>
                <Link
                  className="a-medium-gray font-size-small m-t-10 display-block"
                  href="/"
                >
                  Top 10 Hair Styling Ideas For Summer
                </Link>
              </div>
            </div>
          </div>
          <div className="cell medium-6 large-3">
            <Link
              className="a-light-gray font-size-large display-block m-b-20"
              href="/"
            >
              About Us
            </Link>
            <div className="m-t-10 p-l-5">
              <div>
                <Link
                  className="a-medium-gray font-size-small m-t-10 display-block"
                  href="/"
                >
                  This website template is created by Arjun Garg Cloud platform.
                  In order to make your online presence and increase revenue,
                  visit: letsconnectarjun@gmail.com
                </Link>
              </div>
            </div>
          </div>
          <div className="cell medium-6 large-3">
            <Link
              className="a-light-gray font-size-large display-block m-b-20"
              href="/"
            >
              Contact Us
            </Link>
            <div className="m-t-10 p-l-5">
              <div>
                <Link
                  className="a-medium-gray font-size-small m-t-10 display-block"
                  href="/"
                >
                  Send us email at: letsconnectarjun@gmail.com to launch your
                  new website.
                </Link>
              </div>
              <div>
                <Link
                  className="a-medium-gray font-size-small m-t-10 display-block"
                  href="/"
                >
                  Toll-free number: 721-781-3175
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
