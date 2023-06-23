import MediaWithContent from "@/components/moleclues/MediaWithContent/MediaWithContent";
import { headerConfig } from "../../../../_mocks_/header";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getStoredCookie } from "@/utils/commonUtils";
import { SESSION_TOKEN } from "../../../../constants/commonConstants";
import { useRouter } from "next/router";

const HeaderWrapper = () => {
  const router = useRouter();
  const { logoUrl, logoAltText, navItems } = headerConfig;
  const [singedUp, setSingedUp] = useState(false);
  const [singedIn, setSingedIn] = useState(false);
  useEffect(() => {
    const [storedUsername, storedPassword] = getStoredCookie();
    console.log("storedUsername", storedUsername);
    console.log("storedPassword", storedPassword);
    const sessionStoragevalue = localStorage.getItem(SESSION_TOKEN);
    if (sessionStoragevalue) {
      if (sessionStoragevalue == storedUsername) {
        setSingedIn(true);
      } else {
        setSingedIn(false);
        router.push("/signin");
      }
    } else {
      setSingedIn(false);
    }
    if (storedPassword && storedUsername) {
      setSingedUp(true);
    } else {
      setSingedUp(false);
    }
  });

  const renderNavItems = navItems?.map((item, index) => {
    const { navTitle, href } = item;
    if (navTitle === "Sign In" && !singedUp) {
      return;
    } else if (navTitle === "Sign Up" && singedUp) {
      return;
    } else if (navTitle === "Sign Out" && !singedIn) {
      return;
    }
    if (navTitle === "Carts" && !singedIn) {
      return;
    }
    return (
      <li key={item + String(index)}>
        <Link className={index === 0 ? "active" : ""} href={href}>
          {item.navTitle}
        </Link>
      </li>
    );
  });

  return (
    <div className="grid-x z-depth-2">
      <div className="cell">
        <div className="grid-x relative standard-header align-middle">
          <div className="cell shrink">
            <a href="/">
              <MediaWithContent
                media={{
                  type: "image",
                  imageSrc: logoUrl,
                  altText: logoAltText,
                  addClasses: "logo",
                  imageWidth: 200,
                }}
              />
            </a>
          </div>

          <div className="cell auto">
            <input className="cmsmenu-btn" type="checkbox" id="cmsmenu-btn" />
            <label className="cmsmenu-icon" htmlFor="cmsmenu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="cmsmenu">{renderNavItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWrapper;