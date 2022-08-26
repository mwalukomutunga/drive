import { useEffect, useState } from "react";
import DataTable from "../components/Table";
import { Item, RequiredRule } from "devextreme-react/form";
import { Form, Label } from "devextreme-react/data-grid";
import TextBox from "devextreme-react/text-box";
import requests from "../agent";
const page = "/Pastoralist/";

const columns = [
  "surname",
  "otherNames",
  "idNo",
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
  "nokSurname",
];

const Pastoralist = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});
  useEffect(() => {
    // requests.get(page).then((response) => {
    //   setData(response);
    // });
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
            <h4 className="header-title mb-3"> Klip Pastoralist </h4>
            <DataTable
              columns={columns}
              dataSource='/klip.json'              
              title="SYS Titles"
              handlesave={handleSave}
              handleDelete={handleDelete}
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
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
};
// export async function getServerSideProps({ req, res }) {
//   res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=36000, stale-while-revalidate=5900000'
//   )
//   const pastoralists = await requests.get("Pastoralist");  
//   return {
//     props: {
//       pastoralists,
//     },
//   }
// }
// export async function getServerSideProps() {
//   const pastoralists = await requests.get("Pastoralist");  
//   return {
//     props: {
//       pastoralists,
//     },
//   }
// }
export default Pastoralist;
