import "./HalamanBayar.css";
import { useState } from "react";
import AlertBerhasil from "./AlertBerhasil";
import emailjs from "@emailjs/browser";

const HalamanBayar = ({ setIsKonfirmasi, dataUser }) => {
  const tanggal = new Date();
  const [isiAlert, setIsiAlert] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  const templateParams = {
    idUser: dataUser.idUser,
    serverUser: dataUser.serverUser,
    nickname: dataUser.nickname,
    jumlahDiamond: dataUser.jumlahDiamond,
    harga: dataUser.harga,
    pembayaran: dataUser.pembayaran,
    emailUser: dataUser.email,
    tanggalBeli: tanggal,
  };

  const handleKembali = () => {
    setIsKonfirmasi(false);
  };

  const handleBayar = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ozotujk",
        "template_fg7kwle",
        templateParams,
        "JJk7fWuFBmuUuR02t"
      )
      .then(
        (result) => {
          setIsAlert(true);
          setIsiAlert("Pembayaran Berhasil!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="halaman-bayar container d-flex justify-content-center align-items-center ">
      <div className="card-bayar">
        <h1>{dataUser.pembayaran}</h1>
        <div className="row mt-3">
          <div className="col-5"> Pembayaran </div>
          <div className="col"> : Mobile Legends </div>
        </div>

        <div className="row ">
          <div className=" col-5"> Server </div>
          <div className=" col"> : {dataUser.serverUser} </div>
        </div>

        <div className="row">
          <div className="col-5"> Id </div>
          <div className="col"> : {dataUser.idUser} </div>
        </div>

        <div className="row">
          <div className="col-5"> Nickname </div>
          <div className="col">
            : {dataUser.nickname.replace(/[""]+/g, " ")}
          </div>
        </div>

        <div className="row">
          <div className="col-5"> Diamond </div>
          <div className="col"> : {dataUser.jumlahDiamond} </div>
        </div>

        <div className="row">
          <div className="col-5"> Harga </div>
          <div className="col"> : {dataUser.harga} </div>
        </div>

        {/* <div className="row mt-5">
          <div className="d-flex justify-content-center align-items-center">
            <button className="tombol-bukti-bayar" onClick={handleBayar}>
              Pura-pura Bayar
            </button>
          </div>
        </div>
        <div className="row mt-1">
          <div className="d-flex justify-content-center align-items-center">
            <button className="tombol-kembali" onClick={handleKembali}>
              Kembali
            </button>
          </div>
        </div> */}
        <div className="d-flex justify-content-center align-items-center">
          {isAlert ? (
            <AlertBerhasil
              isiAlert={isiAlert}
              setIsAlert={setIsAlert}
              setIsKonfirmasi={setIsKonfirmasi}
            />
          ) : (
            <div>
              <div className="row mt-5">
                <div className="d-flex justify-content-center align-items-center">
                  <button className="tombol-bukti-bayar" onClick={handleBayar}>
                    Pura-pura Bayar
                  </button>
                </div>
              </div>
              <div className="row mt-1">
                <div className="d-flex justify-content-center align-items-center">
                  <button className="tombol-kembali" onClick={handleKembali}>
                    Kembali
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HalamanBayar;
