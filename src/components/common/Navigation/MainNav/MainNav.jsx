import { useEffect } from "react";
import MainNavItem from "./MainNavItem.jsx";
import "./mainNav.scss";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const MainNav = (props) => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/#"]');

    const handleClick = (event) => {
      const link = event.currentTarget;
      const href = link.getAttribute("href");

      if (!href) return;

      if (window.location.pathname !== "/") {
        return;
      }

      const targetId = href.replace("/#", "");
      const target = document.getElementById(targetId);

      if (!target) return;

      event.preventDefault();

      gsap.to(window, {
        duration: 1.2,

        scrollTo: {
          y: target,
        },

        ease: "power3.inOut",
      });

      window.history.pushState(null, "", href);
    };

    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div className="main-nav">
      <nav role="navigation" aria-label="primary" className="main-nav-top">
        <ul className="main-nav-top-list">
          {props.menuItems.map((item, index) => {
            if (!item.parentId) {
              const currentPage = props.pathname === item.uri;

              return (
                <MainNavItem
                  currentPage={currentPage}
                  pathname={props.pathname}
                  item={item}
                  key={index}
                />
              );
            } else {
              return null;
            }
          })}

          {props.phoneNumber ? (
            <li className="main-nav-top-list-item phone-number">
              <a href={`tel: ${props.phoneNumber.phoneNumber}`}>
                {props.phoneNumber.phoneNumberDisplay}
              </a>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
