import "../App.css";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import tv_logo from "../images/tv.png";
import kids_logo from "../images/kids.png";
import mobile_img from "../images/mobile.jpg";
import boxshot from "../images/boxshot.png";
import download_btn from "../images/download-icon.gif";
import tv_movie from "../images/movies_preview.m4v";
import Nav from "../components/Nav";
import createQuestions from "../components/FAQ";
import allQuestions from "../allQuestions";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function getStarted(event) {
    event.preventDefault();
    navigate("/signin");
  }

  return (
    <div className="container_all">
      <div className="header-section">
        <Container>
          <Nav />
          <Row>
            <Col lg={7} md={9} className="mx-auto">
              <div className="banner-info">
                <p className="title">Unlimited Songs, TV shows, and more.</p>
                <p className="banner-text_watch">
                  Watch anywhere. Cancel anytime.
                </p>
                <p className="banner-text_details">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>
                <form
                  id="email_form"
                  action=""
                  className="mt-2"
                  onSubmit={getStarted}
                >
                  <div className="form">
                    <div className="email-placeholder-container p-1 rounded">
                      <div className="email-placeholder-child-container w-100 position-relative">
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                        />
                        <span className="email_placeholder">Email Address</span>
                      </div>
                    </div>
                    <button type="submit" className="get-started rounded">
                      Get Started{" "}
                      <span
                        className="iconify"
                        data-icon="dashicons:arrow-right-alt2"
                      ></span>
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="second-section">
        <Container fluid>
          <Row className="advert_and_tv_container">
            <Col lg={6} md={6} sm={12} className="advert_container">
              <p className="advert_title">Enjoy on your TV.</p>
              <p className="advert_info">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </Col>
            <Col lg={6} md={6} sm={12} className="tv_logo_container">
              <video
                autoPlay
                loop
                playsInline
                muted
                className="tv_movie_preview_container"
              >
                <source src={tv_movie} type="video/mp4" />
              </video>
              <img className="tv_logo" src={tv_logo} alt="tv_preview" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="second-section">
        <Container fluid>
          <Row className="advert_and_tv_container" id="advert_and_tv_container">
            <Col lg={6} md={6} sm={12} className="advert_container">
              <p className="advert_title">
                Download your shows to watch offline.
              </p>
              <p className="advert_info">
                Save your favorites easily and always have something to watch.
              </p>
            </Col>
            <Col lg={6} md={6} sm={12} className="tv_logo_container">
              <div className="mobile_img_container">
                <div className="mobile_download_box">
                  <img
                    className="mobile_item_feature_img"
                    src={boxshot}
                    alt="boxshot"
                  />
                  <div className="mobile_item_content_container">
                    <p className="mobile_item_title">Stranger Things</p>
                    <p className="mobile_item_status">Downloading..</p>
                  </div>
                  <img
                    className="mobile_item_feature_img"
                    src={download_btn}
                    alt="dowload"
                  />
                </div>
                <img
                  className="tv_logo"
                  src={mobile_img}
                  alt="Mobile_preview"
                  id="mobile_logo"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="second-section">
        <Container fluid>
          <Row className="advert_and_tv_container">
            <Col lg={6} md={6} className="advert_container">
              <p className="advert_title">Watch everywhere.</p>
              <p className="advert_info">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="second-section">
        <Container fluid>
          <Row className="advert_and_tv_container" id="advert_and_tv_container">
            <Col lg={6} md={6} sm={12} className="advert_container">
              <p className="advert_title">Create profiles for kids.</p>
              <p className="advert_info">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </Col>
            <Col lg={6} md={6} sm={12} className="tv_logo_container">
              <img className="kids_logo" src={kids_logo} alt="Kids_preview" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="second-section">
        <Container fluid>
          <Row className="advert_and_tv_container">
            <Col sm={12} className="advert_container">
              <p className="advert_title mb-3 mx-auto ">
                Frequently Asked Questions
              </p>
            </Col>
            <Col lg={8} md={10} sm={12} className="mx-auto">
              {allQuestions.map(createQuestions)}
            </Col>
            <Col sm={12} md={8} className="text-center mt-4 mx-auto">
              <p className="banner-text_details">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <form
                id="email_form"
                action=""
                className="mt-2"
                onSubmit={getStarted}
              >
                <div className="form">
                  <div className="email-placeholder-container p-1 rounded">
                    <div className="email-placeholder-child-container w-100 position-relative">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                      <span className="email_placeholder">Email Address</span>
                    </div>
                  </div>
                  <button type="submit" className="get-started rounded">
                    Get Started{" "}
                    <span
                      className="iconify"
                      data-icon="dashicons:arrow-right-alt2"
                    ></span>
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
