import "./CardContent.css";

const Notelp = ({ dataUser, setDataUser, isDark }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setDataUser((data) => ({
      ...data,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div
      className="card-content p-4 "
      id="Email"
      style={
        isDark ? { backgroundColor: "#222831" } : { backgroundColor: "#ffffff" }
      }
    >
      <div className="row mt-n2">
        <p style={isDark ? { color: "#F6C90E" } : { color: "#000000" }}>
          Email
        </p>
      </div>

      <div className="row ">
        <input
          type="text"
          className="input my-n2"
          id="email"
          placeholder="xxxx@gmail.com"
          required
          value={dataUser.email}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <p
          className="fw-light pt-3"
          id="info"
          style={isDark ? { color: "#eeeeee" } : { color: "#000000" }}
        >
          Bukti pembayaran atas pembelian anda akan kami kirimkan ke Email anda.
          Pastikan email anda benar.
        </p>
      </div>
    </div>
  );
};

export default Notelp;
