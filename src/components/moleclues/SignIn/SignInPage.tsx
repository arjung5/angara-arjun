import React from "react";
import { useState } from "react";
import { loginFormConfig } from "../../../../_mocks_/loginFormConfig";
import { useRouter } from "next/router";
import { getStoredCookie } from "@/utils/commonUtils";
import MediaWithContent from "../MediaWithContent/MediaWithContent";

const SignInPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    UserName: "",
    Password: "",
  });

  const { emailAddressLbl, submitLbl } = loginFormConfig;

  const handleChange = (e: any) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
      case "UserName":
        setFormData({ ...formData, UserName: inputValue });
        return;
      case "Password":
        setFormData({ ...formData, Password: inputValue });
        return;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const [storedUsername, storedPassword] = getStoredCookie();

    if (
      storedUsername === formData.UserName &&
      storedPassword === formData.Password
    ) {
      setFormData({
        UserName: "",
        Password: "",
      });
      localStorage.setItem("sessionToken", storedUsername);
      router.push("/");
    } else {
      alert("Incorrect details please try again");
    }
  };

  return (
    <div>
      <div className="grid-x m-b--40 medium-m-b--60 large-m-b--80">
        <div className="cell " id="id-34053f20-9176-4af7-8c89-c68cc16c8d19">
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
                      <form onSubmit={handleSubmit}>
                        <div className="grid-x grid-margin-x">
                          <div className="cell small-12 ">
                            <label>
                              {emailAddressLbl}
                              <input
                                type="text"
                                name="UserName"
                                required
                                placeholder="UserName/Email"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                                value={formData.UserName}
                              />
                            </label>
                            <label>
                              {emailAddressLbl}
                              <input
                                type="password"
                                name="Password"
                                required
                                placeholder="Enter Password"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                                value={formData.Password}
                              />
                            </label>
                          </div>
                          <div className="cell small-12 medium-12 button-group">
                            <button className="button">{submitLbl}</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="cell small-10 small-offset-1">
                      <div className="m-t-20 font-size-small">
                        <p>
                          <div>
                            By continuing, you agree to the our{" "}
                            <a href="/sign-in">Terms of Service</a>. This site
                            uses essential cookies. See our{" "}
                            <a href="/sign-in">Cookie Policy</a> for more
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
export default SignInPage;
