import React from 'react';

interface Page {
  photos?: any[];
  // 其他可能的属性...
}

interface Props {
  page: Page;
  isCdnEnable: (name: string) => boolean;
  getCdnLink: (name: string, options: { preload: boolean }) => string;
  url_for: (url: string) => string;
}

const StylesComponent: React.FC<Props> = ({ page, isCdnEnable, getCdnLink, url_for }) => {
  const renderLink = (name: string, url: string) => {
    if (isCdnEnable(name)) {
      return <link rel="preload" href={getCdnLink(name, { preload: true })} as="style" onLoad="this.onload=null;this.rel='stylesheet'" />;
    } else {
      return (
        <>
          <link rel="preload" href={url_for(url)} as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
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