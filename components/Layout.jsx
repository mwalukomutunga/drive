import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../context/user.slice";

const Layout = ({ children }) => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    router.push("/login");
  };
  return (
    <>
    <Head>

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
    </Head>
      <div id="wrapper">
        <div className="navbar-custom">
          <div className="container-fluid">
            <ul className="list-unstyled topnav-menu float-end mb-0">
              <li className="dropdown notification-list topbar-dropdown">
                <Link href="">
                  <a
                    className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
                    data-bs-toggle="dropdown"                   
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <img
                      src="/assets/images/user.png"
                      alt="user-image"
                      className="rounded-circle"
                      width="32"
                      height="32"
                    />
                    <span className="pro-user-name ms-1">
                      {user?.user?.name}
                      <i className="mdi mdi-chevron-down"></i>
                    </span>
                  </a>
                </Link>
                <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                  <div className="dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome !</h6>
                  </div>

                  <Link href="">
                    <a className="dropdown-item notify-item">
                      <i className="ri-account-circle-line"></i>
                      <span>My Account</span>
                    </a>
                  </Link>

                  <Link href="">
                    <a className="dropdown-item notify-item">
                      <i className="ri-settings-3-line"></i>
                      <span>Settings</span>
                    </a>
                  </Link>

                  <div className="dropdown-divider"></div>

                  <Link href="">
                    <a
                      onClick={() => handleSignOut()}
                      className="dropdown-item notify-item"
                    >
                      <i className="ri-logout-box-line"></i>
                      <span>Logout</span>
                    </a>
                  </Link>
                </div>
              </li>
            </ul>

            <div className="logo-box">
              <Link href="/">
                <a className="logo logo-dark text-center">
                  <span className="logo-sm">
                    <img
                      src="/assets/images/logo-sm-dark.png"
                      alt=""
                      height="24"
                    />
                    <span className="logo-lg-text-light">KLIP</span>
                  </span>
                  <span className="logo-lg">
                    <img
                      src="/assets/images/logo-dark.png"
                      alt=""
                      height="20"
                    />
                    <span className="logo-lg-text-light">A</span>
                  </span>
                </a>
              </Link>

              <Link href="/">
                <a className="logo logo-light text-center">
                  <span className="logo-sm">
                    <img src="/assets/images/logo-sm.png" alt="" height="24" />
                  </span>
                  <span className="logo-lg">
                    <img
                      src="/assets/images/logo-light.png"
                      alt=""
                      height="20"
                    />
                  </span>
                </a>
              </Link>
            </div>

            <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
              <li>
                <button className="button-menu-mobile waves-effect waves-light">
                  <i className="fe-menu"></i>
                </button>
              </li>             
            </ul>
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="left-side-menu">
          <div className="logo-box">
            <Link href="/">
              <a className="logo logo-dark text-center">
                <span className="logo-sm">
                  <img
                    src="/assets/images/logo-sm-dark.png"
                    alt=""
                    height="24"
                  />
                  <span className="logo-lg-text-light">KLIP</span>
                </span>
                <span className="logo-lg">
                  <img src="/assets/images/logo-dark.png" alt="" height="20" />
                  <span className="logo-lg-text-light">A</span>
                </span>
              </a>
            </Link>

            <Link href="/">
              <a className="logo logo-light text-center">
                <span className="logo-sm">
                  <img src="/assets/images/logo-sm.png" alt="" height="24" />
                </span>
                <span className="logo-lg">
                  <img src="/assets/images/logo-light.png" alt="" height="50" />
                </span>
              </a>
            </Link>
          </div>

          <div className="h-100" data-simplebar>
            <div className="user-box text-center">
              <img
                src="/assets/images/users/avatar-1.jpg"
                alt="user-img"
                className="rounded-circle avatar-md"
              />
              <div className="dropdown">
                <Link href="/">
                  <a
                    className="text-reset dropdown-toggle h5 mt-2 mb-1 d-block"
                    data-bs-toggle="dropdown"
                  >
                    {user?.user?.name}
                  </a>
                </Link>
                <div className="dropdown-menu user-pro-dropdown">
                  <Link href="">
                    <a className="dropdown-item notify-item">
                      <i className="fe-user me-1"></i>
                      <span>My Account</span>
                    </a>
                  </Link>

                  <Link href="">
                    <a
                      onClick={() => handleSignOut()}
                      className="dropdown-item notify-item"
                    >
                      <i className="fe-log-out me-1"></i>
                      <span>Logout</span>
                    </a>
                  </Link>
                </div>
              </div>
              <p className="text-reset">Admin Head</p>
            </div>

            {/* <div id="sidebar-menu">
              <ul id="side-menu">
                <li className="menu-title">Navigation</li>

                <li>
                  <a
                    href="pages-starter.html#sidebarDashboards"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="sidebarDashboards"
                    className="waves-effect"
                  >
                    <i className="ri-dashboard-line"></i>
                    <span className="badge bg-success rounded-pill float-end">
                      3
                    </span>
                    <span> Dashboards </span>
                  </a>
                  <div className="collapse" id="sidebarDashboards">
                    <ul className="nav-second-level">
                      <li>
                        <a href="index.html">Sales</a>
                      </li>
                      <li>
                        <a href="dashboard-crm.html">CRM</a>
                      </li>
                      <li>
                        <a href="dashboard-analytics.html">Analytics</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="menu-title mt-2">Apps</li>

                <li>
                  <a href="apps-chat.html">
                    <i className="ri-message-2-line"></i>
                    <span> Chat </span>
                  </a>
                </li>

                <li>
                  <a
                    href="pages-starter.html#sidebarEcommerce"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="sidebarEcommerce"
                  >
                    <i className="ri-shopping-cart-2-line"></i>
                    <span className="badge bg-danger float-end">New</span>
                    <span> Ecommerce </span>
                  </a>
                  <div className="collapse" id="sidebarEcommerce">
                    <ul className="nav-second-level">
                      <li>
                        <a href="ecommerce-products.html">Products List</a>
                      </li>
                      <li>
                        <a href="ecommerce-products-grid.html">Products Grid</a>
                      </li>
                      <li>
                        <a href="ecommerce-product-detail.html">
                          Product Detail
                        </a>
                      </li>
                      <li>
                        <a href="ecommerce-product-create.html">
                          Create Product
                        </a>
                      </li>
                      <li>
                        <a href="ecommerce-customers.html">Customers</a>
                      </li>
                      <li>
                        <a href="ecommerce-orders.html">Orders</a>
                      </li>
                      <li>
                        <a href="ecommerce-orders-detail.html">Order Detail</a>
                      </li>
                      <li>
                        <a href="ecommerce-sellers.html">Sellers</a>
                      </li>
                      <li>
                        <a href="ecommerce-cart.html">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="ecommerce-checkout.html">Checkout</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="apps-calendar.html">
                    <i className="ri-calendar-2-line"></i>
                    <span> Calendar </span>
                  </a>
                </li>

                <li>
                  <a
                    href="pages-starter.html#sidebarEmail"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="sidebarEmail"
                  >
                    <i className="ri-mail-line"></i>
                    <span> Email </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="sidebarEmail">
                    <ul className="nav-second-level">
                      <li>
                        <a href="email-inbox.html">Inbox</a>
                      </li>
                      <li>
                        <a href="email-read.html">Read Email</a>
                      </li>
                      <li>
                        <a href="email-templates.html">Email Templates</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="apps-companies.html">
                    <i className="ri-building-4-line"></i>
                    <span> Companies </span>
                  </a>
                </li>
              </ul>
            </div> */}
            <div id="sidebar-menu">
              <ul id="side-menu">
                <li className="menu-title">Navigation</li>
                <li>
                  <Link href="#sidebarDashboards">
                    <a
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="sidebarDashboards"
                      className="waves-effect"
                    >
                      <i className="ri-dashboard-line"></i>
                      <span className="badge bg-success rounded-pill float-end"></span>
                      <span> Dashboards </span>
                    </a>
                  </Link>
                  <div className="collapse" id="sidebarDashboards">
                    <ul className="nav-second-level">
                      <li>
                        <Link href="/dashboard">
                          <a>Admin</a>
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="/">
                        <a >Sales</a></Link>
                      </li>
                      <li>
                        <Link href="/">
                        <a >Sales</a></Link>
                      </li> */}
                    </ul>
                  </div>
                </li>

                <li className="menu-title mt-2">Apps</li>
                <li>
                  <Link href="/wizard">
                    <a>
                      {/* <i className="fas fa-book-reader"></i> */}
                      <i className=" fas fa-folder-plus"></i>
                      <span>Add pastorist </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/champions">
                    <a>
                      <i className="fas fa-address-card"></i>
                      <span>My Registrations</span>
                    </a>
                  </Link>
                </li>
                {user?.user?.superUser && (
                  <>
                    <li>
                      <Link href="/registered">
                        <a>
                          <i className="fas fa-list-ul"></i>
                          <span>Aggregated </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/verifield">
                        <a>
                          <i className=" fas fa-spinner"></i>
                          <span>Unverifield </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pastoralists">
                        <a>
                          <i className="far fa-list-alt"></i>
                          <span>Klip Pastoralists</span>
                        </a>
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link href="bio">
                    <a>
                      <i className="fas fa-address-card"></i>
                      <span>Update Bio </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>

        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <h4 className="page-title">Pastoralist</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link href="">
                            <a>Registration</a>
                          </Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link href="">
                            <a>KLIP</a>
                          </Link>
                        </li>
                        <li className="breadcrumb-item active">Pastoralist</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {children}
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  @2022 Zep-Re
                  {/* <a href="ecommerce-orders-detail.html">Coderthemes</a> */}
                </div>
                <div className="col-md-6">
                  <div className="text-md-end footer-links d-none d-sm-block">
                    <Link href="">
                      <a>About Us</a>
                    </Link>
                    <Link href="">
                      <a>Help</a>
                    </Link>
                    <Link href="">
                      <a>Contact Us</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <div className="rightbar-overlay"></div>
    </>
  );
};

export default Layout;
