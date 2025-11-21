import React from 'react';

const Page = (props: any) => {
  const { config, theme, site, url_for, __, markdown, tagcloud, partial, page } = props;

  const socialLinks = theme.social_links ? Object.keys(theme.social_links).map((link: any, i: number) => {
    let icon;
    let href;
    const nb_links = Object.keys(theme.social_links).length
    if (link === 'mail') {
      icon = 'fas fa-envelope';
      href = theme.social_links[link];
    } else if (link === 'rss') {
      icon = 'fas fa-rss';
      href = theme.social_links[link];
    } else {
      icon = `fab fa-${link}`;
      href = url_for(theme.social_links[link]);
    }
    return (
      <>
      <a key={i} style={{ marginLeft: `${i === 0 ? 0.25 : 0}rem` }} className="icon" target="_blank" rel="noopener" href={href} aria-label={link}>
        <i className={icon}></i>
      </a>
      {nb_links > 0 && i < nb_links-1 ?
        ( i == nb_links-2 ? ' '+__('index.enum_and')+' ' : __('index.enum_comma')+' ' )
        : 
        '.'
      }
      </>
    );
  }) : null;

  const field_sort = theme.posts_overview.sort_updated ? 'updated' : 'date'
  const posts = theme.posts_overview.show_all_posts ? page.posts.sort(field_sort, 'desc') : site.posts.sort(field_sort, 'desc').limit(theme.posts_overview.post_count || 5);

  return (
    <div>
      <section id="about">
        {config.description && <div dangerouslySetInnerHTML={{ __html: markdown(config.description) }} />}
        {theme.social_links && <p>{__('index.find_me_on')}{socialLinks}</p>}
      </section>

      <section id="writing">
        <span className="h1"><a href={url_for(theme.nav.articles)}>{__('index.articles')}</a></span>
        {theme.tags_overview && site.tags.length && (
          <>
            <span className="h2">{__('index.topics')}</span>
            <span className="widget tagcloud" dangerouslySetInnerHTML={{ __html: tagcloud(theme.tags_overview) }} />
            <span className="h2">{__('index.most_recent')}</span>
          </>
        )}
        <ul className="post-list">
          {posts.map((post: any, i: number) => (
            <li key={i} className="post-item">
              <div dangerouslySetInnerHTML={{ __html: partial('_partial/post/date', { post: post, class_name: 'meta' }) }} />
              <span dangerouslySetInnerHTML={{ __html: partial('_partial/post/title', { post: post, index: true, class_name: '' }) }} />
            </li>
          ))}
        </ul>
        {theme.posts_overview.show_all_posts && <div dangerouslySetInnerHTML={{ __html: partial('_partial/pagination') }} />}
      </section>

      {site.data.projects && (
        <section id="projects">
          <span className="h1"><a href={url_for(theme.projects_url)}>{__('index.projects')}</a></span>
          <ul className="project-list">
            {Object.keys(site.data.projects).map((obj: any, i: number) => (
              <li key={i} className="project-item">
                <a href={site.data.projects[obj].url}>{site.data.projects[obj].name}</a>: <div dangerouslySetInnerHTML={{ __html: markdown(site.data.projects[obj].desc) }} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Page;