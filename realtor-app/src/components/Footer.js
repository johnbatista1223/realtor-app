import React from 'react';
import '../styles/footer.css';

//random note
function Footer() {
  return (
    <div class="footer-wrapper">
      {/* <div class="row"> */}
        <div class="col-lg-4 col-md-6 col-sm-7">
          <div class="footer__about">
            <div class="footer__logo">
              <a class="navbar-brand custom-logo" href="/">Home Page</a>
            </div>
            <small>Home Page is a user friendly app designed to help you find your next Home.</small>
            <div class="footer__payment">
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-5">
          <div class="footer__widget">
            <h6>Quick links</h6>
            <ul>
              <li><a href="https://github.com/johnbatista1223/realtor-app">Blogs</a></li>
              <li><a href="/Contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-8 col-sm-8">
          <div class="footer__newslatter">
            <h6>NEWSLETTER</h6>
            <form action="#">
              <input type="text" placeholder="Email" />
                <button type="submit" class="site-btn">Subscribe</button>
              </form>
              <div class="footer__social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-youtube-play"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-pinterest"></i></a>
              </div>
            </div>
          </div>
        {/* </div> */}
        {/* <div class="row"> */}
          <div class="col-lg-12">
            <div class="footer__copyright__text">
              <small>Copyright © Home Page
                2021 All rights reserved | This site was made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://github.com/johnbatista1223/realtor-app"> Ashleigh Freilder John Batista Amy Smerlick Raquan Stanley</a>
              </small>
            </div>
          </div>
        {/* </div> */}
      </div>
      );
}


      export default Footer