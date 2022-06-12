import React from "react";

import LazyShow from "./LazyShow";

import "./mansory.scss";

import { useNavigate } from "react-router-dom";
export default function Mansory(props) {
  let images = [];
  const navigate = useNavigate();

  props.imageUrls.map((image, index) => {
    if (props.filtertag != null) {
      if (image.tag === props.filtertag) {
        images.push({
          url: image.url,
          id: image.id,
          description: image.description,
          tag: image.tag,
          title: image.title,
          date: image.date,
          slug: image.slug,
        });

        if (
          typeof image.album !== "undefined" &&
          props.ignoreChildAlbum == false
        )
          image?.album.map((album, index) => {
            if (album.tag === props.filtertag) {
              images.push({
                url: album.url,
                id: image.id,
                description: album.description,
                tag: image.tag,
                title: image.title,
                date: image.date,
                slug: image.slug,
              });
            }
          });
      }
    } else {
      images.push({
        url: image.url,
        id: image.id,
        description: image.description,
        tag: image.tag,
        title: image.title,
        date: image.date,
        slug: image.slug,
      });

      if (typeof image.album !== "undefined" &&
      props.ignoreChildAlbum == false)
        image?.album.map((album, index) => {
          images.push({
            url: album.url,
            id: image.id,
            description: album.description,
            tag: image.tag,
            title: image.title,
            date: image.date,
            slug: image.slug,
          });
        });
    }
  });

  return (
    <div
      style={{
        columns: props.columnCount,
        columnGap: props.gap,
      }}
    >
      <LazyShow
        key={`lazy-random-${Math.random(100)}`}
        position={`${props.position ? props.position : "relative"}`}
      >
        {images?.map((image, index) => {
          return (
            <div
              className="blog-item"
              style={{
                margin: props.gap / 2,
              }}
              key={`mansory-${index}-${Math.random(100)}`}
              onClick={() => navigate(`/album/${image.slug}`)}
            >
              <img alt={image.description} src={image.url} className="image" />
              <div className="bi-tag">{image.tag}</div>
              <div className="bi-text">
                <div className="bi-date">{image.date}</div>
                <h3>
                  <a href={`/album/${image.slug}`}>{image.title}</a>
                </h3>
              </div>
            </div>
          );
        })}
      </LazyShow>
    </div>
  );
}
