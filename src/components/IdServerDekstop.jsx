import "./CardContent.css";
import ml from "./img/ml.png";
import i from "./img/i.png";

const IdServer = ({ dataUser, setDataUser }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setDataUser((data) => ({
      ...data,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="card-content p-4" id="IdServer">
      <div className="row">
        <div className="col ">
          <p className="fs-3 ">Mobile Legends</p>
        </div>
      </div>

      <div className="row">
        <div className="col-1 d-flex justify-content-end">
          <p className="my-1">ID</p>
        </div>
        <div className="col-4">
          <input
            type="number"
            className="input my-1"
            id="idUser"
            value={dataUser.idUser}
            onChange={handleChange}
          />
        </div>
        <div className="col-2 d-flex justify-content-end">
          <p className="my-1">Server</p>
        </div>
        <div className="col-3">
          <input
            type="number"
            className="input my-1"
            id="serverUser"
            value={dataUser.serverUser}
            onChange={handleChange}
          />
        </div>
        <div className="col-2 ">
          <img
            src={i}
            alt="informasi klo gatau"
            className="my-1"
            style={{ width: "27px", cursor: "pointer" }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col ">
          <p className="fw-light pt-3" id="info">
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
