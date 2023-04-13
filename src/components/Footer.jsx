import React from "react";
import { Container, Col, Row } from "react-bootstrap";
function Footer() {
  return (
    <div className="footer">
      <Container fluid>
        <Row className="advert_and_tv_container">
          <Col lg={12} md={12} className="">
            <a href="/" className="footer-title">
              Questions? Contact us.
            </a>
            <div className="footer-nav-container">
              <a href="/" className="footer-nav-link">
                FAQ
              </a>
              <a href="/" className="footer-nav-link">
                Media Center
              </a>
              <a href="/" className="footer-nav-link">
                Ways to Watch
              </a>
              <a href="/" className="footer-nav-link">
                Cookie Preferences
              </a>
              <a href="/" className="footer-nav-link">
                Speed Test
              </a>
              <a href="/" className="footer-nav-link">
                Help Center
              </a>
              <a href="/" className="footer-nav-link">
                Investor Relations
              </a>
              <a href="/" className="footer-nav-link">
                Terms of Use
              </a>
              <a href="/" className="footer-nav-link">
                Corporate Information
              </a>
              <a href="/" className="footer-nav-link">
                Legal Notices
              </a>
              <a href="/" className="footer-nav-link">
                Account
              </a>
              <a href="/" className="footer-nav-link">
                Jobs
              </a>
              <a href="/" className="footer-nav-link">
                Privacy
              </a>
              <a href="/" className="footer-nav-link">
                Contact Us
              </a>
              <a href="/" className="footer-nav-link">
                Only on Netflix
              </a>
            </div>
            <a href="/" className="footer-nav-link copyright-text">
              Netflix Nigeria
            </a>
          </Col>
        </Row>
      </Container>
      <a
        href="https://twitter.com/moroundiya08"
        className="fs-6 footer-nav-link text-center d-block mt-3"
      >
        Designed by Moroundiya 😎
      </a>
    </div>
  );
}
export default Footer;
