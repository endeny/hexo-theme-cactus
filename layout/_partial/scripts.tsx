import React from 'react';

interface Page {
  photos?: any[];
  comments?: boolean;
  search?: boolean;
  type?: string;
  // 其他可能的属性...
}

interface Props {
  page: Page;
  isCdnEnable: (name: string) => boolean;
  getCdnScript: (name: string) => string;
  js: (url: string) => string;
  is_post: () => boolean;
  config: any;
  theme: any;
}

const ScriptsComponent: React.FC<Props> = ({ page, isCdnEnable, getCdnScript, js, is_post, config, theme }) => {
  const renderScript = (name: string, url: string) => {
    if (isCdnEnable(name)) {
      return <script src={getCdnScript(name)} />;
    } else {
      return <script src={js(url)} />;
    }
  };
  
  return (
    <>
      {renderScript('jquery', 'lib/jquery/jquery.min')}
      {renderScript('html', 'lib/html/index.bundle')}
      {page.photos && page.photos.length && renderScript('justified_gallery_js', 'lib/justified-gallery/js/jquery.justifiedGallery.min.js')}
      {renderScript('fancybox_js', 'lib/fancybox/js/fancybox.umd.js')}
      {renderScript('mermaid_js', 'lib/mermaid/mermaid.js')}
      {renderScript('plyr_js', 'lib/plyr/plyr.js')}
      {renderScript('hls_js', 'lib/plyr/hls.min.js')}
      {is_post() && renderScript('clipboard', 'lib/clipboard/clipboard.min')}
      <script src={js('js/main')} />
      {config.search && (page.search || page.type === "search") && <script src={js('js/search.js')} />}
      {/* 其他的 <script> 标签... */}
    </>
  );
};

export default ScriptsComponent;