import React from "react";
import LoginFormPage from "../../moleclues/LoginFormPage/LoginFormPage";
import MediaWithContent from "@/components/moleclues/MediaWithContent/MediaWithContent";

const SignUpPage = () => {
  return (
    <div>
      <div className="grid-x m-b--40 medium-m-b--60 large-m-b--80">
        <div className="cell">
          <div
            className="grid-x background-fullscreen-cover"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(2,2,2,1) 0%, rgba(0,0,0,0.4) 0%), url(/signin-banner-1.jpg)",
            }}
          >
            <div className="cell  align-self-middle p-t-90 p-b-60">
              <div className="grid-x grid-container">
                <div className="cell  light b-radius-4x medium-8 medium-offset-2 large-6 large-offset-3 p-t-b-40">
                  <div className="grid-x grid-padding-x">
                    <div className="cell small-10 small-offset-1 m-t--80 m-b-20 text-center">
                      <MediaWithContent
                        media={{
                          type: "image",
                          imageSrc: "/user.svg",
                          imageWidth: 200,
                          imageHeight: 100,
                        }}
                      />
                    </div>
                    <div className="cell small-10 small-offset-1">
                      <h4 className="fg-dark title text-center bold">
                        Welcome{" "}
                      </h4>
                      <h5 className="fg-dark text-center">Sign Up</h5>
                      <LoginFormPage />
                    </div>
                    <div className="cell small-10 small-offset-1">
                      <div className="m-t-20 font-size-small">
                        <p>
                          <div>
                            By continuing, you agree to the our{" "}
                            <a href="/terms-of-use/">Terms of Service</a>. This
                            site uses essential cookies. See our{" "}
                            <a href="/cookie-policy/">Cookie Policy</a> for more
                            information.
                          </div>
                        </p>
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



export default SignUpPage;
