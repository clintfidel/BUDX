import logo from "../Assets/svgs/logo.svg";
import { Link } from "react-router-dom";
import { routes } from "../routes"
import flyingFish1 from '../Assets/images/flyingFish/flyingFish1.jpg'
import flyingFish2 from '../Assets/images/flyingFish/flyingFish2.jpg'
import flyingFish3 from '../Assets/images/flyingFish/flyingFish3.jpg'
import flyingFishMobile1 from '../Assets/images/flyingFish/flyingfish-mobile1.jpg'
import flyingFishMobile2 from '../Assets/images/flyingFish/flyingfish-mobile2.jpg'
import flyingFishMobile3 from '../Assets/images/flyingFish/flyingfish-mobile3.jpg'
import flyingFishMobile4 from '../Assets/images/flyingFish/flyingfish-mobile4.jpg'
import flyingFishMerch1 from '../Assets/images/flyingFish/merch/jacket.png'
import flyingFishMerch2 from '../Assets/images/flyingFish/merch/tshirt.png'
import flyingFishMerch3 from '../Assets/images/flyingFish/merch/shorts.png'
import flyingFishMerch4 from '../Assets/images/flyingFish/merch/socks.png'
import Button from "../components/Button";
import Modal from "../components/Modal";
import footerLogo from "../Assets/images/logo.png"
import notUnderAgeIcon from "../Assets/images/underageIcon.png"
import { useState } from "react";
import { useEffect } from "react";

const merch = [
    {
        image: flyingFishMerch1,
        name: 'flying fish jacket'
    },
    {
        image: flyingFishMerch2,
        name: 'flying fish tshirt'
    },
    {
        image: flyingFishMerch3,
        name: 'flying fish shorts'
    },
    {
        image: flyingFishMerch4,
        name: 'flying fish socks'
    }
]

function FlyingFish() {
    const [herobannerImage, setHerobannerImage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (herobannerImage <= 3) {
                setHerobannerImage(herobannerImage + 1);
            } else {
                setHerobannerImage(1);
            }
        }, [3000]);
        return () => clearInterval(interval);
    })

  return (
      <div className="brewery">
        <section className="herobanner">
          <div className="logo__container">
            <div className="logo__container__border" />
            <img className="logo__container__drive" src={logo} alt="logo" />
            <div  className="logo__container__border" />
          </div>
        </section>
        <section className="flyingfish__hero">
            <div className="flyingfish__hero__slider slider-1">
                <img className={`flyingfish__hero__slider__img-1 ${herobannerImage === 1 && 'active'}`} src={flyingFish1} alt="flying fish" /> 
                <img className={`flyingfish__hero__slider__img-2 ${herobannerImage === 2 && 'active'}`} src={flyingFish2} alt="flying fish" /> 
                <img className={`flyingfish__hero__slider__img-3 ${herobannerImage === 3 && 'active'}`} src={flyingFish3} alt="flying fish" /> 
            </div>
            <div className="flyingfish__hero__slider slider-2">
                <img className={`flyingfish__hero__slider__img-1 ${herobannerImage === 1 && 'active'}`} src={flyingFishMobile1} alt="flying fish" /> 
                <img className={`flyingfish__hero__slider__img-2 ${herobannerImage === 2 && 'active'}`} src={flyingFishMobile2} alt="flying fish" /> 
                <img className={`flyingfish__hero__slider__img-3 ${herobannerImage === 3 && 'active'}`} src={flyingFishMobile3} alt="flying fish" /> 
                <img className={`flyingfish__hero__slider__img-4 ${herobannerImage === 4 && 'active'}`} src={flyingFishMobile4} alt="flying fish" /> 
            </div>
            <div style={{textAlign: 'center', marginTop: '24px'}}>
                <span className={`circle ${herobannerImage === 1 && 'active'}`}></span>
                <span className={`circle ${herobannerImage === 2 && 'active'}`}></span>
                <span className={`circle ${herobannerImage === 3 && 'active'}`}></span>
                <span className={`circle ${herobannerImage === 4 && 'active'}`}></span>
            </div>
        </section>
        <section className="flyingfish__container mid-row">
            <div className="featured-brands__card__text">
                <h2 style={{margin: '0'}}>Beer & Merch</h2>
                <h3>Order the new Flying Fish beer and Merch </h3>
                <p style={{margin: '0'}}>
                    Flavoured beer, Tees, Shorts, Sports jackets, Socks, and more - Order the new Flying Fish beer and our range of 
                    beautiful and trendy merchs.
                </p>
                <p style={{margin: '0'}}>
                    Experience the perfect blend of premium beer and fruity flavor, which is refreshing and filled with vibrance and 
                    pure excitement until the very last drop.
                </p>
            </div>
            <div className="flyingfish__form__box">
                <form className="flyingfish__form">
                    <div className="flyingfish__form__name">
                        <div className="input-box first">
                            <label className="form-label" htmlFor="firstname">First name</label>
                            <input type="text" className="form-control" name="firstname" id="firstname" placeholder="Enter first name" />
                        </div>
                        <div className="input-box second">
                            <label className="form-label" htmlFor="surname">Surname</label>
                            <input type="text" className="form-control" name="surname" id="surname" placeholder="Enter surname" />
                        </div>
                    </div>
                    <div className="input-box">
                        <label className="form-label" htmlFor="referralCode">Referral code</label>
                        <input type="text" className="form-control" name="referralCode" id="referralCode" placeholder="Enter your referral code" />
                    </div>
                    <Button style={{ cursor: "pointer"}} btnClassName="btn__yellow">
                        <Link style={{ textDecoration: 'none', color: 'black' }}>
                            Buy Now
                        </Link>
                    </Button>
                </form>
            </div>
        </section>
        <section className="flyingfish__container flyingfish__merch">
            <div className="flyingfish__merch__row">
               {
                merch.map((item, index) => 
                    <div key={index} className="col">
                        <div className="item__box">
                            <img src={item.image} alt={item.name} />
                        </div>
                    </div>
                )
               }
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

export default FlyingFish;