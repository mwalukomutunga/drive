import { useEffect,useState } from "react";
import ContentDetail from "../components/ContentDetail";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import requests from '../agent'

const Home = () => {
  const [data, useInputs] = useState({});
  const router = useRouter();
  const user = useSelector((state) => state.user);


  
  useEffect(() => {
    if (user && user.isLogged && user.isLogged === true) {
    } else {
      router.push("/login");
    }
    requests.get("Auth/" + user?.user?.email).then((res) => {
      useInputs(res);
    });
  }, [user,router]);
  
  return <ContentDetail data={data} />;
};

export default Home;
