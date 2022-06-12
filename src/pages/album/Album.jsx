import React from "react";

import { Container, Row, Col } from "bootstrap-4-react";
import Menu from "../../components/menu";
import PreLoader from "../../components/preloader";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./album.scss";

import Api from "../../services/Api";

export default class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, fotos: [] };
  }

  async componentDidMount() {
    let fotos = await new Api().getBySlug(
      window.location.pathname.replace("/album/", "") || null
    );
    this.setState({ fotos: fotos, isLoading: false });
  }

  render() {
    if (this.state.isLoading)
      return (
        <>
          <PreLoader />
        </>
      );

    const { fotos } = this.state;

    if (fotos == null) {
      return (
        <div>
          <Menu />
          <Container>
            <h1>Album não encontrado</h1>
          </Container>
        </div>
      );
    }

    return (
      <>
        <Menu />
        <section className="blog-details">
          <Container>
            <div className="single-blog-page">
              <div className="blog-metas">
                <div className="blog-meta">{fotos?.date}</div>
              </div>
              <h2>{fotos?.title}</h2>
              <div className="blog-thumb">
                <div className="thumb-cata">{fotos?.tag}</div>
                <img
                  src={fotos?.url}
                  style={{
                    width: "100%",
                  }}
                  alt=""
                />
              </div>
              <p>{fotos?.description} </p>
              <Row className=" blog-gallery">
                <Col col="lg-9 " className="p-0">
                  <Row className="m-0">
                    {fotos?.album?.map((image, index) => {
                      return (
                        <div
                          col={`${index % 2 ? `lg-4` : `lg-8`} p-0`}
                          key={`image-${index}-${Math.random(100)}`}
                        >
                          <div className="bg-item">
                            <img src={image.url} alt="" width={`25%`} />
                          </div>
                        </div>
                      );
                    })}
                  </Row>
                </Col>
              </Row>
              <Row className="row pt-5">
                <Col className="col-lg-6 mb-4">
                  <a
                    href={`/portfolio?tag=${fotos?.tag}`}
                    className="post-cata"
                  >
                    {fotos?.tag}
                  </a>
                </Col>
                <Col className="col-lg-6 mb-5 text-left text-md-right">
                  <div className="post-share">
                    <span>Compartilhar:</span>
                    <a href="/">
                      <FaFacebookF />
                    </a>
                    <a href="/">
                      <FaLinkedinIn />
                    </a>
                    <a href="/">
                      <FaInstagram />
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </>
    );
  }
}
