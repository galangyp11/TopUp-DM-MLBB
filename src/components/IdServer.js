import "./CardContent.css";
import ml from "./img/ml.png";
import i from "./img/i.png";
import { IoIosInformationCircle } from "react-icons/io";

const IdServer = ({ dataUser, setDataUser, isDark }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setDataUser((data) => ({
      ...data,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div
      className="card-content p-4"
      id="IdServer"
      style={
        isDark ? { backgroundColor: "#222831" } : { backgroundColor: "#ffffff" }
      }
    >
      <div className="row">
        <div className="col-4 ">
          <img src={ml} alt="ml" />
        </div>
        <div className="col ">
          <p
            className="fs-3 "
            style={isDark ? { color: "#F6C90E" } : { color: "#000000" }}
          >
            Mobile Legends
          </p>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col">
          <p
            className="my-1"
            style={isDark ? { color: "#eeeeee" } : { color: "#000000" }}
          >
            ID
          </p>
        </div>
        <div className="col ">
          <p
            className="my-1"
            style={isDark ? { color: "#eeeeee" } : { color: "#000000" }}
          >
            Server
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input
            type="number"
            className="input my-n5 px-2"
            id="idUser"
            value={dataUser.idUser}
            onChange={handleChange}
          />
        </div>
        <div className="col-4 ">
          <input
            type="number"
            className="input my-n5 px-2"
            id="serverUser"
            value={dataUser.serverUser}
            onChange={handleChange}
          />
        </div>
        <div className="col-2 ">
          <IoIosInformationCircle
            size={33}
            color={isDark ? "#F6C90E" : "#609966"}
          />
        </div>
      </div>

      <div className="row">
        <div className="col ">
          <p
            className="fw-light pt-3"
            id="info"
            style={isDark ? { color: "#eeeeee" } : { color: "#000000" }}
          >
            Untuk mengetahui User ID Anda, silakan klik menu profile dibagian
            kiri atas pada menu utama game. User ID akan terlihat dibagian bawah
            Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk
            menyelesaikan transaksi. Contoh : 12345678(1234).
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdServer;
