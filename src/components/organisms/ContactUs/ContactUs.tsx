import MediaWithContent from "@/components/moleclues/MediaWithContent/MediaWithContent";
import { contactUsConfig } from "../../../../_mocks_/contactUs";

const ContactUs = () => {
  const { bgUrl, contactUsDesc, contactUsButton, contactUsTitle } =
    contactUsConfig;
  return (
    <div className="grid-x m-b-60 large-m-b-80 large-p-b-50">
      <div className="cell">
        <div className="grid-x align-middle light-primary">
          <div className="cell small-12 medium-12 large-6">
            <MediaWithContent
              media={{
                type: "image",
                imageSrc: bgUrl,
                altText: contactUsDesc,
              }}
            />
          </div>
          <div className="cell small-12 medium-12 large-6">
            <div className="grid-x m-t-30">
              <div className="cell small-10 small-offset-1 text-left p-b-30">
                <h3 className="bold">{contactUsTitle}</h3>
                <p className="m-t-b-20">{contactUsDesc}</p>
                <a className="button bold hvr-bubble-top" href="/contact-us/">
                  {contactUsButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
