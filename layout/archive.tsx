import React from 'react';

const Archive = (props: any) => {
  const { page, theme, partial, date } = props;

  let year = 0;
  let change = false;
  const field_sort = theme.archive.sort_updated ? 'updated' : 'date';

  const posts = page.posts.sort(field_sort, 'desc').map((post: any, i: number) => {
    const itemYear = parseInt(date(post[field_sort], 'YYYY'), 10);
    change = year !== itemYear;
    year = change ? itemYear : year;

    return (
      <React.Fragment key={i}>
        {change && <li className="post-year"><h2>{year}</h2></li>}
        <li className="post-item">
          <div dangerouslySetInnerHTML={{ __html: partial('_partial/post/date', { post: post, class_name: 'meta' }) }} />
          <span dangerouslySetInnerHTML={{ __html: partial('_partial/post/title', { post: post, index: true, class_name: '' }) }} />
        </li>
      </React.Fragment>
    );
  });

  return (
    <div id="archive">
      <ul className="post-list">
        {posts}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: partial('_partial/pagination') }} />
    </div>
  );
};

export default Archive;