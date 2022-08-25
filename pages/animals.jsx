import FormLayout from "../components/FormLayout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import requests from "../agent";
import { useRouter } from "next/router";

const InsuredAnimal = () => {
  const user = useSelector((state) => state.user);
  const [input, setInputs] = useState({});
  const [animals, setAnimals] = useState({});
  const router = useRouter();

  useEffect(() => {
    requests.get("Auth/" + user?.user?.email).then((res) => {
      setInputs(res);
    });
  }, [user?.user?.email]);
  const handleSelectChange = (e) => {
    setAnimals((inputs) => ({ ...inputs, name: e.target.value }));
  };
  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setAnimals((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    setInputs((inputs) => ({
      ...inputs,
      insured: [...inputs.insured, animals],
    }));
    requests.put("Auth/" + user?.user?.email, {...input, insured: [...input.insured, animals]}).then((res) => {
        router.push("/");
      });   
  };
  return (
    <FormLayout Page="Insured amimals">
      <form
        className="form-horizontal"
        onSubmit={(e) => handleUpdate(e)}
        role="form"
      >
        <div className="mb-2 row">
          <label className="col-md-2 col-form-label" >
            Animal name
          </label>
          <div className="col-md-10">
            <select
              selected={input?.insured?.name}
              onChange={handleSelectChange}
              className="form-control"
            >
              <option>Oxen</option>
              <option>Cows</option>
              <option>Heifer</option>
              <option>Calfs</option>
              <option>Goats</option>
              <option>Sheep</option>
              <option>Camels</option>
            </select>
          </div>
        </div>
        <div className="mb-2 row">
          <label className="col-md-2 col-form-label">
            Animal Count
          </label>
          <div className="col-md-10">
            <input
              type="number"
              className="form-control"
              placeholder="count"
              name="number"
              required
              defaultValue={input?.insured?.number}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="d-grid text-center">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    </FormLayout>
  );
};

export default InsuredAnimal;
