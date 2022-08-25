import Layout from "../components/Layout";
import store from "../context/store";
import { Provider } from "react-redux";
import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import AuthLayout from "../components/AuthLayout";
// import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.light.compact.css';

// import 'devextreme/dist/css/dx.carmine.compact.css';
//  import 'devextreme/dist/css/dx.material.orange.light.compact.css';

function MyApp({ Component, pageProps, ...appProps }) {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const getLayout = () => {
    if (
      [`/login`].includes(appProps.router.pathname) ||
      [`/register`].includes(appProps.router.pathname) ||
      [`/authrecovery`].includes(appProps.router.pathname)
    ) {
      return (
        <Provider store={store}>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <AuthLayout {...pageProps}>
            <Component {...pageProps} />
          </AuthLayout>
        </Provider>
      );
    }

    return (
      <Provider store={store}>
        <Layout {...appProps}>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  };

  return getLayout();
}

export default MyApp;
