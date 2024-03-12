import React from 'react';

const ScriptsComponent: React.FC<any> = ({ page, isCdnEnable, getCdnScript, url_for, is_post, config, theme }) => {
  const renderScript = (name: string, url: string, onload?: string) => {
    if (isCdnEnable(name)) {
      return <script crossOrigin="anonymous" src={getCdnScript(name)} data-onload={onload} />;
    } else {
      return <script src={url_for(url)} data-onload={onload} />;
    }
  };
  return (
    <>
      {renderScript('jquery', 'lib/jquery/jquery.min.js')}
      {page.photos && renderScript('justified_gallery_js', 'lib/justified-gallery/js/jquery.justifiedGallery.min.js')}
      {renderScript('fancybox_js', 'lib/fancybox/js/fancybox.umd.js')}
      {renderScript('mermaid_js', 'lib/mermaid/mermaid.js')}
      {renderScript('plyr_js', 'lib/plyr/plyr.js', "const player = new Plyr(`.plyr-player`);")}
      {renderScript('hls_js', 'lib/plyr/hls.min.js')}
      {is_post() && renderScript('clipboard', 'lib/clipboard/clipboard.min.js')}
      {renderScript('main', 'js/main.js')}
      {config.search && (page.search || page.type === "search") && renderScript("search", "js/search.js") }
    </>
  );
};

export default ScriptsComponent;
