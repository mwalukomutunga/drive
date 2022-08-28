import { useSelector, useDispatch } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import requests from "../../agent";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import MyDropzone from "../../components/DropZone";

const EditForm = () => {
  const [input, setInputs] = useState({
    fullName: "",
    idNo: "",
    cattle: 0,
    gender: "Male",
    oxen: 0,
    goats: 0,
    sheep: 0,
    camels: 0,
    heifer: 0,
    calfs: 0,
    bankName: "",
    branch: "",
    bankACNo: "",
    mobilePhoneNo: "",
    paymentMode: "",
    county: "",
    subCounty: "",
    ward: "",
    village: "",
    ndviUnit: "",
    nokFullname: "",
    nokRelationship: "",
    nokidno: "",
    nokBankName: "",
    nokBranch: "",
    nokBankACNo: "",
    nokMobilePhoneNo: "",
    nokPaymentMethod: "",
    nokWard: "",
    nokVillage: "",
    nokGender: "Male",
    goatInsured: 0,
    oxenInsured: 0,
    cattleInsured: 0,
    camelsInsured: 0,
    calfsInsured: 0,
    sheepInsured: 0,
    user: "",
  });
  const [regions, setRegions] = useState([]);
  const [ndviUnits, setNdviUnits] = useState([{ name: "Bangahiri" },{ name: "Chewani" },{ name: "Galole West" },{ name: "Garseni North" },{ name: "Kipao" },{ name: "Masache" },{ name: "WAMBA WEST" }]);
  const [counties, setCounties] = useState([]);
  const [subcounties, setSubCounties] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [wards, setWards] = useState([]);
  const [idFiles, setIdFiles] = useState({});
  const [passportFile, setPassportFile] = useState({});
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const { id } = router.query

  useEffect(() => {
    if (user && user.isLogged && user.isLogged === true) {
    } else {
      router.push("/login");
    }
    setInputs((inputs) => ({ ...inputs, user: user?.user?.email }));
    requests.get("Registrations/" + id).then((res) => {     
      setInputs({
        ...res,
        user: user?.user?.email,
        username: user?.user?.name,
        idNo: id,
        nokPaymentMethod: "M-pesa",
        gender: "Male",
        nokGender: "Male",
        latitude: latitude?.latitude,
        longitude: longitude?.longitude
      });
    });
    requests.get("Regions/regions").then((res) => {
      setRegions(res);
    });
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude((inputs) => ({
        ...inputs,
        latitude: position.coords.latitude,
      }));
      setLongitude((inputs) => ({
        ...inputs,
        longitude: position.coords.longitude,
      }));
    });
  }, [user?.user?.email, user]);

  const handleIdChange = (e) => {
   
  };

  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleIbliChange = (event) => {
    event.persist();
    const target = event.target;
    setInputs((inputs) => ({ ...inputs, ndviUnit: target.value }));
  };
  const handleNOKRegionChange = (e, action) => {
    e.persist();
    const target = e.target;
    requests.get("Regions/county/" + target?.value).then((res) => {
      setCounties(res);
    });
    setInputs((inputs) => ({
      ...inputs,
      nokRegion: target?.value,
    }));
  };

  const handleNOKCountyChange = (e) => {
    e.persist();
    const target = e.target;
    requests.get("Regions/subcounty/" + target?.value).then((res) => {
      setSubCounties(res);
    });
    setInputs((inputs) => ({
      ...inputs,
      nokCounty: target?.value,
    }));
  };

  const handleNOKSUbCountyChange = (e) => {
    e.persist();
    const target = e.target;
    console.log(target);
    requests.get("Regions/ward/" + target?.value).then((res) => {
      setWards(res);
    });
    setInputs((inputs) => ({
      ...inputs,
      nokSubCounty: target?.value,
    }));
  };

  const handleNOKWardChange = (e) => {
    e.persist();
    const target = e.target;
    setInputs((inputs) => ({
      ...inputs,
      nokWard: target?.value,
    }));
  };

  const handleRegionChange = (e, action) => {
    e.persist();
    const target = e.target;
    requests.get("Regions/county/" + target?.value).then((res) => {
      setCounties(res);
    });
    setInputs((inputs) => ({
      ...inputs,
      region: target?.value,
    }));
  };

  const handleCountyChange = (e) => {
    e.persist();
    const target = e.target;
    requests.get("Regions/subcounty/" + target?.value).then((res) => {
      setSubCounties(res);
    });
    setInputs((inputs) => ({
      ...inputs,
      county: target?.value,
    }));
  };

  const handleSUbCountyChange = (e) => {
    e.persist();
    const target = e.target;
    requests.get("Regions/ward/" + target?.value).then((res) => {
      setWards(res);
    });
    setInputs((inputs) => ({
      ...inputs,
      subCounty: target?.value,
    }));
  };

  const handleWardChange = (e) => {
    e.persist();
    const target = e.target;
    setInputs((inputs) => ({
      ...inputs,
      ward: target?.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   //  handleUpLoad();
    // console.log(input);
    requests.post("/Registrations/", input).then((res) => {
      // console.log(res);
      router.push('/champions')
    });
  };

  // const [files, setFiles] = useState([]);
  // const onDrop = useCallback((acceptedFiles) => {
  //   setFiles(acceptedFiles);
  // }, []);
  // const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
  //   useDropzone({
  //     maxFiles: 10,
  //     onDrop,
  //     accept: {
  //       "image/*": [".jpeg", ".jpg", ".gif", ".png"],
  //     },
  //   });

  const handleUpLoad = () => {
    console.log(idFiles);
    console.log(passportFile);
    const formData = new FormData();
    formData.append("files", idFiles?.file);
    requests.post("/uploads/" + user?.user?.email, formData).then((res) => {
      setInputs((inputs) => ({
        ...inputs,
        idpath: res,
      }));
    });

    const formData1 = new FormData();
    formData1.append("files", passportFile?.file);
    requests.post("/uploads/" + user?.user?.email, formData1).then((res) => {
      setInputs((inputs) => ({
        ...inputs,
        passportPath: res,
      }));
    });
  };

  // const acceptedFileItems = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  // const fileRejectionItems = fileRejections.map(({ file, errors }) => {
  //   return (
  //     <li key={file.path}>
  //       {file.path} - {file.size} bytes
  //       <ul>
  //         {errors.map((e) => (
  //           <li key={e.code}>{e.message}</li>
  //         ))}
  //       </ul>
  //     </li>
  //   );
  // });
  return (
    <>
      {/* <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></Script> */}
      <Script src="/assets/libs/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js"></Script>
      <Script src="/assets/js/pages/form-wizard.init.js"></Script>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title mb-3"> Pastoralist Registration</h4>
              <form onSubmit={(e) => handleSubmit(e)} noValidate>
                <div id="basicwizard">
                  <ul className="nav nav-pills nav-justified form-wizard-header mb-4">
                    <li className="nav-item ">
                      <a
                        href="#basictab1"
                        data-bs-toggle="tab"
                        data-toggle="tab"
                        className="nav-link"
                      >
                        <span className="number">1</span>
                        <span className="d-none d-sm-inline">User info</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab2"
                        data-bs-toggle="tab"
                        data-toggle="tab"
                        className="nav-link"
                      >
                        <span className="number">2</span>
                        <span className="d-none d-sm-inline">Payment info</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab3"
                        data-bs-toggle="tab"
                        data-toggle="tab"
                        className="nav-link"
                      >
                        <span className="number">3</span>
                        <span className="d-none d-sm-inline">Location</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab4"
                        data-bs-toggle="tab"
                        data-toggle="tab"
                        className="nav-link"
                      >
                        <span className="number">4</span>
                        <span className="d-none d-sm-inline">Livestock</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab5"
                        data-bs-toggle="tab"
                        data-toggle="tab"
                        className="nav-link"
                      >
                        <span className="number">5</span>
                        <span className="d-none d-sm-inline">Next of kin</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab6"
                        data-bs-toggle="tab"
                        data-toggle="tab"
                        className="nav-link"
                      >
                        <span className="number">6</span>
                        <span className="d-none d-sm-inline">Uploads</span>
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content b-0 mb-0">
                    <div className="tab-pane" id="basictab1">
                      <div className="row">
                        <div className="col-9">
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              ID Number
                            </label>
                            <div className="col-md-10">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="ID Number"
                                required
                                name="idNo"
                                defaultValue={input?.idNo}
                                onChange={handleIdChange}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Full Name
                            </label>
                            <div className="col-md-10">
                              <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="Full name"
                                name="fullName"
                                defaultValue={input?.fullName}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Age
                            </label>
                            <div className="col-md-10">
                              <input
                                type="number"
                                className="form-control"
                                required
                                placeholder="Age"
                                name="age"
                                defaultValue={input?.age}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Mobile Number
                            </label>
                            <div className="col-md-10">
                              <input
                                type="text"
                                className="form-control"
                                required
                                placeholder="Mobile Number"
                                name="mobilePhoneNo"
                                defaultValue={input?.mobilePhoneNo}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Household size
                            </label>
                            <div className="col-md-10">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Household size"
                                required
                                name="houseHoldSize"
                                defaultValue={input?.houseHoldSize}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Gender
                            </label>
                            <div className="col-md-10">
                              <select
                                defaultValue={input?.gender}
                                onChange={(e) =>
                                  setInputs((inputs) => ({
                                    ...inputs,
                                    gender: e.target.value,
                                  }))
                                }
                                className="form-control"
                              >
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul className="pager wizard mb-0 list-inline text-end mt-2">
                        <li className="next list-inline-item">
                          <button type="button" className="btn btn-success">
                            Add More Info
                            <i className="mdi mdi-arrow-right ms-1"></i>
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-pane" id="basictab2">
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-2 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="example-placeholder"
                            >
                              Bank Name
                            </label>
                            <div className="col-md-10">
                              <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="Bank name"
                                name="bankName"
                                defaultValue={input?.bankName}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="example-placeholder"
                            >
                              Bank Branch
                            </label>
                            <div className="col-md-10">
                              <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="Bank Branch"
                                name="branch"
                                defaultValue={input?.branch}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="example-placeholder"
                            >
                              Account name
                            </label>
                            <div className="col-md-10">
                              <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="Account name"
                                name="accountName"
                                defaultValue={input?.accountName}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="example-placeholder"
                            >
                              Bank Account No
                            </label>
                            <div className="col-md-10">
                              <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="bank account no"
                                name="bankACNo"
                                defaultValue={input?.bankACNo}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="example-placeholder"
                            >
                              Mpesa number
                            </label>
                            <div className="col-md-10">
                              <input
                                type="text"
                                required
                                className="form-control"
                                placeholder=" Mpesa number"
                                name="mpesaNumber"
                                defaultValue={input?.mpesaNumber}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          <div className="mb-2 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="example-placeholder"
                            >
                              Preferred payout method
                            </label>
                            <div className="col-md-10">
                              <select
                                defaultValue={input?.paymentMode}
                                onChange={handleInputChange}
                                className="form-control"
                              >
                                <option>Mpesa</option>
                                <option>Bank</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="pager wizard mb-0 list-inline mt-2">
                        <li className="previous list-inline-item">
                          <button type="button" className="btn btn-light">
                            <i className="mdi mdi-arrow-left me-1"></i> Previous
                          </button>
                        </li>
                        <li className="next list-inline-item float-end">
                          <button type="button" className="btn btn-success">
                            Add More Info
                            <i className="mdi mdi-arrow-right ms-1"></i>
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-pane" id="basictab3">
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Region
                            </label>
                            <div className="col-md-10">
                              <select
                                value={input?.region}
                                onChange={handleRegionChange}
                                className="form-control"
                              >
                                {regions?.map((item, index) => (
                                  <option key={index}>{item}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              County
                            </label>
                            <div className="col-md-10">
                              <select
                                value={input?.county}
                                onChange={handleCountyChange}
                                className="form-control"
                              >
                                {counties?.map((item, index) => (
                                  <option key={index}>{item}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Sub County
                            </label>
                            <div className="col-md-10">
                              <select
                                value={input?.subCounty}
                                onChange={handleSUbCountyChange}
                                className="form-control"
                              >
                                {subcounties?.map((item, index) => (
                                  <option key={index}>{item}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                            NDVI unit
                            </label>
                            <div className="col-md-10">
                              <select
                                value={input?.ndviUnit}
                                onChange={handleIbliChange}
                                className="form-control"
                              >
                                {ndviUnits?.map((item, index) => (
                                  <option key={index}>{item?.name}</option>
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
                                value={input?.ward}
                                onChange={handleWardChange}
                                className="form-control"
                              >
                                {wards?.map((item, index) => (
                                  <option key={index}>{item}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Village
                            </label>
                            <div className="col-md-10">
                              <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="Village"
                                name="village"
                                defaultValue={input?.village}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="pager wizard mb-0 list-inline mt-2">
                        <li className="previous list-inline-item">
                          <button type="button" className="btn btn-light">
                            <i className="mdi mdi-arrow-left me-1"></i> Previous
                          </button>
                        </li>
                        <li className="next list-inline-item float-end">
                          <button type="button" className="btn btn-success">
                            Add More Info
                            <i className="mdi mdi-arrow-right ms-1"></i>
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-pane" id="basictab4">
                      <div className="row">
                        <div className="col-sm">
                          {/* ------------------------------------- */}
                          <div className="col-12 card">
                            <div className="card-body">
                              <h5 className="card-title">Goats</h5>
                              <div className="mb-2">
                                <div className="col-md-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="total"
                                    name="goats"
                                    required
                                    // defaultValue={input?.goats}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="mb-2">
                                <div className="col-md-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Insured"
                                    name="goatInsured"
                                    required=""
                                    // defaultValue={input?.goatInsured}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* .................................................... */}
                        </div>
                        <div className="col-sm">
                          {/* ------------------------------------- */}
                          <div className="col-12 card">
                            <div className="card-body">
                              <h5 className="card-title">Cows</h5>
                              <div className="mb-2">
                                <div className="col-md-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="total"
                                    name="cattle"
                                    required
                                    // defaultValue={input?.cattle}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="mb-2 row">
                                <div className="col-md-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Insured"
                                    name="cattleInsured"
                                    required
                                    // defaultValue={input?.cattleInsured}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* .................................................... */}
                        </div>
                        <div className="col-sm">
                          {/* ------------------------------------- */}
                          <div className="col-12 card">
                            <div className="card-body">
                              <h5 className="card-title">Camels</h5>
                              <div className="mb-2 ">
                                <div className="col-md-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="total"
                                    name="camels"
                                    required
                                    // defaultValue={input?.camels}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="mb-2 row">
                                <div className="col-md-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Insured"
                                    name="camelsInsured"
                                    required
                                    // defaultValue={input?.camelsInsured}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* .................................................... */}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm">
                          <div className="col-12 card">
                            <div className="card-body">
                              <h5 className="card-title">Calfs</h5>
                              <div className="mb-2">
                                <div className="col-md-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="total"
                                    name="calfs"
                                    required
                                    // defaultValue={input?.calfs}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="mb-2 row">
                                <div className="col-md-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Insured"
                                    name="calfsInsured"
                                    required
                                    // defaultValue={input?.calfsInsured}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* .................................................... */}
                        {/* ------------------------------------- */}
                        {/* <div className="col-3 card">                         
                          <div className="card-body">
                          <h5 className="card-title">Heifer</h5>
                          <div className="mb-2 row ">                            
                            <div className="col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="total"
                                name="heifer"
                                required
                                defaultValue={input?.heifer}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">                            
                            <div className="col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Insured"
                                name="number"
                                required
                                defaultValue={input?.number}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          </div>
                        </div> */}
                        {/* .................................................... */}
                        {/* ------------------------------------- */}
                        <div className="col-sm">
                          <div className="col-12 card ml-4">
                            <div className="card-body">
                              <h5 className="card-title">Oxen</h5>
                              <div className="mb-2">
                                <div className="col-md-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="total"
                                    name="oxen"
                                    required
                                    // defaultValue={input?.oxen}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="mb-2 row">
                                <div className="col-md-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Insured"
                                    name="oxenInsured"
                                    required
                                    // defaultValue={input?.oxenInsured}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* .................................................... */}
                        {/* ------------------------------------- */}
                        <div className="col-sm">
                          <div className="col-12 card ml-1">
                            <div className="card-body">
                              <h5 className="card-title">Sheep</h5>
                              <div className="mb-2">
                                <div className="col-md-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="total"
                                    name="number"
                                    required
                                    // defaultValue={input?.sheep}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="mb-2 row">
                                <div className="col-md-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Insured"
                                    name="sheepInsured"
                                    required
                                    // defaultValue={input?.sheepInsured}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* .................................................... */}
                      </div>
                      <ul className="pager wizard mb-0 list-inline mt-2">
                        <li className="previous list-inline-item">
                          <button type="button" className="btn btn-light">
                            <i className="mdi mdi-arrow-left me-1"></i> Previous
                          </button>
                        </li>
                        <li className="next list-inline-item float-end">
                          <button type="button" className="btn btn-success">
                            Add More Info
                            <i className="mdi mdi-arrow-right ms-1"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane" id="basictab5">
                      <div className="row">
                        <div className="col-sm">
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Full Name
                            </label>
                            <div className="col-md-10">
                              <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="Full name"
                                name="nokFullname"
                                defaultValue={input?.nokFullname}
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
                                type="number"
                                className="form-control"
                                placeholder="ID Number"
                                name="nokidno"
                                defaultValue={input?.nokidno}
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
                                name="nokBankName"
                                defaultValue={input?.nokBankName}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Bank Branch
                            </label>
                            <div className="col-md-10">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Bank Branch"
                                name="nokBranch"
                                defaultValue={input?.nokBranch}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="example-placeholder"
                            >
                              Account name
                            </label>
                            <div className="col-md-10">
                              <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="Account name"
                                name="nokAccountName"
                                defaultValue={input?.nokAccountName}
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
                                name="nokBankACNo"
                                defaultValue={input?.nokBankACNo}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          <div className="mb-2 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="example-placeholder"
                            >
                              Mpesa number
                            </label>
                            <div className="col-md-10">
                              <input
                                type="text"
                                required
                                className="form-control"
                                placeholder=" Mpesa number"
                                name="nokMpesaNumber"
                                defaultValue={input?.nokMpesaNumber}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          {/* <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Preffered payout method
                            </label>
                            <div className="col-md-10">
                              <select
                                defaultValue={input?.nokPaymentMethod}
                                onChange={(e) =>
                                  setInputs((inputs) => ({
                                    ...inputs,
                                    nokPaymentMethod: e?.target?.value,
                                  }))
                                }
                                className="form-control"
                              >
                                <option>Mpesa</option>
                                <option>Bank</option>
                              </select>
                            </div>
                          </div> */}
                        </div>
                        <div className="col-sm">
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Relationship
                            </label>
                            <div className="col-md-10">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Relationship"
                                required
                                name="nokRelationship"
                                defaultValue={input?.nokRelationship}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Region
                            </label>
                            <div className="col-md-10">
                              <select
                                value={input?.nokRegion}
                                onChange={handleNOKRegionChange}
                                className="form-control"
                              >
                                {regions?.map((item, index) => (
                                  <option key={index}>{item}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              County
                            </label>
                            <div className="col-md-10">
                              <select
                                value={input?.nokCounty}
                                onChange={handleNOKCountyChange}
                                className="form-control"
                              >
                                {counties?.map((item, index) => (
                                  <option key={index}>{item}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Sub County
                            </label>
                            <div className="col-md-10">
                              <select
                                value={input?.nokSubCounty}
                                onChange={handleNOKSUbCountyChange}
                                className="form-control"
                              >
                                {subcounties?.map((item, index) => (
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
                                value={input?.nokWard}
                                onChange={handleNOKWardChange}
                                className="form-control"
                              >
                                {wards?.map((item, index) => (
                                  <option key={index}>{item}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label className="col-md-2 col-form-label">
                              Village
                            </label>
                            <div className="col-md-10">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Village"
                                name="nokVillage"
                                required
                                defaultValue={input?.nokVillage}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="pager wizard mb-0 list-inline mt-2">
                        <li className="previous list-inline-item">
                          <button type="button" className="btn btn-light">
                            <i className="mdi mdi-arrow-left me-1"></i> Previous
                          </button>
                        </li>
                        <li className="next list-inline-item float-end">
                          <button type="button" className="btn btn-success">
                            Add More Info
                            <i className="mdi mdi-arrow-right ms-1"></i>
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-pane" id="basictab6">
                      <div className="row">
                        <MyDropzone
                          text="ID card"
                          name="idpath"
                          setInputs={setIdFiles}
                        />
                        <MyDropzone
                          text="next of kin ID"
                          name="passportPath"
                          setInputs={setPassportFile}
                        />
                        {/* <section> */}

                        {/* <aside>
                              <h4>Accepted files</h4>
                              <ul>{acceptedFileItems}</ul>
                              <h4>Rejected files</h4>
                              <ul>{fileRejectionItems}</ul>
                            </aside>
                          </section> */}
                        {/* <div className="d-grid text-center">
                            <button
                              onClick={() => handleUpLoad()}
                              className="btn btn-primary"
                            >
                              upload
                            </button>
                          </div> */}
                      </div>
                      <ul className="pager wizard mb-0 list-inline mt-2">
                        <li className="previous list-inline-item">
                          <button type="button" className="btn btn-light">
                            <i className="mdi mdi-arrow-left me-1"></i> Previous
                          </button>
                        </li>
                        <li className="list-inline-item float-end">
                          <button type="Submit" className="btn btn-primary">
                            Submit
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditForm;
