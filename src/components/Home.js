import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import IdServer from "./IdServer";
import IdServerDekstop from "./IdServerDekstop";
import Diamonds from "./Diamonds";
import Pembayaran from "./Pembayaran";
import Notelp from "./EmailBukti";
import CheckoutWA from "./BuktiKeWA";
import KonfirmasiBayar from "./KonfirmasiBayar";
import AlertGagal from "./AlertGagal";
import ml from "./img/ml.png";

import { FaMoon, FaSun } from "react-icons/fa";

import "./ButtonBayar.css";

const Home = ({
  isKonfirmasi,
  setIsKonfirmasi,
  isShow,
  setIsShow,
  dataUser,
  setDataUser,
}) => {
  const [isiAlert, setIsiAlert] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [idServerLayar, setIdServerLayar] = useState();
  const isDekstop = useMediaQuery({ query: "(min-width: 576px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  useEffect(() => {
    if (dataUser.jumlahDiamond === "5") {
      setDataUser((dataHarga) => ({
        ...dataHarga,
        harga: "Rp. 6.000",
      }));
    } else if (dataUser.jumlahDiamond === "11") {
      setDataUser((dataHarga) => ({
        ...dataHarga,
        harga: "Rp. 12.000",
      }));
    } else if (dataUser.jumlahDiamond === "27") {
      setDataUser((dataHarga) => ({
        ...dataHarga,
        harga: "Rp. 20.000",
      }));
    } else if (dataUser.jumlahDiamond === "50") {
      setDataUser((dataHarga) => ({
        ...dataHarga,
        harga: "Rp. 35.000",
      }));
    } else if (dataUser.jumlahDiamond === "100") {
      setDataUser((dataHarga) => ({
        ...dataHarga,
        harga: "Rp. 67.000",
      }));
    } else if (dataUser.jumlahDiamond === "137") {
      setDataUser((dataHarga) => ({
        ...dataHarga,
        harga: "Rp. 83.000",
      }));
    } else if (dataUser.jumlahDiamond === "250") {
      setDataUser((dataHarga) => ({
        ...dataHarga,
        harga: "Rp. 119.000",
      }));
    } else if (dataUser.jumlahDiamond === "1000") {
      setDataUser((dataHarga) => ({
        ...dataHarga,
        harga: "Rp. 265.000",
      }));
    } else {
      setDataUser((dataHarga) => ({
        ...dataHarga,
        harga: " ",
      }));
    }
  }, [dataUser.jumlahDiamond]);

  const handleBayar = () => {
    console.log(dataUser);

    if (dataUser.idUser === "Null") {
      setIsAlert(true);
      setIsiAlert("ID tidak ditemukan!");
    } else if (dataUser.serverUser === "Null") {
      setIsAlert(true);
      setIsiAlert("Server tidak ditemukan!");
    } else if (dataUser.jumlahDiamond === "Null") {
      setIsAlert(true);
      setIsiAlert("Silahkan pilih jumlah Diamond");
    } else if (dataUser.pembayaran === "Null") {
      setIsAlert(true);
      setIsiAlert("Silahkan pilih metode pembayaran!");
    } else if (dataUser.noTelp === "Null") {
      setIsAlert(true);
      setIsiAlert("Silahkan isi nomor telepon!");
    } else if (dataUser.email === "") {
      setIsAlert(true);
      setIsiAlert("Silahkan isi email!");
    } else {
      setIsAlert(false);
      setIsShow(true);
    }
  };

  const handleKonfirmasiBatal = () => {
    setIsShow(false);
  };

  const handleKonfirmasiBayar = (e) => {
    e.preventDefault();
    setIsShow(false);
    setIsKonfirmasi(true);
  };

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className=""
      style={
        isDark ? { backgroundColor: "#393E46" } : { backgroundColor: "#EDF1D6" }
      }
    >
      {console.log(isKonfirmasi)}

      <div className="container">
        <div className="row">
          {isMobile && (
            <div className="col-12 col-sm-6 py-2">
              <div className="d-flex justify-content-center">
                <IdServer
                  dataUser={dataUser}
                  setDataUser={setDataUser}
                  isDark={isDark}
                />
              </div>
            </div>
          )}
          {isDekstop && (
            <div className="col-12 col-sm-12 py-2">
              <div className="row d-flex justify-content-center">
                <div className="col-2 d-flex justify-content-end py-2">
                  <img
                    style={{ width: "10em", height: "10em" }}
                    src={ml}
                    alt="ml"
                  />
                </div>
                <div className="col-6 py-2">
                  <div className="d-flex justify-content-center">
                    <IdServerDekstop
                      dataUser={dataUser}
                      setDataUser={setDataUser}
                      isDark={isDark}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="col-12 col-sm-6 offset-sm-4 py-2">
            <div className="d-flex justify-content-center">
              <Diamonds
                dataUser={dataUser}
                setDataUser={setDataUser}
                isDark={isDark}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 offset-sm-4 py-2">
            <div className="d-flex justify-content-center">
              <Pembayaran
                dataUser={dataUser}
                setDataUser={setDataUser}
                isDark={isDark}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 offset-sm-4 py-2">
            <div className="d-flex justify-content-center">
              <Notelp
                dataUser={dataUser}
                setDataUser={setDataUser}
                isDark={isDark}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 py-2 mb-5">
            <div className="d-flex justify-content-center">
              <CheckoutWA dataUser={dataUser} setDataUser={setDataUser} />
            </div>
          </div>
          <div className="">
            <KonfirmasiBayar
              show={isShow}
              handleKonfirmasiBatal={handleKonfirmasiBatal}
              handleKonfirmasiBayar={handleKonfirmasiBayar}
              dataUser={dataUser}
            />
          </div>
          <div className="fixed-bottom d-flex justify-content-center mb-5">
            {isAlert ? (
              <AlertGagal isiAlert={isiAlert} setIsAlert={setIsAlert} />
            ) : (
              <></>
            )}
          </div>

          <div className="col-12 col-sm-6 fixed-bottom">
            {isDark ? (
              <div
                className="theme rounded-circle mb-2 d-flex justify-content-center align-items-center"
                style={{
                  height: "4em",
                  width: "4em",
                  backgroundColor: "#222831",
                  cursor: "pointer",
                }}
                onClick={handleTheme}
              >
                {/* <FaMoon size={"2em"} color="#EEEEEE" /> */}

                <FaSun size={"2em"} color="#EEEEEE" />
              </div>
            ) : (
              <div
                className="theme rounded-circle mb-2 d-flex justify-content-center align-items-center"
                style={{
                  height: "4em",
                  width: "4em",
                  backgroundColor: "#222831",
                  cursor: "pointer",
                }}
                onClick={handleTheme}
              >
                <FaMoon size={"2em"} color="#EEEEEE" />

                {/* <FaSun size={"2em"} color="#EEEEEE" /> */}
              </div>
            )}

            <div
              className="vw-100 d-flex ml-n3 align-items-center justify-content-center"
              style={
                isDark
                  ? {
                      height: "60px",
                      backgroundColor: "#222831", //${isDark ? backgroundColor: "#40513B" : backgroundColor: "#40513B"}
                    }
                  : { height: "60px", backgroundColor: "#40513B" }
              }
            >
              <button
                className="tombol-bayar d-flex align-items-center justify-content-center"
                style={
                  isDark
                    ? { backgroundColor: "#393E46", color: "#F6C90E" }
                    : { backgroundColor: "#609966" }
                }
                onClick={handleBayar}
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
