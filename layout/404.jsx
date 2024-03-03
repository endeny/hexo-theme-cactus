const Gallery = require('./_partial/post/gallery.jsx');

function Page(props) {
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

module.exports = Page;
