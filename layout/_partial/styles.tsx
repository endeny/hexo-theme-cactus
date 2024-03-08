import React from 'react';

const StylesComponent: React.FC<any> = ({ page, isCdnEnable, getCdnLink, url_for }) => {
  const renderLink = (name: string, url: string) => {
    const htmlProps = {
      "data-onload": "this.onload=null;this.rel=`stylesheet`"
    } as any
    if (isCdnEnable(name)) {
      return <link key={name} rel="preload" href={getCdnLink(name, { preload: true })} as="style" {...htmlProps} />;
    } else {
      return (
        <>
          <link key={name} rel="preload" href={url_for(url)} as="style" {...htmlProps} />
          <noscript key={`no-script-${name}`}>
            <link rel="stylesheet" href={url_for(url)} />
          </noscript>
        </>
      );
    }
  };

  return (
    <>
      {page.photos && page.photos.length != 0 && renderLink('justified_gallery_css', 'lib/justified-gallery/css/justifiedGallery.min.css')}
      {renderLink('font_awesome', 'lib/font-awesome/css/all.min.css')}
      {renderLink('fancybox', 'lib/fancybox/css/fancybox.css')}
      {renderLink('plyr', 'lib/plyr/plyr.css')}
    </>
  );
};

export default StylesComponent;