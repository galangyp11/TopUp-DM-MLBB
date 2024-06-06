import { useEffect, useState } from "react";
import "./Alert.css";

const AlertGagal = ({ isiAlert, setIsAlert, setIsKonfirmasi }) => {
  const [time, setTime] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      setIsAlert(false);
      setIsKonfirmasi(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <div className="mt-5">
      <div className="alert-berhasil">
        <p className="text-alert-berhasil d-flex align-items-center justify-content-center m-n2">
          {isiAlert} ...{time}
        </p>
      </div>
    </div>
  );
};

export default AlertGagal;
