import React from 'react';

interface Post {
  date: Date;
  updated: Date;
}

interface Props {
  post: Post;
  config: { date_format: string };
  theme: { post: { show_updated: boolean }; posts_overview: { sort_updated: boolean }; archive: { sort_updated: boolean } };
  class_name: string;
  is_post: () => boolean;
  is_home: () => boolean;
  is_archive: () => boolean;
  date_xml: (date: Date) => string;
  date: (date: Date, format: string) => string;
}

export default function Date({ post, config, theme, class_name, is_post, is_home, is_archive, date_xml, date }) {
  if (!post.date) {
    return null;
  }

  return (
    <div className={class_name}>
      {is_post() ? (
        <>
          <time dateTime={date_xml(post.date)} itemProp="datePublished">
            {date(post.date, config.date_format)}
          </time>
          {theme.post.show_updated && post.date !== post.updated && (
            <> (Updated: <time dateTime={date_xml(post.updated)} itemProp="dateModified">{date(post.updated, config.date_format)}</time>) </>
          )}
        </>
      ) : (
        <>
          {(is_home() && theme.posts_overview.sort_updated) || (is_archive() && theme.archive.sort_updated) ? (
            <time dateTime={date_xml(post.updated)} itemProp="dateModified">
              {date(post.updated, config.date_format)}
            </time>
          ) : (
            <time dateTime={date_xml(post.date)} itemProp="datePublished">
              {date(post.date, config.date_format)}
            </time>
          )}
        </>
      )}
    </div>
  );
};