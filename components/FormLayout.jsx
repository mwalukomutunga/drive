import Link from "next/link";
const FormLayout = ({ children, Page }) => {
  return (
    <div className="row">
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <h4 className="header-title">{Page}</h4>
          {/* <p className="sub-header">
                            Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>.
                        </p> */}

          <div className="row">
            <div className="col-12">
              <div className="p-2">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FormLayout;
