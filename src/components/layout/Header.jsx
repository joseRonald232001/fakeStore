import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import house from "../../assets/icons/house.svg";
import user from "../../assets/icons/user.svg";
import bag from "../../assets/icons/bag.svg";
import { useCart } from "../../utils/providers/CartProvicer";
import { useNavigate } from "react-router-dom";
import { getUserIdFromStorage } from "../../utils/api/user";
import { useUI } from "../../utils/providers/UiContext";

function Header() {
  const { shopCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const { setShopCartIsOpen } = useCart();
  const { setIsLoading, setNotification } = useUI();

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [shopCart]);

  const userExist = () => {
    const userId = getUserIdFromStorage();
    if (userId) {
      navigate("/me");
      return;
    } else {
      navigate("/login");
      setNotification("You need to log in");
      return;
    }
  };

  const userHasCart = () => {
    const userId = getUserIdFromStorage();
    if (userId) {
      setShopCartIsOpen(true);
    } else {
      navigate("/login");
      setNotification("you need to log in");
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header ${isScrolled ? "scroling" : ""}`}>
      <nav className="header_nav">
        <Link
          to="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <figure className="logo">
            <img src={house} alt="home icon" />
          </figure>
        </Link>
        <ul className="header_navigation">
          <li onClick={userExist}>
            <img src={user} alt="user icon" />
          </li>
          <li onClick={userHasCart}>
            <img src={bag} alt="bag icon" />
            <div className="quantityOfProducts">{shopCart.length}</div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
