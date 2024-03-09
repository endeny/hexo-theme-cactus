import React from "react";

export default function Comments(props: any) {
  const { theme, page, __ } = props;
  if (page.comments && theme.disqus.enabled) {
    return (
      <div className="blog-post-comments">
        <div id="disqus_thread">
          <noscript>{__("comments.no_js")}</noscript>
        </div>
      </div>
    );
  }
  if (page.comments && theme.utterances.enabled) {
    return (
      <div className="blog-post-comments">
        <div id="utterances_thread">
          <noscript>{__("comments.no_js")}</noscript>
        </div>
        <script src="https://utteranc.es/client.js"
          // @ts-ignore
          repo={theme.utterances.repo}
          issue-term={theme.utterances.issue_term}
          label={theme.utterances.label}
          theme={theme.utterances.theme}
          crossOrigin="anonymous"
          async />
      </div>
    );
  }

  if (page.comments && theme.giscus.enabled) {
    const props = theme.giscus;
    return (
    <div className="blog-post-comments">
      <script src={props.src}
      data-repo={props.repo}
      data-repo-id={props.repoId}
      data-category={props.category}
      data-category-id={props.categoryId}
      data-mapping={props.mapping}
      data-strict={props.strict}
      data-reactions-enabled={props.reactionsEnabled}
      data-emit-metadata={props.emitMetadata}
      data-input-position={props.inputPosition}
      data-theme={props.theme}
      data-lang={props.lang}
      data-loading={props.loading}
      crossOrigin="anonymous"
      async />
    </div>
    )
  }
  return null;
}