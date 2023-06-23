"use-client"
import MediaWithContent from "@/components/moleclues/MediaWithContent/MediaWithContent";
import { specificationsConfig } from "../../../../_mocks_/specification";

const ProductSpecificationWrapper = () => {
  const { subTitle, title, specsLists } = specificationsConfig;

  const renderSpecs = specsLists?.map((data) => {
    const { id, specsImageUrl, specsName } = data;
    return (
      <div key={id} className="grid-x">
        <div className="cell small-12 medium-12 large-12 text-center large-text-left">
          <MediaWithContent
            media={{
              type: "image",
              imageSrc:specsImageUrl,
              imageWidth: 80,
              addClasses: "p-10",
            }}
          >
            <h4 className="fg-primary l-bold">{specsName}</h4>
            <p className="fg-dark-gray"></p>
          </MediaWithContent>
        </div>
      </div>
    );
  });

  return (
    <div
      className="large-p-b-60 m-b-70"
    >
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell">
            <div className="grid-x align-middle">
              <div className="cell small-12 text-center large-text-left">
                <h6 className="bold fg-primary">{subTitle}</h6>
                <h2 className="bold">
                  <span>{title}</span>
                </h2>
              </div>
              <div className="cell">
                <div className="grid-x grid-margin-x grid-margin-y align-middle">
                  <div className="cell small-12 medium-12 large-5 text-center large-text-left">
                    {renderSpecs}
                  </div>
                  <div className="cell small-12 medium-12 large-7">
                    <MediaWithContent media={{
                      type: "image",
                      imageSrc: '/features-3.jpg',
                      addClasses: "grid-x background-fullscreen-cover",
                    }}/>
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

export default ProductSpecificationWrapper;
