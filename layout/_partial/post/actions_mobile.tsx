import React from 'react';
import Share from './share';

const ActionsMobileComponent: React.FC<any> = (props) => {
  const { theme, page, url_for, toc, __ } = props;

  return (
    <div id="footer-post-container">
      <div id="footer-post">
        <div id="nav-footer" style={{ display: 'none' }}>
          <ul>
            {theme.nav && Object.entries(theme.nav).map(([i, navItem]: any) =>  (
              <li key={i}><a href={url_for(navItem.path || '')}>{__('nav.'+i).replace("nav.", "")}</a></li>
            ))}
          </ul>
        </div>
        <div id="toc-footer" style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: toc(page.content || '') }} />
        <div id="share-footer" style={{ display: 'none' }}>
          <Share {...props} iconClassName="fa-lg" />
        </div>
        <div id="actions-footer">
          <a id="menu" className="icon" href="#" data-onclick="$('#nav-footer').toggle();return false;"><i className="fas fa-bars fa-lg" aria-hidden="true"></i> {__('post.mobile.menu')}</a>
          <a id="toc" className="icon" href="#" data-onclick="$('#toc-footer').toggle();return false;"><i className="fas fa-list fa-lg" aria-hidden="true"></i> {__('post.mobile.toc')}</a>
          <a id="share" className="icon" href="#" data-onclick="$('#share-footer').toggle();return false;"><i className="fas fa-share-alt fa-lg" aria-hidden="true"></i> {__('post.mobile.share')}</a>
          <a id="top" style={{ display: 'none' }} className="icon" href="#" data-onclick="$('html, body').animate({ scrollTop: 0 }, 'fast');"><i className="fas fa-chevron-up fa-lg" aria-hidden="true"></i> {__('post.mobile.back_to_top')}</a>
        </div>
      </div>
    </div>
  );
};

export default ActionsMobileComponent;