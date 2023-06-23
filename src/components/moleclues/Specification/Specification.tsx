import { featuresConfig } from "../../../../_mocks_/featuresConfig";
import MediaWithContent from "../MediaWithContent/MediaWithContent";

const Specification = () => {
  const {
    featureSubTitle,
    featureButton,
    featureTitle,
    featureImgeUrl,
    featureList,
  } = featuresConfig;

  const renderFeature = featureList.map((feature) => {
    const { id, title, subTitle } = feature;
    return (
      <div key={id} className="cell b-b-1x b-b-light-gray p-b-10 m-b-20">
        <div className="grid-x">
          <div className="cell small-12 medium-6 large-6">
            <h5 className="bold">{title}</h5>
          </div>
          <div className="cell small-12 medium-6 large-6">
            <h6 className="bold fg-dark-gray">{subTitle}</h6>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      className="p-b-40 large-p-b-60 large-m-b-50"
    >
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell">
            <div className="grid-x">
              <div className="cell small-12">
                <div className="grid-x grid-margin-x">
                  <div className="cell small-12 medium-8 large-6 text-center medium-text-left">
                    <h6 className="bold fg-primary m-b-0">{featureSubTitle}</h6>
                    <h2 className="large-m-b-50 bold">{featureTitle}</h2>
                  </div>
                  <div className="cell small-12 medium-4 large-6 text-center medium-text-right m-t-30">
                    <a className="bold button hvr-bubble-bottom" href="/">
                      {featureButton}
                    </a>
                  </div>
                  <div className="cell small-12 medium-12 m-t-30">
                    <div className="grid-x grid-margin-x grid-margin-y align-middle">
                      <div className="cell small-12 medium-12 large-5">
                        <MediaWithContent
                          media={{
                            type: "image",
                            imageSrc: featureImgeUrl,
                          }}
                        />
                      </div>
                      <div className="cell small-12 medium-9 medium-offset-2 large-6 large-offset-1 text-center medium-text-left">
                        <div>{renderFeature}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Specification;
