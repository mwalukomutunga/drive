import { useEffect, useState } from "react";
import DataTable from "../components/Table";
import { useSelector } from "react-redux";
import requests from "../agent";
import Link from "next/link";
import Editable from "../components/EditableTable";
// const page = "/Registrations/phone/254710623337";


const columns = [
  "user",
  "fullName",
  "idNo",
  "age",
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

const Chambion = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});
  const user = useSelector((state) => state.user);
  useEffect(() => {
    requests
      .get("/Registrations/phone/" + user?.user?.email)
      .then((response) => {
        setData(response);
      });
  }, []);

  const handleUpdate =(e) =>{
    console.log(e)
   e.cancel;
   
  }

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
            <Editable
              columns={columns}
              dataSource={data}
              title="Chambion Registered"
              // handlesave={handleSave}
              // handleDelete={handleDelete}
               handleUpdate={handleUpdate}
              width={500}
              height={350}
            >
              {/* <Form colCount={1}>
        <Item>
          <TextBox
            onValueChanged={(e) => {
              setInputs((prevState) => ({
                inputs: { ...prevState.inputs, title: e.value },
              }));
            }}
          />
          <RequiredRule />
          <Label text="Title" />
        </Item>
      </Form> */}
            </Editable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chambion;
