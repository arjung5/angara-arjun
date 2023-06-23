import { Heading } from "@/components/atoms";
import MediaWithContent from "@/components/moleclues/MediaWithContent/MediaWithContent";
import { articleConfig } from "../../../../_mocks_/productDesc";

const ProductDescWrapper = () => {
  const { title, descLists } = articleConfig;

  const renderArticle = descLists.map((article) => {
    const { id, decsImageUrl, descName, description } = article;
    return (
      <MediaWithContent
        key={id}
        media={{
          type: "image",
          imageSrc:decsImageUrl,
          addClasses: "position-relative",
        }}
      >
        <Heading headingLevel="h4" addClasses="bold fg-dark p-l-20 m-t-30">
          {descName}
        </Heading>
        <p className="fg-dark p-l-20 m-b-30">{description}</p>
      </MediaWithContent>
    );
  });

  return (
    <div className="grid-x m-b-60 large-m-b-120 p-t-10 medium-p-t-0 large-p-t-80 large-p-b-30 light-primary">
      <div className="cell">
        <div className="grid-x w-50e78fe4-e0d2-412d-9a16-f47419f8996c">
          <div className="cell">
            <div className="grid-x">
              <div className="cell">
                <div className="grid-x">
                  <div className="cell small-12 medium-12 large-7 large-offset-3 text-center m-t-40 medium-m-t-80">
                    <h2 className="m-b-10 medium-m-b-30 large-m-b-40 bold fg-dark large-m-r-70">
                      {title}
                    </h2>
                  </div>
                  <div className="grid-x grid-container">
                    <div className="cell small-12 medium-12 large-12 m-b-50">
                      <div className="grid-x grid-margin-x grid-margin-y">
                        {renderArticle}
                      </div>
                    </div>
                    <div className="cell small-12 text-center"></div>
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

export default ProductDescWrapper;
