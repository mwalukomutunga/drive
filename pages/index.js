// import { useEffect,useState } from "react";
// import ContentDetail from "../components/ContentDetail";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
// import requests from '../agent'

// const Home = () => {
//   const [data, useInputs] = useState({});
//   const router = useRouter();
//   const user = useSelector((state) => state.user);

//   useEffect(() => {
//     if (user && user.isLogged && user.isLogged === true) {
//     } else {
//       router.push("/login");
//     }
//     requests.get("Auth/" + user?.user?.email).then((res) => {
//       useInputs(res);
//     });
//   }, [user,router]);

//   return <ContentDetail data={data} />;
// };

// export default Home;
import { useEffect, useState } from "react";
import Chart, {
  ArgumentAxis,
  CommonSeriesSettings,
  Legend,
  Series,
  AdaptiveLayout,
  Tooltip,
  ValueAxis,
  ConstantLine,
  Label,
} from "devextreme-react/chart";
import PieChart, { Connector, Size, Export } from "devextreme-react/pie-chart";
import requests from "../agent";
const page = "/Registrations/county/";
const Home = () => {
  const [data, setData] = useState([]);
  const [age, setAge] = useState([]);
  const [gender, setGender] = useState([]);
  const router = useRouter();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user && user.isLogged && user.isLogged === true) {
    } else {
      router.push("/login");
    }
    requests.get(page).then((response) => {
      setData(response);
    });
    requests.get("/Registrations/age").then((response) => {
      setAge(response);
    });
    requests.get("/Registrations/gender").then((response) => {
      setGender(response);
    });
  }, []);

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body">
            <h4 className="header-title mb-3"> Dashboard </h4>
            <div className="row">
              <div className="col-xl-6">
                <Chart
                  height="auto"
                  title="Registered by Village"
                  dataSource={data}
                  id="chart"
                >
                  <AdaptiveLayout />
                  <Series type="bar" />

                  <Legend visible={false} />
                </Chart>
              </div>
              <div className="col-xl-6">
                <Chart
                  height="auto"
                  title="Registered by Age"
                  dataSource={age}
                  id="chart"
                >
                  <AdaptiveLayout />
                  <Series type="bar" />

                  <Legend visible={false} />
                </Chart>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <PieChart
                  id="pie"
                  dataSource={gender}
                  palette="Bright"
                  title="Registered by Gender"
                >
                  <Series argumentField="arg" valueField="val">
                    <Label visible={true}>
                      <Connector visible={true} width={1} />
                    </Label>
                  </Series>

                  <Size width={500} />
                  <Export enabled={true} />
                </PieChart>
              </div>
              <div className="col-xl-6">
                <Chart
                  height="auto"
                  title="Registered by Gender"
                  dataSource={gender}
                  id="chart"
                >
                  <AdaptiveLayout />
                  <Series type="bar" />

                  <Legend visible={false} />
                </Chart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function customizePercentageText({ valueText }) {
    return `${valueText}%`;
  }
};

export default Home;
