import FormLayout from "../components/FormLayout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import requests from "../agent";
import { useRouter } from "next/router";

const NextOfKin = () => {
  const user = useSelector((state) => state.user);
  const [input, setInputs] = useState({});
  const [regions, setRegions] = useState([]);
  const [counties, setCounties] = useState([]);
  const [subcounties, setSubCounties] = useState([]);
  const [wards, setWards] = useState([]);
  const router = useRouter();

  useEffect(() => {
    requests.get("Auth/" + user?.user?.email).then((res) => {
      setInputs(res);
    });
    requests.get("Regions/regions").then((res) => {
        setRegions(res);
      });
  }, [user?.user?.email]);
const handleRegionChange =(e,action)=>{
    e.persist();
    const target = e.target;
    requests.get("Regions/county/"+target?.value).then((res) => {
        setCounties(res);
      });
      setInputs((inputs) => ({ ...inputs, nextOfKin:{...inputs.nextOfKin,region: target?.value }}));
}
const handleCountyChange =(e)=>{
    e.persist();
    const target = e.target;
    requests.get("Regions/subcounty/"+target?.value).then((res) => {
        setSubCounties(res);
      });
      setInputs((inputs) => ({ ...inputs, nextOfKin:{...inputs.nextOfKin,county: target?.value }}));
}
const handleSUbCountyChange =(e)=>{
    e.persist();
    const target = e.target;
    console.log(target)
    requests.get("Regions/ward/"+target?.value).then((res) => {
        setWards(res);
      });
      setInputs((inputs) => ({ ...inputs, nextOfKin:{...inputs.nextOfKin,subCounty: target?.value }}));
}
const handleWardChange =(e)=>{
    e.persist();
    const target = e.target;   
      setInputs((inputs) => ({ ...inputs, nextOfKin:{...inputs.nextOfKin,ward: target?.value }}));
}
  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, nextOfKin:{...inputs.nextOfKin,[name]: value }}));
  };
 
  const handleUpdate = (e) => {
    e.preventDefault();
    requests.put("Auth/"+ + user?.user?.email, input).then((res) => {
      router.push("/");
    });
  };
  return (
    <FormLayout Page="Next Of Kin">
      <form className="form-horizontal"  onSubmit={(e)=>handleUpdate(e)} role="form">
      <div className="mb-2 row">
          <label className="col-md-2 col-form-label" >
            Full Name
          </label>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              name="fullname"
              defaultValue={input?.nextOfKin?.fullname}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-2 row">
          <label className="col-md-2 col-form-label">
            ID Number
          </label>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="ID Number"
              name="idno"
              defaultValue={input?.nextOfKin?.idno}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-2 row">
          <label className="col-md-2 col-form-label">
          Relationship
          </label>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="Relationship"
              name="relationShip"
              defaultValue={input?.nextOfKin?.relationShip}
              onChange={handleInputChange}
            />
          </div>
        </div>
      <div className="mb-2 row">
          <label className="col-md-2 col-form-label">
          Bank Name
          </label>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="Bank name"
              name="bankName"
              defaultValue={input?.nextOfKin?.bankName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-2 row">
          <label className="col-md-2 col-form-label" >
          Bank Branch
          </label>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="Bank Branch"
              name="bankBranch"
              defaultValue={input?.nextOfKin?.bankBranch}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-2 row">
          <label className="col-md-2 col-form-label">
          Bank Account No
          </label>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="bank account no"
              name="bankAccountNo"
              defaultValue={input?.nextOfKin?.bankAccountNo}
              onChange={handleInputChange}
            />
          </div>
        </div>
      
        <div className="mb-2 row">
          <label className="col-md-2 col-form-label" >
          Payment Method
          </label>
          <div className="col-md-10">
            <select
              defaultValue={input?.nextOfKin?.paymentMethod}
              onChange={(e)=>setInputs((inputs) => ({ ...inputs, nextOfKin:{...inputs.nextOfKin,paymentMethod: e?.target?.value }}))}
              className="form-control"
            >
              <option>Mpesa</option>
              <option>Cash</option>
              <option>Visa</option>
              <option>MasterCard</option>
            </select>
            
          </div>
          </div>
        <div className="mb-2 row">
          <label className="col-md-2 col-form-label" >
          Region
          </label>
          <div className="col-md-10">
            <select
              value={input?.farmerLocation?.region}
              onChange={handleRegionChange}
              className="form-control"
            >
                {regions?.map((item,index)=>(
                    <option key={index}>{item}</option> 
                ))}
             
            </select>           
          </div>
        </div>
        <div className="mb-2 row">
          <label className="col-md-2 col-form-label" >
          County
          </label>
          <div className="col-md-10">
            <select
              value={input?.farmerLocation?.county}
              onChange={handleCountyChange}
              className="form-control"
            >
              {counties?.map((item,index)=>(
                    <option key={index}>{item}</option> 
                ))}
            </select>           
          </div>
        </div>
        <div className="mb-2 row">
          <label className="col-md-2 col-form-label" >
          Sub County
          </label>
          <div className="col-md-10">
            <select
              value={input?.farmerLocation?.subCounty}
              onChange={handleSUbCountyChange}
              className="form-control"
            >
               {subcounties?.map((item,index)=>(
                    <option key={index}>{item}</option> 
                ))}
            </select>           
          </div>
        </div>
        <div className="mb-2 row">
          <label className="col-md-2 col-form-label">
          Ward
          </label>
          <div className="col-md-10">
            <select
              value={input?.farmerLocation?.ward}
              onChange={handleWardChange}
              className="form-control"
            >
              {wards?.map((item,index)=>(
                    <option key={index}>{item}</option> 
                ))}
            </select>           
          </div>
        </div>       
        <div className="d-grid text-center">
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </div>
      </form>
    </FormLayout>
  );
};

export default NextOfKin;
