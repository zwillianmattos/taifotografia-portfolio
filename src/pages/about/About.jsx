import React from "react";
import Menu from "../../components/menu";
import PreLoader from "../../components/preloader";
import "./about.scss";
import Bootstrap, { Container, Row, Col } from "bootstrap-4-react";
import about from "../../config/about.json";
import contact from "../../config/contact.json";

export default class About extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  render() {
    if (this.state.isLoading)
      return (
        <>
          <PreLoader />
        </>
      );

    return (
      <>
        <Menu />
        <section className="about-section">
          <div className="about-warp">
            <div className="about-left">
              <div className="about-img">
                <img src={about.userPhoto} alt="" />
              </div>
              <div className="profile-text text-white">
                <h2>Olá</h2>
                <h2>
                  Eu sou <strong>Tairine Fernanda</strong>
                </h2>
                <p>{about.description}</p>
                <a
                  href={`http://wa.me/${contact.phone.replace(/\D/g, "")}?text=Olá, estava visitando seu site e me interessei pelo seu trabalho.`}
                  rel="noreferrer"
                  target="_blank"
                  className="profile-btn"
                >
                  Entre em contato
                </a>
                <a href={`mail:to${contact.email}`} className="profile-email">
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="about-right">
              <div
                className="about-text"
              >
                <h2>Sobre mim</h2>
                <p>{about.aboutme}</p>
              </div>
              <div className="about-text">
                <h2 className="pt-5">Minhas Habilidades</h2>
              </div>
              <div className="skill-warp text-center">
                <Row>
                  {about.skills.map((item, index) => {
                    return (
                      <Col col="lg-3 sm-6" key={index}>
                        <div className="circle-item">
                          <div className="circle-progress"></div>
                          <h4>{item}</h4>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
