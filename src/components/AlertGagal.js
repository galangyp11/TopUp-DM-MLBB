import { useEffect } from "react";
import "./Alert.css";

const AlertGagal = ({ isiAlert, setIsAlert }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsAlert(false);
    }, 1000);
  }, []);

  return (
    <div className="mb-3">
      <div className="alert-gagal">
        <p className="text-alert d-flex align-items-center justify-content-center m-n2">
          {isiAlert}
        </p>
      </div>
    </div>
  );
};

export default AlertGagal;
