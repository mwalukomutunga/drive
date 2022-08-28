import Document, { Html, Head, Main, NextScript, script } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/assets/images/favicon.ico" />
          <link
            href="/assets/css/default/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
            id="bs-default-stylesheet"
          />
          <link
            href="/assets/css/default/app.min.css"
            rel="stylesheet"
            type="text/css"
            id="app-default-stylesheet"
          />
          <link
            href="/assets/css/default/bootstrap-dark.min.css"
            rel="stylesheet"
            type="text/css"
            id="bs-dark-stylesheet"
          />
          <link
            href="/assets/css/default/app-dark.min.css"
            rel="stylesheet"
            type="text/css"
            id="app-dark-stylesheet"
          />
          <link
            href="/assets/css/icons.min.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body
          className="dx-viewport loading"
          data-layout='{"mode": "light", "width": "fluid", "menuPosition": "fixed", "sidebar": { "color": "light", "size": "default", "showuser": false}, "topbar": {"color": "dark"}, "showRightSidebarOnPageLoad": true}'
        >
          <Main />

          <NextScript />
          <div className="rightbar-overlay"></div>
          <script async src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
          <script async src="/assets/js/vendor.min.js"></script>
          <script
            async
            src="/assets/libs/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js"
          ></script>
          <script async src="/assets/js/pages/form-wizard.init.js"></script>
          <script async src="/assets/js/app.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
