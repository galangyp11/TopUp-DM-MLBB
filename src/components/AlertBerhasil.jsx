import { useEffect } from "react";
import "./Alert.css";

const AlertGagal = ({ isiAlert, setIsAlert, setIsKonfirmasi }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsAlert(false);
      setIsKonfirmasi(false);
    }, 5000);
  }, []);

  return (
    <div className="mt-5">
      <div className="alert-berhasil">
        <p className="text-alert-berhasil d-flex align-items-center justify-content-center m-n2">
          {isiAlert}
        </p>
      </div>
    </div>
  );
};

export default AlertGagal;
