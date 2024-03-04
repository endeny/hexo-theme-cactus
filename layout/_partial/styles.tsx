import React from 'react';

const StylesComponent: React.FC<any> = ({ page, isCdnEnable, getCdnLink, url_for }) => {
  const renderLink = (name: string, url: string) => {
    const htmlProps = {
      onload: "this.onload=null;this.rel='stylesheet'"
    }
    if (isCdnEnable(name)) {
      return <link rel="stylesheet" href={getCdnLink(name, { preload: true })} as="style" {...htmlProps} />;
    } else {
      return (
        <>
          <link rel="stylesheet" href={url_for(url)} as="style" {...htmlProps} />
          <noscript>
            <link rel="stylesheet" href={url_for(url)} />
          </noscript>
        </>
      );
    }
  };

  return (
    <>
      {page.photos && page.photos.length && renderLink('justified_gallery_css', '/lib/justified-gallery/css/justifiedGallery.min.css')}
      {renderLink('font_awesome', '/lib/font-awesome/css/all.min.css')}
      {renderLink('fancybox', '/lib/fancybox/css/fancybox.css')}
      {renderLink('plyr', '/lib/plyr/plyr.css')}
    </>
  );
};

export default StylesComponent;