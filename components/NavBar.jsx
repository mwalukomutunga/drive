import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../context/user.slice";
const NavBar = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    router.push("/login");
  };
  return (
    <div className="navbar-custom">
      <div className="container-fluid">
        <ul className="list-unstyled topnav-menu float-end mb-0">
          <li className="dropdown notification-list topbar-dropdown">
            <a
              className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
              data-bs-toggle="dropdown"
              href="pages-starter.html#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="/assets/images/user.png"
                alt="user-image"
                className="rounded-circle"
                width='32'
                height ='32'
              />
              <span className="pro-user-name ms-1">
                {user?.user?.name} <i className="mdi mdi-chevron-down"></i>
              </span>
            </a>
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
                <a  className="dropdown-item notify-item">
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

        <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
          <li>
            <button className="button-menu-mobile waves-effect waves-light">
              <i className="fe-menu"></i>
            </button>
          </li>

          <li>
            <a
              className="navbar-toggle nav-link"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </li>

          <li className="dropdown d-none d-xl-block">
            <Link href="">
              <a
                className="nav-link dropdown-toggle waves-effect waves-light"
                data-bs-toggle="dropdown"
                href="pages-starter.html#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                Update
                <i className="mdi mdi-chevron-down"></i>
              </a>
            </Link>
            {/* <Link href="wizard">
              <a
                className="nav-link dropdown-toggle waves-effect waves-light"
                data-bs-toggle="dropdown"
                href="pages-starter.html#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                Add User
                <i className="mdi mdi-chevron-down"></i>
              </a>
            </Link> */}
            <div className="dropdown-menu">
              <Link href="bio">
                <a className="dropdown-item">
                  <i className="fe-user me-1"></i>

                  <span>Bio Info</span>
                </a>
              </Link>
              <Link href="location">
                <a className="dropdown-item">
                  <i className="fas fa-globe-africa"></i>

                  <span> Update Location</span>
                </a>
              </Link>
              <div className="dropdown-divider"></div>
              <Link href="uploads">
                <a className="dropdown-item">
                  <i className="fe-briefcase me-1"></i>
                  <span>Upload images</span>
                </a>
              </Link>
            </div>
          </li>
        </ul>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default NavBar;
