import logo from "../Assets/svgs/logo.svg";
import { Link } from "react-router-dom";
import { routes } from "../routes"
import budweiserImg from '../Assets/svgs/budweiserHero.svg'
import bud from '../Assets/images/budweiser-image.webp'
import singlecan from '../Assets/svgs/singlecan.svg'
import budX3 from '../Assets/svgs/budX3.svg'
import budX4 from '../Assets/svgs/budX4.svg'
import budX6 from '../Assets/svgs/budX6.svg'
import budX12 from '../Assets/svgs/budX12.svg'
import Button from "../components/Button";
import Modal from "../components/Modal";
import footerLogo from "../Assets/images/logo.png"
import notUnderAgeIcon from "../Assets/images/underageIcon.png"

function Home() {
  const buy1 = () => {
      window.open('https://paystack.com/buy/budweiser-500ml-single-can-wshnsx');
  }
  const buy2 = () => {
    window.open('https://paystack.com/buy/budweiser-500ml-x3-gutnwb');
  }
  const buy3 = () => {
    window.open('https://paystack.com/buy/budweiser-500ml-x4-dpvpzf');
  }
  const buy4 = () => {
    window.open('https://paystack.com/buy/budweiser-500ml-x6-qsdvtr');
  }
  const buy5 = () => {
    window.open('https://paystack.com/buy/budweiser-500ml-x12-kxtaih');
  }

  return (
      <div className="brewery">
        <section className="herobanner">
          <div className="logo__container">
            <div className="logo__container__border" />
            <img className="logo__container__drive" src={logo} alt="logo" />
            <div  className="logo__container__border" />
          </div>
        </section>
        <section className="bud__hero">
          <img className="bud__hero__img" src={budweiserImg} alt="budweiser" />
        </section>
        <section className="bud__hero__grid__box">
          <div className="bud__hero__grid__container">
            <div class="bud__hero__grid__item">
              <img src={singlecan} alt="singlecan" />
              <p>Budweiser 500ml (Can) x 1</p>
              <Button onClick={buy1} style={{ cursor: "pointer"}} btnClassName="btn__black">
                <Link style={{ textDecoration: 'none', color: 'white' }}>
                  Buy Now
                </Link>
              </Button>
            </div>
            <div class="bud__hero__grid__item">
              <img src={budX3} alt="budX3" />
              <p>Budweiser 500ml (Can) x 3</p>
              <Button onClick={buy2} style={{ cursor: "pointer"}} btnClassName="btn__black">
                <Link style={{ textDecoration: 'none', color: 'white' }}>
                  Buy Now
                </Link>
              </Button>
            </div>
            <div class="bud__hero__grid__item">
              <img src={budX4} alt="budX4" />
              <p>Budweiser 500ml (Can) x 4</p>
              <Button onClick={buy3} style={{ cursor: "pointer"}} btnClassName="btn__black">
                <Link style={{ textDecoration: 'none', color: 'white' }}>
                  Buy Now
                </Link>
              </Button>
            </div>  
            <div class="bud__hero__grid__item">
              <img src={budX6} alt="budX4" />
              <p>Budweiser 500ml (Can) x 6</p>
              <Button onClick={buy4} style={{ cursor: "pointer"}} btnClassName="btn__black">
                <Link style={{ textDecoration: 'none', color: 'white' }}>
                  Buy Now
                </Link>
              </Button>
            </div>
            <div class="bud__hero__grid__item">
              <img src={budX12} alt="bud12" />
              <p>Budweiser 500ml (Can) x 12</p>
              <Button onClick={buy5} style={{ cursor: "pointer"}} btnClassName="btn__black">
                <Link style={{ textDecoration: 'none', color: 'white' }}>
                  Buy Now
                </Link>
              </Button>
            </div>
            <div class="bud__hero__grid__item">
              <img src={bud} alt="bud12" />
            </div>
          </div>
        </section>
        <footer>
          <div className="footer__row">
            <div className="footer__copyright">
              <img src={footerLogo} alt="logo" />
              <span>Copyright ©BEVZ 2022. All rights reserved. Alcohol is not for sale to persons under the Age of 18.</span>
            </div>
            <div className="footer__text">
              <div className="footer__drink__responsibly">
                <img src={notUnderAgeIcon} alt="logo" />
                <span>Drink responsibly</span>
              </div>
              <Link to={routes.TermsAndConditions} className="footer__terms">Terms, Conditions & Privacy Policy</Link>
            </div>
          </div>
        </footer>
        <Modal />
      </div>
  )
}

export default Home;