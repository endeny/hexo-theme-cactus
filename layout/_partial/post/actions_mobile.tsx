import React from 'react';
import Share from './share';

const ActionsMobileComponent: React.FC<any> = (props) => {
  const { theme, page, url_for, toc, __ } = props;
  const toggleElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = element.style.display === 'none' ? '' : 'none';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="footer-post-container">
      <div id="footer-post">
        <div id="nav-footer" style={{ display: 'none' }}>
          <ul>
            {theme.nav && Object.values(theme.nav).map((navItem: any, i) => (
              <li key={i}><a href={url_for(navItem.path || '')}>{__('nav.'+i).replace("nav.", "")}</a></li>
            ))}
          </ul>
        </div>
        <div id="toc-footer" style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: toc(page.content || '') }} />
        <div id="share-footer" style={{ display: 'none' }}>
          <Share {...props} iconClassName="fa-lg" />
        </div>
        <div id="actions-footer">
          <a id="menu" className="icon" href="#" onClick={() => toggleElement('nav-footer')}><i className="fas fa-bars fa-lg" aria-hidden="true"></i> {__('post.mobile.menu')}</a>
          <a id="toc" className="icon" href="#" onClick={() => toggleElement('toc-footer')}><i className="fas fa-list fa-lg" aria-hidden="true"></i> {__('post.mobile.toc')}</a>
          <a id="share" className="icon" href="#" onClick={() => toggleElement('share-footer')}><i className="fas fa-share-alt fa-lg" aria-hidden="true"></i> {__('post.mobile.share')}</a>
          <a id="top" style={{ display: 'none' }} className="icon" href="#" onClick={scrollToTop}><i className="fas fa-chevron-up fa-lg" aria-hidden="true"></i> {__('post.mobile.back_to_top')}</a>
        </div>
      </div>
    </div>
  );
};

export default ActionsMobileComponent;