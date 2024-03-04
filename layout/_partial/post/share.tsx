import React from 'react';

const ShareComponent: React.FC<any> = ({ page, iconClassName }) => {
  return (
    <ul>
      <li><a className="icon" href={`http://www.facebook.com/sharer.php?u=${page?.permalink}`}><i className={`fab fa-facebook ${iconClassName}`} aria-hidden="true"></i></a></li>
      <li><a className="icon" href={`https://twitter.com/share?url=${page?.permalink}&text=${page?.title}`}><i className={`fab fa-twitter ${iconClassName}`} aria-hidden="true"></i></a></li>
      <li><a className="icon" href={`http://www.linkedin.com/shareArticle?url=${page?.permalink}&title=${page?.title}`}><i className={`fab fa-linkedin ${iconClassName}`} aria-hidden="true"></i></a></li>
      <li><a className="icon" href={`https://pinterest.com/pin/create/bookmarklet/?url=${page?.permalink}&is_video=false&description=${page?.title}`}><i className={`fab fa-pinterest ${iconClassName}`} aria-hidden="true"></i></a></li>
      <li><a className="icon" href={`mailto:?subject=${page?.title}&body=Check out this article: ${page?.permalink}`}><i className={`fas fa-envelope ${iconClassName}`} aria-hidden="true"></i></a></li>
      <li><a className="icon" href={`https://getpocket.com/save?url=${page?.permalink}&title=${page?.title}`}><i className={`fab fa-get-pocket ${iconClassName}`} aria-hidden="true"></i></a></li>
      <li><a className="icon" href={`http://reddit.com/submit?url=${page?.permalink}&title=${page?.title}`}><i className={`fab fa-reddit ${iconClassName}`} aria-hidden="true"></i></a></li>
      <li><a className="icon" href={`http://www.stumbleupon.com/submit?url=${page?.permalink}&title=${page?.title}`}><i className={`fab fa-stumbleupon ${iconClassName}`} aria-hidden="true"></i></a></li>
      <li><a className="icon" href={`http://digg.com/submit?url=${page?.permalink}&title=${page?.title}`}><i className={`fab fa-digg ${iconClassName}`} aria-hidden="true"></i></a></li>
      <li><a className="icon" href={`http://www.tumblr.com/share/link?url=${page?.permalink}&name=${page?.title}&description=${page.excerpt}`}><i className={`fab fa-tumblr ${iconClassName}`} aria-hidden="true"></i></a></li>
      <li><a className="icon" href={`https://news.ycombinator.com/submitlink?u=${page?.permalink}&t=${page?.title}`}><i className={`fab fa-hacker-news ${iconClassName}`} aria-hidden="true"></i></a></li>
    </ul>
  );
};

export default ShareComponent;
