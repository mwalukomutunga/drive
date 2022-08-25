import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const AuthLayout = ({ children }) => {
  return (
    <>
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
      <div className="loading auth-fluid-pages pb-0">
        <div className="auth-fluid">
          <div className="auth-fluid-right">
            <div className="auth-user-testimonial">
              <h3 className="mb-3 text-white">Risk Management Survey</h3>
              <p className="lead fw-normal">
                <i className="mdi mdi-format-quote-open"></i> We help unlock the
                full potential of agriculture by eliminating the stress and
                potential damage of climate variables for farmers across Africa.{" "}
                <i className="mdi mdi-format-quote-close"></i>
              </p>
              <h5 className="text-white"></h5>
            </div>
          </div>

          <div className="auth-fluid-form-box">
            <div className="align-items-center d-flex h-100">
              <div className="card-body">
                <div className="auth-brand text-center text-lg-start">
                  <div className="auth-logo">
                    <Link href="/">
                      <a className="logo logo-dark text-center">
                        <span className="logo-lg">
                          <Image
                            src="/assets/images/logo.png"
                            alt=""
                            height="52"
                            width="142"
                          />
                        </span>
                      </a>
                    </Link>

                    <Link href="/">
                      <a className="logo logo-light text-center">
                        <span className="logo-lg">
                          <Image
                            src="/assets/images/logo.png"
                            alt=""
                            height="52"
                            width="142"
                          />
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
