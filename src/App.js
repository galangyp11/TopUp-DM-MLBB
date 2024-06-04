import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./components/Home";
import HalamanBayar from "./components/HalamanBayar";

function App() {
  const [isKonfirmasi, setIsKonfirmasi] = useState(false);
  const [dataUser, setDataUser] = useState({
    idUser: "Null",
    serverUser: "Null",
    nickname: "",
    jumlahDiamond: "Null",
    harga: " ",
    pembayaran: "Null",
    email: "",
  });
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    let idServer = dataUser.idUser + dataUser.serverUser;
    const url = `https://v1.apigames.id/merchant/M230314DWWH5029OR/cek-username/mobilelegend?user_id=${idServer}&signature=000a7da84dfbdfc958f3392a6af11ea8`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const datas = await response.json();
        console.log(datas.data.username);
        setDataUser((dataNick) => ({
          ...dataNick,
          nickname: JSON.stringify(datas.data.username),
        }));
      } catch (error) {
        console.log("error bang");
      }
    };

    fetchData();
  }, [isShow]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {isKonfirmasi ? (
              <HalamanBayar
                setIsKonfirmasi={setIsKonfirmasi}
                dataUser={dataUser}
              />
            ) : (
              <Home
                setIsKonfirmasi={setIsKonfirmasi}
                isKonfirmasi={isKonfirmasi}
                isShow={isShow}
                setIsShow={setIsShow}
                dataUser={dataUser}
                setDataUser={setDataUser}
              />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
