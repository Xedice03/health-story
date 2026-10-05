import { useState, useEffect } from "react";
import icon from "../assets/Frame 1.png";
import box1 from "../assets/Frame 11 (1).png";
import box2 from "../assets/Frame 13 (1).png";
import box3 from "../assets/Frame 13.png";
import cart1 from "../assets/2-25 1.png";
import cart2 from "../assets/2-25 2 (1).png";
import cart3 from "../assets/2-25 2.png";
import { FaAppleWhole, FaArrowRight, FaLeaf, FaRegHeart,FaShieldHalved,} from "react-icons/fa6";
import product1 from "../assets/Frame 1000004183.png";
import product2 from "../assets/Frame 1000004188.png";
import product3 from "../assets/2-25 1.png";
import product4 from "../assets/3-33.png";
import product5 from "../assets/2-25 2 (1).png";
import star  from "../assets/Frame 37.png";
import shopImg from "../assets/Group 2 39.png"
import { Link } from "react-router-dom";

// məhsulların datası
const allProducts = [
  {
    id: 1,
    title: "Mint & Ginger Digestive Herbal Tea",
    image: product1,
    discount: 35,
    oldPrice: 6.75,
    price: 5.75,
    category: "digestive-health"
  },
  {
    id: 2,
    title: "Chamomile Calm Herbal Tea",
    image:product2,
    discount: 20,
    oldPrice: 6.75,
    price: 5.75,
    category: "digestive-health"
  },
  {
    id: 3,
    title: "Peppermint Leaf Organic Tea",
    image: product3,
    discount: 15,
    oldPrice: 6.75,
    price: 5.75,
    category: "digestive-health"
  },
  {
    id: 4,
    title: "Fennel Seed Digestive Blend",
    image: product4,
    discount: 10,
    oldPrice: 6.75,
    price: 5.75,
    category: "digestive-health"
  },
  {
    id: 5,
    title: "Ginger Root Herbal Tea",
    image:product5,
    discount: 35,
    oldPrice: 6.75,
    price: 5.75,
    category: "digestive-health"
  }
];
function Home() {
  // hansı tab aktivdir
  const [activeTab, setActiveTab] = useState("digestive-health");
  // aktiv tab-a uyğun məhsulları seç
   const [time, setTime] = useState({
    days: 54,
    hours: 54,
    minutes: 54,
    seconds: 54,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
        seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
  return {
          days,
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []); 
   const products = allProducts.filter((item) => item.category === activeTab);
   const categories = [
    {
      name: "Digestive Health",
      count: 6,
      image: box1
    },
    {
      name: "Immune Support",
      count: 1,
      image: box2
    },
    {
      name: "Respiratory Relief",
      count: 20,
      image: box3
    },
    {
      name: "Pain & Inflammation",
      count: 40,
      image: box1
    },
    {
      name: "Stress",
      count: 12,
      image: box2
    },
    {
      name: "Skin Care",
      count: 26,
      image: box3
    }
  ];
  return (
    <main>
      {/* HERO */}
      <div className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-7">
              <div className="hero-content">
                <h1>
                  The more you love your
                  <br />
                  health, more you use
                  <br />
                  natural medicine
                </h1>
                <p>
                  Discover nature's power to heal – safely and effectively.
                  Trusted natural solutions, just a click away.
                </p>
                <div className="hero-info">
                  <div>
                    <img src={icon} alt="icon" />
                    <p>100% Natural & Safe Remedies</p>
                  </div>
                  <div>
                    <img src={icon} alt="icon" />
                    <p>Trusted by Thousands</p>
                  </div>
                  <div>
                    <img src={icon} alt="icon" />
                    <p>
                      Natural medicine can heal you better than you think
                    </p>
                  </div>
                </div>
                <div className="shop-btn">
                  <Link className="shop-linkHero" to="/shop" >Shop Now <FaArrowRight /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CATEGORIES */}
      <section className="container">
        <div className="categories">
          {categories.map((item) => (
            <div className="category" key={item.name}>
              <div className="category-circle">
                <img
                  src={item.image} alt={item.name}
                />
              </div>
              <h6 className="category-name">
                {item.name}
              </h6>
              <p className="category-count">
                {item.count} Products
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* PROMO CARDS */}
      <section className="container pb-5">
        <h6 className="fw-semibold mb-3">
          Only this week
        </h6>
        <div className="row g-3">
          {/* CARD 1 */}
          <div className="col-12 col-lg-4">
            <div className="promo-card promo-green">
              <div className="promo-text">
                <p className="promo-label">
                  Weekend Discount
                </p>
                <h3 className="promo-title">
                  Turmeric
                </h3>
                <p className="promo-desc">
                  supports immunity with powerful antioxidants.
                </p>
                <p className="promo-price">
                  <span>From</span> $2.49
                </p>
              </div>
              <img
                src={cart1}
                alt="Turmeric"
                className="promo-img"
              />
            </div>
          </div>
          {/* CARD 2 */}
          <div className="col-12 col-lg-4">
            <div className="promo-card promo-yellow">
              <div className="promo-text">
                <p className="promo-label">
                  Weekend Discount
                </p>
                <h3 className="promo-title">
                  Digestive Herbal Hass
                </h3>
                <p className="promo-desc">
                  Only for this week...
                </p>
                <p className="promo-price">
                  <span>From</span> $2.49
                </p>
              </div>
              <img
                src={cart2}
                alt="Digestive Herbal Hass"
                className="promo-img"
              />
            </div>
          </div>
          {/* CARD 3 */}
          <div className="col-12 col-lg-4">
            <div className="promo-card promo-pink">
              <div className="promo-text">
                <p className="promo-label">
                  Weekend Discount
                </p>
                <h3 className="promo-title">
                  Hair Growth Booster
                </h3>
                <p className="promo-desc">
                  Stimulates natural
                </p>
                <p className="promo-price">
                  <span>From</span> $2.49
                </p>
              </div>
              <img
                src={cart3}
                alt="Hair Growth Booster"
                className="promo-img promo-img-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* PRODUCTS - FAKE API */}
      <section className="container pb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-semibold">
            Don't miss this week's sale
          </h3>
          <div className="sale-tabs">
            <span
              className={activeTab === "digestive-health" ? "active" : ""}
              onClick={() => setActiveTab("digestive-health")}
            >
              Digestive Health
            </span>
            <span
              className={activeTab === "immune-support" ? "active" : ""}
              onClick={() => setActiveTab("immune-support")}
            >
              Immune Support
            </span>
            <span
              className={activeTab === "stress" ? "active" : ""}
              onClick={() => setActiveTab("stress")}
            >
              Stress
            </span>
          </div>
         <div className="button-sale">
       <Link className="shop-link" to="/shop">
          View All <FaArrowRight />
         </Link>
        </div>
        </div>
        <div className="row g-4">
          {products.map((product) => (
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl"
              key={product.id}
            >
              <div className="product-card">
                {/* PRODUCT IMAGE */}
                <div className="product-image">
                  <span className="discount">
                    {product.discount}%
                  </span>
                  <button className="heart-btn">
                    <FaRegHeart />
                  </button>
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                {/* RATING */}
                <div className="rating">
            <img src={star} alt="starsraiting"/>
               </div>
                {/* PRODUCT NAME */}
                <h5 className="product-title">
                  {product.title}
                </h5>
                {/* PRICE */}
                <div className="product-price">
                  <span className="old-price">
                    ${product.oldPrice}
                  </span>
                  <span className="new-price">
                    ${product.price}
                  </span>
                </div>
                {/* TIMER */}
                <div className="product-timer">
                   <span>
                    {String(time.days).padStart(2, "0")}:
                    {String(time.hours).padStart(2, "0")}:
                    {String(time.minutes).padStart(2, "0")}:
                    {String(time.seconds).padStart(2, "0")}
                  </span>
                </div>
                <p className="time-text">
                  Time remaining until the end
                  <br />
                  of the offer
                </p>
                {/* BUTTON */}
                <button className="add-cart">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="menyuShop">
          <div className="sh-section">
            <div className="sh-inner">
              {/* sol tərəf */}
              <div className="sh-left">
                <span className="sh-badge">Digestive Health</span>
                <h2 className="sh-title">
                  The only source of <br /> healthy medicine
                </h2>
                <p className="sh-text">
                  We care for your health and the planet with responsibly sourced
                  ingredients.
                </p>
                <ul className="sh-list">
                  <li>
                    <span className="sh-icon">
                      <FaAppleWhole />
                    </span>
                    Made from several ingredients
                  </li>
                  <li>
                    <span className="sh-icon">
                      <FaLeaf />
                    </span>
                    100% natural
                  </li>
                  <li>
                    <span className="sh-icon">
                      <FaShieldHalved />
                    </span>
                    Has healing powers
                  </li>
                </ul>
                <div className="sh-btn">
                <Link className="shop-linkHero" to="/shop" >Shop Now <FaArrowRight /></Link>
                </div>
              </div>
                <img
                  className="sh-image"
                  src={shopImg}
                  alt="Woman in a vineyard"
                />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Home;