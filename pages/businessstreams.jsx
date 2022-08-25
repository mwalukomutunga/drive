import ContentPage from "../components/ContentPage";

import Table from "../components/Table";
import { useEffect,useState } from "react";
import requests from "../agent";

const columns = ["business"];

const BusinessStreams = () => {

const [data,setData] = useState([]);
  useEffect(()=>{ 
    requests.get("/FSC").then(res =>{
      setData(res)
      alert('fetching')
    });
  },[])
  if (typeof window !== "undefined") return null;
  return (  
    <ContentPage Title ="Business Streams">   
      <Table columns={columns} rows ={businessstreams}/>
    </ContentPage>
  );
};

export default BusinessStreams;
const businessstreams =[
    {
      "id": "6242e755226de607c049e3ca",
      "business": "Inputs"
    }
  ]