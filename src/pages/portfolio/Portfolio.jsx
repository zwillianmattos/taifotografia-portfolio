import React from "react";
import Menu from "../../components/menu";
import PreLoader from "../../components/preloader";
import Mansory from "../../components/mansory";
import "./portfolio.scss";
import Api from "../../services/Api";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    const tag = new URLSearchParams(window.location.search).get("tag") || null;
    this.state = { isLoading: true, filterTag: tag, fotos: [] };
  }

  async componentDidMount() {
    let fotos = await new Api().getAll();
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

    const tags = fotos
      .filter((item) => item.tag !== undefined)
      .map((item) => item.tag);
    const tagsUnique = [...new Set(tags)];

    return (
      <>
        <Menu />
        <section className="gallery-section">
          <div className="gallery-header">
            <h4>Trabalhos</h4>
            <ul className="gallery-filter">
              <li
                className={`filter all ${
                  null === this.state.filterTag ? "active" : ""
                }`}
                onClick={() => {
                  this.setState({ filterTag: null });
                }}
              >
                Todos
              </li>
              {tagsUnique.map((item, index) => {
                return (
                  <li
                    className={`filter ${
                      item === this.state.filterTag ? "active" : ""
                    }`}
                    key={`filter-${index}`}
                    onClick={() => {
                      this.setState({ filterTag: item });
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <Mansory
            ignoreChildAlbum={false}
            imageUrls={fotos}
            columnCount={window.innerWidth < 768 ? 1 : 3}
            gap="10"
            filtertag={this.state.filterTag}
            position="unset"
          />
        </section>
      </>
    );
  }
}
