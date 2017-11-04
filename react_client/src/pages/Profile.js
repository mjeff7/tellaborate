import React from 'react';
import { Link } from 'react-router-dom';

const ProfileStoryView = ({
  linkUrl,
  title = 'Title goes here',
  preview = '',
}) => (
  <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
    <Link to={linkUrl}>
      <img
        src="images/profile_page_story_image.jpg"
        alt={`Story called ${title}`}
        className="img-responsive"
      />
      <h3 className="fh5co-work-title">{title}</h3>
      <p>{preview}</p>
    </Link>
  </div>
);

// tile is an array of <ProfileStoryView/>s
const PageShell = ({ tiles }) => (
  // <head>
  // <meta charset="utf-8">
  // <meta http-equiv="X-UA-Compatible" content="IE=edge">
  // <title>Nitro &mdash; Free HTML5 Bootstrap Website Template by FreeHTML5.co</title>
  // <meta name="viewport" content="width=device-width, initial-scale=1">
  // <meta name="description" content="Free HTML5 Website Template by FreeHTML5.co" />
  // <meta name="keywords" content="free html5, free template, free bootstrap, free website template, html5, css3, mobile first, responsive" />
  // <meta name="author" content="FreeHTML5.co" />

  // <!--
  // //////////////////////////////////////////////////////

  // FREE HTML5 TEMPLATE
  // DESIGNED & DEVELOPED by FreeHTML5.co

  // Website: 		http://freehtml5.co/
  // Email: 			info@freehtml5.co
  // Twitter: 		http://twitter.com/fh5co
  // Facebook: 		https://www.facebook.com/fh5co

  // //////////////////////////////////////////////////////
  //  -->

  // <!-- Facebook and Twitter integration -->
  // <meta property="og:title" content=""/>
  // <meta property="og:image" content=""/>
  // <meta property="og:url" content=""/>
  // <meta property="og:site_name" content=""/>
  // <meta property="og:description" content=""/>
  // <meta name="twitter:title" content="" />
  // <meta name="twitter:image" content="" />
  // <meta name="twitter:url" content="" />
  // <meta name="twitter:card" content="" />

  // <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
  // <link rel="shortcut icon" href="favicon.ico">

  // <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic,700' rel='stylesheet' type='text/css'>
  // <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

  // <!-- Animate.css -->
  // <!-- Bootstrap  -->
  // <!-- Icomoon Icon Fonts-->
  // <!-- Owl Carousel -->
  // <!-- Theme style  -->

  // <!-- Modernizr JS -->
  // <script src="js/modernizr-2.6.2.min.js"></script>
  // <!-- FOR IE9 below -->
  // <!--[if lt IE 9]>
  // <script src="js/respond.min.js"></script>
  // <![endif]-->

  // </head>
  <div>
    <link rel="stylesheet" href="css/animate.css" />
    <link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="css/icomoon.css" />
    <link rel="stylesheet" href="css/owl.carousel.min.css" />
    <link rel="stylesheet" href="css/owl.theme.default.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <div id="fh5co-page">
      <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle">
        <i />
      </a>
      <aside id="fh5co-aside" role="complementary" class="border js-fullheight">
        <h1 id="fh5co-logo">
          <a href="index.html">
            <img
              src="images/logo.png"
              alt="Free HTML5 Bootstrap Website Template"
            />
          </a>
        </h1>
        <nav id="fh5co-main-menu" role="navigation">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li class="fh5co-active">
              <a href="portfolio.html">Portfolio</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>

        <div class="fh5co-footer">
          <p>
            <small>
              &copy; 2016 Nitro Free HTML5. All Rights Reserved.<span>
                Designed by{' '}
                <a href="http://freehtml5.co/" target="_blank">
                  FreeHTML5.co
                </a>{' '}
              </span>{' '}
              <span>
                Demo Images:{' '}
                <a href="http://unsplash.com/" target="_blank">
                  Unsplash
                </a>
              </span>
            </small>
          </p>
          <ul>
            <li>
              <a href="#">
                <i class="icon-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div id="fh5co-main">
        <div class="fh5co-narrow-content">
          <h2
            class="fh5co-heading animate-box"
            data-animate-effect="fadeInLeft"
          >
            User Profile Page
          </h2>
          <div class="row animate-box" data-animate-effect="fadeInLeft">
            {tiles.map(tile => [
              tile,
              <div class="clearfix visible-sm-block" />,
            ])}
          </div>
        </div>

        <div class="fh5co-narrow-content">
          <div class="row">
            <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
              <h1 class="fh5co-heading-colored">Start Your New Idea Now!</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
              <p>
                <a href="#" class="btn btn-primary btn-outline">
                  Get Started
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="js/jquery.min.js" />
    <script src="js/jquery.easing.1.3.js" />
    <script src="js/bootstrap.min.js" />
    <script src="js/owl.carousel.min.js" />
    <script src="js/jquery.stellar.min.js" />
    <script src="js/jquery.waypoints.min.js" />
    <script src="js/jquery.countTo.js" />

    <script src="js/main.js" />
  </div>
);

class SmartProfile extends React.Component {
  render = () => <PageShell tiles={stories.map(ProfileStoryView)} />;
}

export default () => <SmartProfile />;
