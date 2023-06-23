import { Heading } from "@/components/atoms";
import { headerConfig } from "../../../../_mocks_/header";

const Banner = () => {
  const {bannerTButton,bannerSubTitle,bannerTitle,bannerImageUrl}=headerConfig;

  return (
    <div className="grid-x">
      <div className="cell">
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playball&amp;display=swap"
          rel="stylesheet"
        />
        <div
          className="grid-x relative background-3by4screen-cover w-11c2df07-ae67-4a99-b43a-1c1643398daa background right-center medium-center-center"
          style={{
            backgroundImage:`url(${bannerImageUrl})`,
          }}
        >
          
          <div className="cell align-self-bottom medium-align-self-middle small-banner-overlay">
            <div className="grid-x grid-container grid-padding-2x">
              <div className="cell small-12 medium-8 medium-offset-1 large-6 large-offset-0">
                <Heading headingLevel="h1" addClasses="m-t-50 fg-light banner-title uppercase bold">{bannerSubTitle}</Heading>
                <Heading headingLevel="h2" addClasses="m-b-15 medium-m-b-30 fg-light banner-subtitle">{bannerTitle}</Heading>
                <div className="button-group large">
                  <a className="button hollow light" href="/">
                  {bannerTButton}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
