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
import Button from "../components/Button";
import herobannerImage from "../Assets/images/hero-image.png"
import trophyStout from "../Assets/images/brands/trophystout.png";
import flyingFish from "../Assets/images/brands/flyingfish.png";
import budweiser from "../Assets/images/brands/budweiser.png";
import hero from "../Assets/images/brands/herolager.png";
import castleLite from "../Assets/images/brands/castlelite.png";
import trophy from "../Assets/images/brands/trophy.png";
import flyingFishf from "../Assets/images/flying-fish-merch.png";
import budweiserf from "../Assets/images/budweiser-image.png";
import footerLogo from "../Assets/images/logo.png"
import notUnderAgeIcon from "../Assets/images/underageIcon.png"

function Home() {
  const navigate = () => {
      window.open('https://paystack.shop/drinks-on-bevz');
  }

  return (
      <div className="brewery">
        <section className="herobanner">
          <div className="logo__container">
            <img className="logo__container__drive" src={logo} alt="logo" />
          </div>
          <div className="herobanner__text">
            <h1>Cold drinks at the best price without leaving home</h1>
            <p>Get your favourite drinks, COLD, in minutes and ready to drink from the comfort of your home.</p>
            <div>
              <Button btnClassName="btn__yellow">Shop now</Button>
              <Button btnClassName="btn__white">Contact us</Button>
            </div>
            <div className="socials">
              <a href="https://twitter.com/drinksonbevz?s=11&t=xEQjoU9a0UFcKTy-COvo9g" target="_blank" rel="noreferrer" >
                <img src={twitter} alt="twitter link" />
              </a>
              <a href="https://instagram.com/drinksonbevz?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram link" />
              </a>
              <img src={facebook} alt="" />
              <img src={whatsapp} alt="" />
            </div>
          </div>
          <img className="herobanner__image" src={herobannerImage} alt='premium beer' />
        </section>
        <div className="brands">
          <img src={trophyStout} alt="trophy stout" />
          <img src={flyingFish} alt="flying fish" />
          <img src={budweiser} alt="budweiser" />
          <img src={hero} alt="hero lager" />
          <img src={castleLite} alt="castle lite" />
          <img src={trophy} alt="trophy" />
          <img src={trophyStout} alt="trophy stout" />
          <img src={flyingFish} alt="flying fish" />
          <img src={budweiser} alt="budweiser" />
          <img src={hero} alt="hero lager" />
          <img src={castleLite} alt="castle lite" />
          <img src={trophy} alt="trophy" />
        </div>
        <section className="featured-brands">
          <div className="featured-brands__section">
            <div className="featured-brands__title">
              <h2>FEATURED BRANDS</h2>
            </div>
            <div className="featured-brands__row">
              <div className="featured-brands__card">
                <img src={flyingFishf} alt="flying fish" />
                <div className="featured-brands__card__text first">
                  <h3>Order the new Flying Fish beer and Merch </h3>
                  <p>
                    Flavoured beer, Tees, Shorts, Sports jackets, Socks, and more - Order the new Flying Fish beer and our range of 
                    beautiful and trendy merchs.
                  </p>
                  <p>
                    Experience the perfect blend of premium beer and fruity flavor, which is refreshing and filled with vibrance and 
                    pure excitement until the very last drop.
                  </p>
                  <Button btnClassName="btn__yellow">Learn more</Button>
                </div>
              </div>
              <div className="featured-brands__card">
                <div className="featured-brands__card__text second">
                  <h3>Order your Budweiser now and get a World Cup prize</h3>
                  <p>
                    With a smooth taste that doesn’t hold you back, Budweiser is brewed smooth for you, our Naija Kings. Offering the 
                    smoothest feeling for the smoothest time.
                  </p>
                  <Button btnClassName="btn__yellow">Learn more</Button>
                </div>
                <img src={budweiserf} alt="budweiser" />
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer__row">
            <div className="footer__copyright">
              <img src={footerLogo} alt="logo" />
              <span>Copyright ©BEVZ 2022. All rights reserved. Alcohol is not for sale to persons under the Age of 18.</span>
            </div>
            <div className="footer__drink__responsibly">
              <img src={notUnderAgeIcon} alt="logo" />
              <span>Drink responsibly</span>
            </div>
            <Link to={routes.TermsAndConditions} className="footer__terms">Terms, Conditions & Privacy Policy</Link>
          </div>
        </footer>
        <Modal />
      </div>
  )
}

export default Home;