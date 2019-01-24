import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';
import './App.css';

const custom = {
  color: 'white',
};

class App extends Component {
  render() {
    return (
      <div>

		    <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
		      <div className="container">
		        <a className="navbar-brand js-scroll-trigger" href="#page-top">Marshall Lanners</a>
		        <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		          Menu
		          <i className="fas fa-bars"></i>
		        </button>
		        <div className="collapse navbar-collapse" id="navbarResponsive">
		          <ul className="navbar-nav ml-auto">
		            <li className="nav-item mx-0 mx-lg-1">
		              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
		            </li>
		            <li className="nav-item mx-0 mx-lg-1">
		              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
		            </li>
		            <li className="nav-item mx-0 mx-lg-1">
		              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
		            </li>
		          </ul>
		        </div>
		      </div>
		    </nav>

    
	    <header className="masthead bg-primary text-white text-center">
	      <div className="container">
	        <img className="img-fluid mb-5 d-block mx-auto" src="img/me.png" alt=""/>
	        <h1 className="text-uppercase mb-0">Marshall Lanners</h1>
	        <hr className="star-light"/>
	        <h2 className="font-weight-light mb-0">Full Stack Web Developer</h2>
	      </div>
	    </header>

    
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <hr className="star-dark mb-5"/>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/dnd.png" alt=""/>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/spotty.png" alt=""/>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/mud.png" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </section>

    
    <section className="bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="text-center text-uppercase text-white">About</h2>
        <hr className="star-light mb-5"/>
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <p className="lead">Hello I'm Marshall. I'm a full stack web developer. My strengths include JavaScript, React, Node, HTML, and CSS. I also really Love Python. I enjoy tickering around with new technologies and teaching myself new stacks.</p>
          </div>
          <div className="col-lg-4 mr-auto">
            <p className="lead">I joined Lambda School, a full time 8 month programming bootcamp, for their full stack web development program. A full syllabus can be viewed<br/> <a href="https://lambdaschool.com/courses/cs/web/" style={custom}>- here -</a></p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a className="btn btn-xl btn-outline-light" href="img/portfolio/resume.pdf" download>
            <i className="fas fa-download mr-2"></i>
            Download Resume
          </a>
        </div>
      </div>
    </section>

    
    <section id="contact">
      <div className="container">
        <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <hr className="star-dark mb-5"/>
	        <ReactContactForm to="lanners.marshall@mail.com" className="email-form" />
      </div>
    </section>
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">Seattle, WA</p>
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.facebook.com/profile.php?id=100009554594412">
                  <i className="fab fa-fw fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://plus.google.com/100165334047738300644">
                  <i className="fab fa-fw fa-google-plus-g"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://twitter.com/LannersM206">
                  <i className="fab fa-fw fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/mlanners/">
                  <i className="fab fa-fw fa-linkedin-in"></i>
                </a>
              </li>
              
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="text-uppercase mb-4">Reach Out</h4>
            <p className="lead mb-0">206-475-7021 <br/>lanners.marshall@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>

    <div className="copyright py-4 text-center text-white">
      <div className="container">
        <small>Copyright &copy; Marshall Lanners 2019</small>
      </div>
    </div>

    <div className="scroll-to-top d-lg-none position-fixed ">
      <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>

    <div className="portfolio-modal mfp-hide" id="portfolio-modal-1">
      <div className="portfolio-modal-dialog bg-white">
        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
          <i className="fa fa-3x fa-times"></i>
        </a>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-secondary text-uppercase mb-0">Encounter Generator</h2>
              <hr className="star-dark mb-5"/>
              <img className="img-fluid mb-5" src="img/portfolio/dnd.png" alt=""/>
              <p className="mb-5">5th edition dungeons and dragons Encounter Generator. This App will take was made with React. It takes input, filters, and generates the appropriate number of monsters given the party and difficulty. <a href="https://dungeon-helper.com/">Website</a>, <a href="https://github.com/lanners-marshall/dnd-encounter-generator"> Github</a>, <a href="https://trello.com/b/jaml8MNR/dndgenerator">Trello</a>, <a href="https://www.youtube.com/watch?v=XXcLGGRU6SQ&t=4s">Youtube</a></p>
              <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                <i className="fa fa-close"></i>
                Close Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="portfolio-modal mfp-hide" id="portfolio-modal-2">
      <div className="portfolio-modal-dialog bg-white">
        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
          <i className="fa fa-3x fa-times"></i>
        </a>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-secondary text-uppercase mb-0">Spotty</h2>
              <hr className="star-dark mb-5"/>
              <img className="img-fluid mb-5" src="img/portfolio/spotty.png" alt=""/>
              <p className="mb-5">This is a React App that interacts with the Spotify Api. It can be used to play music from your playlists, look up music and play it, build new tracks, and post those new tracks to your Spotify account. <a href="https://react-spotty.herokuapp.com/">Website</a>, <a href="https://github.com/lanners-marshall/spotty">Github</a>, <a href="https://www.youtube.com/watch?v=lkMOtWU6ptI&t=1s">Youtube</a></p>

              <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                <i className="fa fa-close"></i>
                Close Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="portfolio-modal mfp-hide" id="portfolio-modal-3">
      <div className="portfolio-modal-dialog bg-white">
        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
          <i className="fa fa-3x fa-times"></i>
        </a>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-secondary text-uppercase mb-0">Multi User Dungeon</h2>
              <hr className="star-dark mb-5"/>
              <img className="img-fluid mb-5" src="img/portfolio/mud.png" alt=""/>
              <p className="mb-5">I made a multi user dungeon in React and Django. It gives you the ability to interact with players in real time as you navigate your way through the dungeon.
              <a href="https://react-dungeon-89b7a.firebaseapp.com/mud"> Website</a>, <a href="https://github.com/lanners-marshall/LambdaMUD-Client">Github Client</a>, <a href="https://github.com/lanners-marshall/LambdaMUD-Project">Github Backend</a>, <a href="https://trello.com/b/yPJkKv9k/lambdamud-marshall-lanners">Trello</a>, <a href="https://www.youtube.com/watch?v=NbS8ljriXh4&t=265s">Youtube</a></p>
              <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                <i className="fa fa-close"></i>
                Close Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
    );
  }
}

export default App;