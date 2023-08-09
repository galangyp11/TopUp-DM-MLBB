import "./CardContent.css";

const Diamonds = ({ dataUser, setDataUser }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setDataUser((dataDiamond) => ({
      ...dataDiamond,
      [e.target.name]: e.target.value,
    }));
  };

  //   console.log({ dataUser });

  return (
    <div className="card-content pr-4 pl-4 pb-4 pt-3" id="Diamonds">
      <div className="row">
        <div className="col mt-n3">
          <input
            type="radio"
            id="5dm"
            value="5"
            name="jumlahDiamond"
            onChange={handleChange}
            checked={dataUser.jumlahDiamond === "5"}
          />
          <label
            className="card-diamond d-flex align-items-center justify-content-center"
            htmlFor="5dm"
          >
            5 Diamond
          </label>
        </div>

        <div className="col mt-n3">
          <input
            type="radio"
            id="11dm"
            value="11"
            name="jumlahDiamond"
            onChange={handleChange}
            checked={dataUser.jumlahDiamond === "11"}
          />
          <label
            className="card-diamond d-flex align-items-center justify-content-center"
            htmlFor="11dm"
          >
            11 Diamond
          </label>
        </div>
      </div>

      <div className="row">
        <div className="col mt-n3">
          <input
            type="radio"
            id="27dm"
            value="27"
            name="jumlahDiamond"
            onChange={handleChange}
            checked={dataUser.jumlahDiamond === "27"}
          />
          <label
            className="card-diamond d-flex align-items-center justify-content-center"
            htmlFor="27dm"
          >
            27 Diamond
          </label>
        </div>
        <div className="col mt-n3">
          <input
            type="radio"
            id="50dm"
            value="50"
            name="jumlahDiamond"
            onChange={handleChange}
            checked={dataUser.jumlahDiamond === "50"}
          />
          <label
            className="card-diamond d-flex align-items-center justify-content-center"
            htmlFor="50dm"
          >
            50 Diamond
          </label>
        </div>
      </div>

      <div className="row">
        <div className="col mt-n3">
          <input
            type="radio"
            id="100dm"
            value="100"
            name="jumlahDiamond"
            onChange={handleChange}
            checked={dataUser.jumlahDiamond === "100"}
          />
          <label
            className="card-diamond d-flex align-items-center justify-content-center"
            htmlFor="100dm"
          >
            100 Diamond
          </label>
        </div>

        <div className="col mt-n3">
          <input
            type="radio"
            id="137dm"
            value="137"
            name="jumlahDiamond"
            onChange={handleChange}
            checked={dataUser.jumlahDiamond === "137"}
          />
          <label
            className="card-diamond d-flex align-items-center justify-content-center"
            htmlFor="137dm"
          >
            137 Diamond
          </label>
        </div>
      </div>

      <div className="row">
        <div className="col mt-n3">
          <input
            type="radio"
            id="250dm"
            value="250"
            name="jumlahDiamond"
            onChange={handleChange}
            checked={dataUser.jumlahDiamond === "250"}
          />
          <label
            className="card-diamond d-flex align-items-center justify-content-center"
            htmlFor="250dm"
          >
            250 Diamond
          </label>
        </div>

        <div className="col mt-n3">
          <input
            type="radio"
            id="1000dm"
            value="1000"
            name="jumlahDiamond"
            onChange={handleChange}
            checked={dataUser.jumlahDiamond === "1000"}
          />
          <label
            className="card-diamond d-flex align-items-center justify-content-center"
            htmlFor="1000dm"
          >
            1000 Diamond
          </label>
        </div>
      </div>
    </div>
  );
};

export default Diamonds;
