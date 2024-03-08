import React from 'react';

const ScriptsComponent: React.FC<any> = ({ page, isCdnEnable, getCdnScript, url_for, is_post, config, theme }) => {
  const renderScript = (name: string, url: string, onload?: string) => {
    if (isCdnEnable(name)) {
      return <script crossOrigin="anonymous" src={getCdnScript(name)} data-onload={onload} />;
    } else {
      return <script src={url_for(url)} data-onload={onload} />;
    }
  };
  const enableComment = page.comments && theme.utterances.enabled && theme.utterances.repo && theme.utterances.issue_term && theme.utterances.theme
  return (
    <>
      {renderScript('jquery', 'lib/jquery/jquery.min')}
      {page.photos && renderScript('justified_gallery_js', 'lib/justified-gallery/js/jquery.justifiedGallery.min.js')}
      {renderScript('fancybox_js', 'lib/fancybox/js/fancybox.umd.js')}
      {renderScript('mermaid_js', 'lib/mermaid/mermaid.js')}
      {renderScript('plyr_js', 'lib/plyr/plyr.js', "const player = new Plyr(`.plyr-player`);")}
      {renderScript('hls_js', 'lib/plyr/hls.min.js')}
      {is_post() && renderScript('clipboard', 'lib/clipboard/clipboard.min')}
      {renderScript('main', 'js/main.js')}
      {config.search && (page.search || page.type === "search") && renderScript("search", "js/search.js") }
      {enableComment ? <script src="https://utteranc.es/client.js"
        repo={theme.utterances.repo}
        issue-term={theme.utterances.issue_term}
        label={theme.utterances.label}
        theme={theme.utterances.theme}
        crossorigin="anonymous"
        async>
      </script> : null}
    </>
  );
};

export default ScriptsComponent;
