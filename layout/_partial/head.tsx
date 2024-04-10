import React from 'react';
import Styles from './styles';

declare global {
  namespace JSX {
    interface IntrinsicElements {
        'raw-html': React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        >;
    }
  }
}

const HeadComponent: React.FC<any> = (props) => {
  const { theme, page, config, open_graph, meta, page_title, css, url_for, gravatar, thumbnail} = props;
  return (
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="google-adsense-account" content="ca-pub-7187369450486868" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      {theme.favicon?.desktop && (
        <link rel="shortcut icon" href={theme.gravatar && (theme.gravatar.email || theme.gravatar.hash) && theme.favicon.desktop.gravatar ? (theme.gravatar.email ? gravatar(theme.gravatar.email, 48) : `https://www.gravatar.com/avatar/${theme.gravatar.hash}?s=48`) : url_for(theme.favicon.desktop.url)} />
          )}
      {theme.favicon?.android && (
        <link rel="icon" type="image/png" sizes="192x192" href={theme.gravatar && (theme.gravatar.email || theme.gravatar.hash) && theme.favicon.android.gravatar ? (theme.gravatar.email ? gravatar(theme.gravatar.email, 192) : `https://www.gravatar.com/avatar/${theme.gravatar.hash}?s=192`) : url_for(theme.favicon.android.url)} />
      )}
      {theme.favicon?.apple &&
        <link rel="apple-touch-icon" sizes="180x180" href={theme.gravatar && (theme.gravatar.email || theme.gravatar.hash) && theme.favicon.apple.gravatar ? (theme.gravatar.email ? gravatar(theme.gravatar.email, 180) : `https://www.gravatar.com/avatar/${theme.gravatar.hash}?s=180`) : url_for(theme.favicon.apple.url)} />
      }
      <Styles {...props} />
      <raw-html dangerouslySetInnerHTML={{ __html: open_graph({
        image:          thumbnail(page),
        fb_app_id:      theme.open_graph.fb_app_id,
        fb_admins:      theme.open_graph.fb_admins,
        twitter_id:     theme.open_graph.twitter_id,
        google_plus:    theme.open_graph.google_plus,
      })}} />
      <raw-html dangerouslySetInnerHTML={{ __html: meta(page) }} />
      <title>{page_title()}</title>
      <link rel="stylesheet" href={url_for('css/style.css')} />
      {theme.style && <link rel="stylesheet" href={url_for('css/custom.css')} />}
      <link rel="stylesheet" href={url_for('css/custom.css')} />
      {theme.direction === 'rtl' && <link rel="stylesheet" href={url_for('css/rtl')} />}
      {theme.rss === '' && config.feed && config.feed.path && (theme.rss = config.feed.path)}
      {theme.rss && <link rel="alternate" href={url_for(theme.rss)} title={config.title} type="application/atom+xml" />}
      {theme.mathjax.enabled && (
        <>
          <script type="text/x-mathjax-config" dangerouslySetInnerHTML={{__html: `
            MathJax.Hub.Config({
              tex2jax: {
                skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
                inlineMath: [['$','$']]
              }
            });
          `}} />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML' async></script>
        </>
      )}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8265855834077602" crossOrigin="anonymous"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-RR0ESTB517"></script>
      <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RR0ESTB517');
      `}} />
      <script dangerouslySetInnerHTML={{__html: `(adsbygoogle = window.adsbygoogle || []).push({});`}} />
    </head>
  );
};

export default HeadComponent;