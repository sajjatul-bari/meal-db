import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Nav></Nav>
      {navigation.state === "loading" ? (
        <h1 className="text-2xl text-center font-bold">loading.......</h1>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Home;
