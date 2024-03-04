import React from 'react';

const StylesComponent: React.FC<any> = ({ page, isCdnEnable, getCdnLink, url_for }) => {
  const renderLink = (name: string, url: string) => {
    if (false && isCdnEnable(name)) {
      return <link rel="preload" href={getCdnLink(name, { preload: true })} as="style" onLoad="this.onload=null;this.rel='stylesheet'" />;
    } else {
      return (
        <>
          <link rel="stylesheet" href={url_for(url)} as="style" onLoad={(e: any) => {e.onLoad=null;e.rel='stylesheet'}} />
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