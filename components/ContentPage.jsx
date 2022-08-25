import Link from "next/link";

const ContentPage = ({ children,Title }) => {
  return (
    <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="custom-accordion">
                      <div className="mt-4">
                        <h5 className="position-relative mb-0">
                          <a
                            href="task-list.html#taskcollapse3"
                            className="text-dark d-block"
                            data-bs-toggle="collapse"
                          >
                           {Title} 
                           {/* <span className="text-muted">(03)</span> */}
                            <i className="mdi mdi-chevron-down accordion-arrow"></i>
                          </a>
                        </h5>
                        <div className="collapse show" id="taskcollapse3">
                          <div className="table-responsive mt-3">{children}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default ContentPage;
