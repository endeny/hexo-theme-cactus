import React from 'react';

const ScriptsComponent: React.FC<any> = ({ page, isCdnEnable, getCdnScript, url_for, is_post, config, theme }) => {
  const renderScript = (name: string, url: string) => {
    if (isCdnEnable(name)) {
      return <script crossOrigin="anonymous" src={getCdnScript(name)} />;
    } else {
      return <script src={url_for(url)} />;
    }
  };
  
  return (
    <>
      {renderScript('jquery', 'lib/jquery/jquery.min')}
      {page.photos && renderScript('justified_gallery_js', 'lib/justified-gallery/js/jquery.justifiedGallery.min.js')}
      {renderScript('fancybox_js', 'lib/fancybox/js/fancybox.umd.js')}
      {renderScript('mermaid_js', 'lib/mermaid/mermaid.js')}
      {renderScript('plyr_js', 'lib/plyr/plyr.js')}
      {renderScript('hls_js', 'lib/plyr/hls.min.js')}
      {is_post() && renderScript('clipboard', 'lib/clipboard/clipboard.min')}
      {renderScript('main', 'js/main.js')}
      {config.search && (page.search || page.type === "search") && renderScript("search", "js/search.js") }
    </>
  );
};

export default ScriptsComponent;