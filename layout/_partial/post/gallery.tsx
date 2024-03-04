import React from 'react'

export default function Gallery(props) {
  const { page, config, theme, url_for, __ } = props;
  const photos = page.photos ?? []
  if (photos && photos.length) {
    return (
      <div className="article-gallery">
        {photos.map((photo, i) => (
          <a key={i}
            className="gallery-item"
            href={url_for(photo)}
            rel={`gallery_${page._id}`} >
            <img title="image" src={url_for(photo)} itemProp="image" />
          </a>
        ))}
      </div>
    );
  }
  return null;
}