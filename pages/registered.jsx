import { useEffect, useState } from "react";
import Editable from "../components/EditableTable";
import { Item, RequiredRule } from "devextreme-react/form";
import { Form, Label } from "devextreme-react/data-grid";
import TextBox from "devextreme-react/text-box";
import requests from "../agent";
import { useSelector } from "react-redux";
import { Column,Button,Summary,TotalItem } from "devextreme-react/data-grid";
import { LoadIndicator } from "devextreme-react/load-indicator";
const page = "/Registrations/";
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
             {!isloading && <Editable
              dataSource={data}
              title="Chambion Registered"
              // handlesave={handleSave}
              // handleDelete={handleDelete}
              // handleUpdate={handleUpdate}
              width={500}
              height={350}
            >
              <Column dataField="username" caption=" Field officer" />
              <Column dataField="fullName" />
              <Column dataField="idNo" />
              <Column dataField="age" />
              <Column dataField="ndviUnit" />
              <Column dataField="houseHoldSize" />
              <Column dataField="gender" />
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
              <Column dataField="nokFullname" />
              <Column dataField="isKlip" />
              <Column dataField="hasId" caption="Has ID"/>
              <Column dataField="hasPassPort" caption="Has NOK ID"/>
              <Summary>
            <TotalItem
              column="idNo"
              summaryType="count" />           
            <TotalItem
              column="cattle"
              summaryType="sum" />
               <TotalItem
              column="goats"
              summaryType="sum" />
              <TotalItem
              column="sheep"
              summaryType="sum" />
               <TotalItem
              column="camels"
              summaryType="sum" />
          </Summary>
            </Editable>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registered;
