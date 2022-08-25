const NewRecord = () => {
  return (
    <>
      <div className="col-sm-3">
        <a
          href="task-list.html#"
          className="btn btn-primary waves-effect waves-light"
        >
          <i className="fe-plus me-1"></i>Add New
        </a>
      </div>
      <div className="col-sm-9">
        <div className="float-sm-end mt-3 mt-sm-0">
          <div className="d-flex align-items-start flex-wrap">
            <div className="mb-3 mb-sm-0 me-sm-2">
              <form>
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              </form>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="mdi mdi-filter-variant"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="task-list.html#">
                  Due Date
                </a>
                <a className="dropdown-item" href="task-list.html#">
                  Added Date
                </a>
                <a className="dropdown-item" href="task-list.html#">
                  Assignee
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRecord;
