import React from "react";

class Home extends React.Component{
    render(){
        return(
            <div>
                <nav class="navbar">
      <div class="navbar__container">
        <a href="#home" id="navbar__logo">CRU - Original</a>
        <div class="navbar__toggle" id="mobile-menu">
          <span class="bar"></span> <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="navbar__menu">
          <li class="navbar__item">
            <a href="./Pages/index.html" class="navbar__links" id="home-page">Home</a>
          </li>
          <li class="navbar__item">
            <a href="./Pages/shad3z.html" class="navbar__links" id="shad3z-page">SHAD3Z</a>
          </li>
          <li class="navbar__item">
            <a href="./Pages/videos" class="navbar__links" id="videos-page">Videos</a>
          </li>
          <li class="navbar__item">
            <a href="./Pages/services" class="navbar__links" id="services-page">Services</a>
          </li>
          <li class="navbar__item">
            <a href="./Pages/gamer" class="navbar__links" id="Gamer-page"
              >Gamer zone</a
            >
          </li>
          <li class="navbar__btn">
            <a href="#sign-up" class="button" id="signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="hero" id="home">
      <div class="hero__container">
        <h1 class="hero__heading">Choose your <span>CRU</span></h1>
        <p class="hero__description">Music * Games * Merch</p>
        <button class="main__btn"><a href="#">Explore</a></button>
      </div>
    </div>

    
    <div class="main" id="about">
      <div class="main__container">
        <div class="main__img--container">
          <div class="main__img--card"><i class="fas fa-layer-group"></i></div>
        </div>
        <div class="main__content">
          <h1>What do we do?</h1>
          <h2>We are your one stop solution- </h2>
          <p>Handle multiple entertainment platforms to bring business sucess</p>
          <button class="main__btn"><a href="#">Schedule Call</a></button>
        </div>
      </div>
    </div>

    
    <div class="services" id="services">
      <h1>Our Services</h1>
      <div class="services__wrapper">
        <div class="services__card">
          <h2>CUSTOMIZED MERCHANDISE</h2>
          <p>exceptional and personalized services we offer to all of our talented musicians and clients</p>
          <div class="services__btn"><button>Get Started</button></div>
        </div>
        <div class="services__card">
          <h2>ARTIST DEVELOPMENT</h2>
          <p>Our impressive connections with the entertainment industry help give rising stars the support they need to escalate their career</p>
          <div class="services__btn"><button>Get Started</button></div>
        </div>
        <div class="services__card">
          <h2>Event Hosting</h2>
          <p>CRU and our members also helped in many ways with  "Toronto's #1 monthly Hip Hop event" called #BIGTICKET it ran successfully for 4 years in the big City! </p>
          <div class="services__btn"><button>Get Started</button></div>
        </div>
        <div class="services__card">
          <h2>Video Production & Photography</h2>
          <p>Shot By Lee Solo is a full-service video production company based out of Vancouver, BC Canada.</p>
          <div class="services__btn"><button>Get Started</button></div>
        </div>
      </div>
    </div>

    <div class="main" id="sign-up">
      <div class="main__container">
        <div class="main__content">
          <h1>Join Our Team</h1>
          <h2>Sign Up Today</h2>
          <p>See what makes us different</p>
          <button class="main__btn"><a href="#">Sign Up</a></button>
        </div>
        <div class="main__img--container">
          <div class="main__img--card" id="card-2">
            <i class="fas fa-users"></i>
          </div>
        </div>
      </div>
    </div>

    
    <div class="footer__container">
      <div class="footer__links">
        <div class="footer__link--wrapper">
          <div class="footer__link--items">
            <h2>About Us</h2>
            <a href="/sign__up">How it works</a> <a href="/">Testimonials</a>
            <a href="/">Careers</a> <a href="/">Terms of Service</a>
          </div>
          <div class="footer__link--items">
            <h2>Contact Us</h2>
            <a href="/">Contact</a> <a href="/">Support</a>
            <a href="/">Destinations</a>
          </div>
        </div>
        <div class="footer__link--wrapper">
          <div class="footer__link--items">
            <h2>Videos</h2>
            <a href="/">Submit Video</a> <a href="/">Ambassadors</a>
            <a href="/">Agency</a>
          </div>
          <div class="footer__link--items">
            <h2>Social Media</h2>
            <a href="/">Instagram</a> <a href="/">Facebook</a>
            <a href="/">Youtube</a> <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <section class="social__media">
        <div class="social__media--wrap">
          <div class="footer__logo">
            <a href="/" id="footer__logo">COLOR</a>
          </div>
          <p class="website__rights">© COLOR 2020. All rights reserved</p>
          <div class="social__icons">
            <a href="/" class="social__icon--link" target="_blank"
              ><i class="fab fa-facebook"></i
            ></a>
            <a href="/" class="social__icon--link"
              ><i class="fab fa-instagram"></i
            ></a>
            <a href="/" class="social__icon--link"
              ><i class="fab fa-youtube"></i
            ></a>
            <a href="/" class="social__icon--link"
              ><i class="fab fa-linkedin"></i
            ></a>
            <a href="/" class="social__icon--link"
              ><i class="fab fa-twitter"></i
            ></a>
          </div>
        </div>
        </section>
    </div>
            </div>
        );
    }
}
export default Home;