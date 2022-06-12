import React from "react";
import Menu from "../../components/menu";
import HeroAlbuns from "../../components/hero-albuns";
import PreLoader from "../../components/preloader";
import Mansory from "../../components/mansory";
import Api from "../../services/Api";
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true, fotos: [] };
  }

  async componentDidMount() {
    let fotos = await new Api().getAll();
    this.setState({ fotos: fotos?.slice(0,3), isLoading: false });
  }

  render() {
    if (this.state.isLoading)
      return (
        <>
          <PreLoader />
        </>
      );

    const { fotos } = this.state;
    return (
      <>
        <Menu />
        <div
          style={{
            overflow: "hidden",
            position: "fixed",
            width: "100%",
            height: "calc(103vh - 18px)",
            top: "0",
            bottom: "0",
            margin: "0 auto",
            display: "block",
          }}
          className="hero-gallery-section"
        >
          <HeroAlbuns albuns={fotos} />
        </div>
        <div className="home-mansory">
          <Mansory imageUrls={fotos} ignoreChildAlbum={true} columnCount="1" gap="10" />
        </div>
      </>
    );
  }
}
