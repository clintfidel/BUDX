import brands from "../Assets/images/brands.jpg";
import logo from "../Assets/svgs/logo.svg";
import art from "../Assets/svgs/artboard.svg";
import drinkResponsibly from "../Assets/svgs/drink__responsibly.svg";
import { Link } from "react-router-dom";
import { routes } from "../routes"
// import abinbev from "./Assets/svgs/abi__nigeria.svg"
import twitter from "../Assets/svgs/twitter.svg";
import instagram from "../Assets/svgs/Instagram.svg"
import facebook from "../Assets/svgs/facebook.svg";
import whatsapp from "../Assets/images/whatsapp.png";
import cart from "../Assets/svgs/cart.svg"
import telephone from "../Assets/svgs/phone.svg"
import Modal from "../components/Modal";


function Home() {
  const navigate = () => {
      window.open('https://paystack.shop/drinks-on-bevz');
  }

  return (
      <div className="brewery">
        <section className="brewery__section">
          <div>
            <div className="logo__container">
              <img className="logo__container__drive" src={logo} alt="" />
            </div>
            <div className="text-center">
              <span className="showcase__text first">
                Your <span className="emphasize">FAVOURITE</span> drinks,
              </span>
            </div>
            <div className="text-center">
              <span className="showcase__text second">
                <span className="emphasize">COLD,</span> in minutes & ready to{" "}
              </span>
            </div>
            <div className="text-center">
              <span className="showcase__text third">
                <span className="emphasize">DRINK</span> !
              </span>
            </div>
          </div>
        </section>
        <section className="brewery__section">
          <div className="brewery__section__item">
            <div className="grid-section">
              <div className="grid-section__buttons">
                <button style={{ cursor: "pointer"}} onClick={navigate} className="grid-section__buttons__button">
                  <img src={cart} alt="" />
                  <span>Shop Now</span>
                </button>
                <button style={{ cursor: "pointer"}} className="grid-section__buttons__button white">
                  <img src={telephone} alt="" />
                  <span>Contact Us</span>
                </button>
              </div>
              {/* <div className="abinbev__desktop">
                <img src={abinbev} alt="" />
              </div> */}
            </div>
            <div className="grid-section">
              <div className="grid-section__img">
                <img src={art} alt="" />
              </div>
              {/* <div className="abinbev__mobile">
                <img src={abinbev} alt="" />
              </div> */}
            </div>
          </div>
          <div className="brewery__section__item">
            <img src={brands} alt="" />
            <div className="transparent__white" />
            <div className="faded__bottom" />
            <div className="footer">
              <div className="footer__socials">
                <a href="https://twitter.com/drinksonbevz?s=11&t=xEQjoU9a0UFcKTy-COvo9g" target="_blank" rel="noreferrer" >
                  <img src={twitter} alt="twitter link" />
                </a>
                <a href="https://instagram.com/drinksonbevz?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                  <img src={instagram} alt="instagram link" />
                </a>
                <img src={facebook} alt="" />
                <img src={whatsapp} alt="" />
              </div>
              <p style={{ justifyContent: "center", fontSize: "14px", fontWeight: "bold"}} className="footer__caution">Copyright &copy;BEVZ 2022. All rights reserved. Alcohol is not for sale to persons under the Age of 18.</p>
              <Link style={{ justifyContent: "center", fontSize: "14px", fontWeight: "bold", color: "black", zIndex: "5"}} className="footer__caution"  to={routes.TermsAndConditions}>
                Terms, Conditions & Privacy Policy 
              </Link>
              <div className="footer__caution">
                <img src={drinkResponsibly} alt="" />
              </div>
            </div>
          </div>
        </section>
        <Modal />
      </div>
  )
}

export default Home;