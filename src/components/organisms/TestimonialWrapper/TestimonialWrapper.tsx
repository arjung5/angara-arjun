import MediaWithContent from "@/components/moleclues/MediaWithContent/MediaWithContent";
import { testimonilasConfig } from "../../../../_mocks_/testimonials";

const TestimonialWrapper = () => {
  const { subTitle, title, testimonials } = testimonilasConfig;

  const renderTestimonials = testimonials.map((data) => {
    const { id, customerName, customerReview, customerImageUrl } = data;
    return (
      <div
        key={id}
        className="cell medium-6 large-4  m-t-b-20 hvr-grow-shadow"
      >
        <div className="grid-x grid-margin-x">
          <div className="cell large-12 m-b-20">
            <div className="grid-x m-t-20">
              <div className="cell small-5 small-offset-1 medium-4 medium-offset-1 large-3 large-offset-1">
                <MediaWithContent media={{
                  type: "image",
                  imageSrc: customerImageUrl,
                  altText: customerName,
                  addClasses: "circle",
                  imageWidth: 1000
                }}></MediaWithContent>
              </div>
              <div className="cell small-5 medium-6 large-6 large-offset-1 align-self-middle large-p-t-10">
                <h4>{customerName}</h4>
                <p>{title}</p>
              </div>
            </div>
          </div>
          <div className="cell small-10 small-offset-1">
            <p className="fg-dark-gray font-size-large">
              <span>{customerReview}</span>
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      className="m-b-50 large-m-b-80 large-p-b-30"
    >
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell">
            <div className="grid-x grid-margin-x">
              <div className="cell medium-12 large-6 large-offset-3 text-center m-b-10">
                <p className="font-size-large m-b-0">
                  <span>{title}</span>
                </p>
                <h2 className="bold">{subTitle}</h2>
              </div>
              {renderTestimonials}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TestimonialWrapper;
