import { Heading } from "@/components/atoms";
import { Cards } from "@/components/moleclues";
import Image from "next/image";
import { treatmentConfig } from "../../../../_mocks_/treatment";

const CardsWrapper = () => {
  const { subTitle, title, titleImage, cards } = treatmentConfig;

  const renderCards = cards?.map((cardData, index) => {
    const { cardImageSrc, title } = cardData;
    return (
      <Cards key={title + index} imageSrc={cardImageSrc}>
        <Heading headingLevel="h5" addClasses="bold m-b-30">
          {title}
        </Heading>
      </Cards>
    );
  });

  return (
    <div className="grid-x">
      <div className="cell large-12">
        <div className="grid-x">
          <div className="cell small-12 medium-12 large-12 align-self-middle text-center">
            <Image
              src={titleImage}
              layout="responsive"
              width={600}
              height={1000}
              alt=" For Your Hair Care Schedule Image"
            />
            <Heading
              headingLevel="h6"
              addClasses="m-t-30 medium-m-t-70 bold fg-primary"
            >
              {subTitle}
            </Heading>
          </div>
          <div className="cell small-10 small-offset-1 medium-8 medium-offset-2 large-6 large-offset-3 text-center">
            <Heading headingLevel="h2" addClasses="m-t-0 m-b-0 bold">
              <span>{title}</span>
            </Heading>
          </div>
        </div>
      </div>
      <div className="cell small-10 small-offset-1 m-t-b-50">
        <div className="grid-x grid-margin-x grid-margin-y">
          {renderCards}
        </div>
      </div>
    </div>
  );
};

export default CardsWrapper;
