import { useEffect, useState } from "react";
import DataTable from "../components/Table";
import { Item, RequiredRule } from "devextreme-react/form";
import { Form, Label } from "devextreme-react/data-grid";
import { LoadIndicator } from "devextreme-react/load-indicator";
import requests from "../agent";
import Editable from "../components/EditableTable";
import { Column, Button } from "devextreme-react/data-grid";

const page = "/Pastoralist/";

const Unverified = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});
  const [isloading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    requests.get(page).then((response) => {
      setData(response);
    });
    setLoading(false);
  }, []);

  const handleSave = (e) => {
    requests.post(page, Object.values(inputs)[0]);
  };
  const handleDelete = (e) => {
    requests.del(page + e.id);
  };
  const handleUpdate = (e) => {
    requests.put(page + e.id, e);
  };

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body">
            <h4 className="header-title mb-3"> Unverified Pastoralist </h4>
            {isloading && (
              <div className="indicators">
                <LoadIndicator id="large-indicator" height={60} width={60} />
              </div>
            )}
            {!isloading && (
              <Editable
                // columns={columns}
                dataSource={data}
                title="Unverified Pastoralist"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={500}
                height={350}
              >
                <Column dataField="surname" />
                <Column dataField="otherNames" />
                <Column dataField="idNo" />
                <Column dataField="cattle" />
                <Column dataField="goats" />
                <Column dataField="sheep" />
                <Column dataField="camels" />
                <Column dataField="bankName" />
                <Column dataField="branch" />
                <Column dataField="bankACNo" />
                <Column dataField="mobilePhoneNo" />
                <Column dataField="county" />
                <Column dataField="subCounty" />
                <Column dataField="ward" />
                <Column dataField="village" />
                <Column dataField="nokSurname" />
              </Editable>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Unverified;
