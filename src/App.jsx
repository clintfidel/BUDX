import brands from "./Assets/images/brands.jpg";
import logo from "./Assets/svgs/logo.svg";
import art from "./Assets/svgs/artboard.svg";
import drinkResponsibly from "./Assets/svgs/drink__responsibly.svg";
// import abinbev from "./Assets/svgs/abi__nigeria.svg"
import twitter from "./Assets/svgs/twitter.svg";
import instagram from "./Assets/svgs/Instagram.svg"
import facebook from "./Assets/svgs/facebook.svg";
import whatsapp from "./Assets/images/whatsapp.png";
import cart from "./Assets/svgs/cart.svg"
import telephone from "./Assets/svgs/phone.svg"

function App() {
  const navigate = () => {
    window.open('https://paystack.shop/drinksonbevz');

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
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
              <img src={whatsapp} alt="" />
            </div>
            <div className="footer__caution">
              <img src={drinkResponsibly} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
