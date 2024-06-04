import "./CardContent.css";

const Diamonds = ({ dataUser, setDataUser, isDark }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setDataUser((dataDiamond) => ({
      ...dataDiamond,
      [e.target.name]: e.target.value,
    }));
  };

  //   console.log({ dataUser });

  return (
    <div
      className="card-content px-4 pb-4 pt-3"
      id="Diamonds"
      style={
        isDark ? { backgroundColor: "#222831" } : { backgroundColor: "#ffffff" }
      }
    >
      <div className="row">
        <div className="col-6 col-sm-4 mt-n3">
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
            style={
              isDark
                ? { backgroundColor: "#393E46", color: "#F6C90E" }
                : { backgroundColor: "#9dc08b" }
            }
          >
            5 Diamond
          </label>
        </div>

        <div className="col-6 col-sm-4 mt-n3">
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
            style={
              isDark
                ? { backgroundColor: "#393E46", color: "#F6C90E" }
                : { backgroundColor: "#9dc08b" }
            }
          >
            11 Diamond
          </label>
        </div>

        <div className="col-6 col-sm-4 mt-n3">
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
            style={
              isDark
                ? { backgroundColor: "#393E46", color: "#F6C90E" }
                : { backgroundColor: "#9dc08b" }
            }
          >
            27 Diamond
          </label>
        </div>
        <div className="col-6 col-sm-4 mt-n3">
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
            style={
              isDark
                ? { backgroundColor: "#393E46", color: "#F6C90E" }
                : { backgroundColor: "#9dc08b" }
            }
          >
            50 Diamond
          </label>
        </div>

        <div className="col-6 col-sm-4 mt-n3">
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
            style={
              isDark
                ? { backgroundColor: "#393E46", color: "#F6C90E" }
                : { backgroundColor: "#9dc08b" }
            }
          >
            100 Diamond
          </label>
        </div>

        <div className="col-6 col-sm-4 mt-n3">
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
            style={
              isDark
                ? { backgroundColor: "#393E46", color: "#F6C90E" }
                : { backgroundColor: "#9dc08b" }
            }
          >
            137 Diamond
          </label>
        </div>

        <div className="col-6 col-sm-4 mt-n3">
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
            style={
              isDark
                ? { backgroundColor: "#393E46", color: "#F6C90E" }
                : { backgroundColor: "#9dc08b" }
            }
          >
            250 Diamond
          </label>
        </div>

        <div className="col-6 col-sm-4 mt-n3">
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
            style={
              isDark
                ? { backgroundColor: "#393E46", color: "#F6C90E" }
                : { backgroundColor: "#9dc08b" }
            }
          >
            1000 Diamond
          </label>
        </div>
      </div>
    </div>
  );
};

export default Diamonds;
