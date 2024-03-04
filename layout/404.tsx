import React from 'react';
import Gallery from './_partial/post/gallery.tsx';

export default function Page(props: any) {
  const { config, theme, url_for, __ } = props;
  return (
    <article className="post" itemScope itemType="http://schema.org/BlogPosting">
      <Gallery {...props} />
      <div className="content" itemProp="articleBody">
        {theme.error_404.enabled &&
        theme.error_404.title &&
        theme.error_404.description ? (
          <>
            <h1>{theme.error_404.title}</h1>
            <p>{theme.error_404.description}</p>
          </>
        ) : null}
      </div>
    </article>
  );
}