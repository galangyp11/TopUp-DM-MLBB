import { useEffect } from "react";
import "./AlertGagal.css";

const AlertGagal = ({ isiAlert, setIsAlert }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsAlert(false);
    }, 1000);
  }, []);

  return (
    <div className="border">
      <div className="alert">
        <p className="text-alert fw-light d-flex align-items-center justify-content-center m-n2">
          {isiAlert}
        </p>
      </div>
    </div>
  );
};

export default AlertGagal;
