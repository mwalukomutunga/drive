import Link from "next/link";
const UploadLayout = ({ children }) => {
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box">
                  <h4 className="page-title">File Uploads</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link href="">
                          <a>Klip</a>
                        </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link href="">
                          <a>Pastoralist</a>
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">File Uploads</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {children}
{/* 
            <div className="d-none" id="uploadPreviewTemplate">
              <div className="card mt-1 mb-0 shadow-none border">
                <div className="p-2">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <img
                        data-dz-thumbnail
                        src="forms-file-uploads.html#"
                        className="avatar-sm rounded bg-light"
                        alt=""
                      />
                    </div>
                    <div className="col ps-0">
                      <a
                        href="javascript:void(0);"
                        className="text-muted fw-bold"
                        data-dz-name
                      ></a>
                      <p className="mb-0" data-dz-size></p>
                    </div>
                    <div className="col-auto">
                      <a
                        href="forms-file-uploads.html"
                        className="btn btn-link btn-lg text-muted"
                        data-dz-remove
                      >
                        <i className="fe-x"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <script>document.write(new Date().getFullYear())</script> &copy;
                KLIP
              </div>
              <div className="col-md-6">
                <div className="text-md-end footer-links d-none d-sm-block">
                <Link href=""><a >About Us</a></Link>
                <Link href=""><a >Help</a></Link>
                <Link href=""><a >Contact Us</a></Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default UploadLayout;
