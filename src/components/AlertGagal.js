import './AlertGagal.css';

const AlertGagal = ({ isiAlert}) => {

    return ( 
        <div className="border">
           
                <div className="alert" >
                <p className="text-alert fw-light d-flex align-items-center justify-content-center m-n2">{isiAlert}</p>
            </div> 
        </div>
     );
}
 
export default AlertGagal;