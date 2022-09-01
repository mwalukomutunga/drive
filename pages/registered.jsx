import { useEffect, useState } from "react";
import DataTable from "../components/Table";
import { Item, RequiredRule } from "devextreme-react/form";
import { Form, Label } from "devextreme-react/data-grid";
import TextBox from "devextreme-react/text-box";
import requests from "../agent";
import { useSelector } from "react-redux";
import { LoadIndicator } from "devextreme-react/load-indicator";
const page = "/Registrations/";

const columns = [
  "user",
  "fullName",
  "idNo",
  "age",
  "ndviUnit",
  "houseHoldSize",
  "gender",
  "cattle",
  "goats",
  "sheep",
  "camels",
  "bankName",
  "branch",
  "bankACNo",
  "mobilePhoneNo",
  "county",
  "subCounty",
  "ward",
  "village",
  "nokFullname",
  "isKlip",
  "hasId",
  "hasPassPort",
];

const Registered = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});
  const [isloading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  useEffect(() => {
   
    if (user && user.isLogged && user.isLogged === true) {
    } else {
      router.push("/login");
    }
    setLoading(true)
    requests.get(page).then((response) => {
      setData(response);
      setLoading(false)
    });
 
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
            <h4 className="header-title mb-3"> Registered Pastoralists </h4>
            {isloading && (
              <div className="indicators text-center">
                <LoadIndicator id="large-indicator" height={60} width={60} />
              </div>
            )}
             {!isloading && <DataTable
              columns={columns}
              dataSource={data}
              title="SYS Titles"
              handlesave={handleSave}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              width={500}
              height={350}
            >
            </DataTable>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registered;
