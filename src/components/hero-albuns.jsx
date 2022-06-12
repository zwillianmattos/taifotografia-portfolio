import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.scss";

const HeroAlbuns = ({ albuns }) => {
  let [over, setOver] = React.useState(null);
  let itemWidth = 100 / albuns.length;
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <div className="pana-accordion" id="accordion">
        <div className="pana-accordion-wrap">
          {albuns.map((album, index) => {
            console.log(album)
            return (
              <div
                className={`pana-accordion-item  set-bg ${
                  over === index ? "active hide-mask" : null
                }`}
                key={index}
                onMouseOver={() => setOver(index)}
                onMouseOut={() => setOver(null)}
                onClick={() => navigate(`/album/${album.slug}`)}
                style={{
                  backgroundImage: `url(${album.url})`,
                  backgroundSize: "cover",
                  backgroundColor: "#001",
                  backgroundPosition: "center",
                  minWidth: `${itemWidth / 3}%`,
                  width: `${itemWidth / 3}%`,
                  height: "calc(100vh)",
                  position: `${over === index ? "relative" : "relative"}`,
                  tabIndex: `${over === index ? "0" : "-1"}`,
                  
                }}
              >
                <div className="pa-text" >
                  <div className="pa-tag">{album.tag}</div>
                  <h2>{album.title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroAlbuns;
