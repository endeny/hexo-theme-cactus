import React from 'react';
import Head from './_partial/head';
import ActionsDesktop from './_partial/post/actions_desktop';
import Header from './_partial/header';
import ActionsMobile from './_partial/post/actions_mobile';
import Footer from './_partial/footer';
import Scripts from './_partial/scripts';

const LayoutComponent: React.FC<any> = (props) => {
  const { config, is_post: isPost, body } = props;
  if (props.page.layout === 'raw') {
      return (
        <html lang={config.language ? config.language.substring(0, 2) : undefined}>
          <Head {...props} />
          <body className={`max-width mx-auto px3 ${config.direction}`}>
            <div className="content index">
              <div dangerouslySetInnerHTML={{__html: body}}></div>
            </div>
            <Scripts {...props} />
          </body>
        </html>
      )
  }
  return (
    <html lang={config.language ? config.language.substring(0, 2) : undefined}>
      <Head {...props} />
      <body className={`max-width mx-auto px3 ${config.direction}`}>
        {isPost() && <ActionsDesktop {...props} />}
        <div className="content index py4">
          {!isPost() && <Header {...props} />}
          <div dangerouslySetInnerHTML={{__html: body}}></div>
          {isPost() && <ActionsMobile {...props} />}
          <Footer {...props} />
        </div>
        <Scripts {...props} />
      </body>
    </html>
  );
};

export default LayoutComponent;