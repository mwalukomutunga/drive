import { useEffect, useState } from "react";
import DataTable from "../components/Table";
import { useSelector } from "react-redux";
import requests from "../agent";
import React from "react";
import Link from "next/link";
import { Column,Button } from "devextreme-react/data-grid";
import { LoadIndicator } from "devextreme-react/load-indicator";
import Editable from "../components/EditableTable";
import Router from "next/router";
// const page = "/Registrations/phone/254710623337";

const Chambion = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});
  const [isloading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user && user.isLogged && user.isLogged === true) {
    } else {
      Router.push("/login");
    }
    setLoading(true);
    requests
      .get("/Registrations/phone/" + user?.user?.email)
      .then((response) => {
        setData(response);
        setLoading(false)
      });
  }, []);


  const onAddButtonClick = React.useCallback((e) => {
    Router.push('editreg/'+e?.row?.data?.idNo);
  }, []);

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body">
            <h4 className="header-title mb-3"> My Registered pastoralists</h4>
            <div className="col-sm-3">
              <Link href="wizard">
                <a className="btn btn-primary waves-effect waves-light">
                  <i className="fe-plus me-1"></i>Add New
                </a>
              </Link>
            </div>
            {isloading && (
              <div className="indicators">
                <LoadIndicator id="large-indicator" height={60} width={60} />
              </div>
            )}
              {!isloading &&
            <Editable
              dataSource={data}
              title="Chambion Registered"
              // handlesave={handleSave}
              // handleDelete={handleDelete}
              // handleUpdate={handleUpdate}
              width={500}
              height={350}
            >
              <Column dataField="username" groupIndex={0} caption=" Field officer" />
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
              <Column dataField="hasId" />
              <Column dataField="hasPassPort" />
              <Column type="buttons">
                <Button
                  icon="edit"
                  onClick={onAddButtonClick}
                  visible={true}
                />              
              </Column>           
            </Editable>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chambion;
