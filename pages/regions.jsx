import ContentPage from "../components/ContentPage";
import Table from "../components/Table";
import { useEffect,useState } from "react";
import requests from "../agent";

const columns = ["business"];

const Region = () => {

const [data,setData] = useState([]);
  useEffect(()=>{ 
    requests.get("/FSC").then(res =>{
      setData(res)
      alert('fetching')
    });
  },[])
  return (  
    <ContentPage Title ="Regions">   
      <Table columns={columns} rows ={regions}/>
    </ContentPage>
  );
};

export default Region;
const regions =[
    {
      "id": "6242e755226de607c049e3ca",
      "business": "Inputs"
    }
  ]