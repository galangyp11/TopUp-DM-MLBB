import { Modal } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

import './ButtonBayar.css';

const KonfirmasiBayar = ({show, handleKonfirmasiBatal, handleKonfirmasiBayar, dataUser}) => {
      
    return ( 
        <div className="container">
            <Modal
                className="d-flex align-items-center"
                show={show}
            >
                <div className="modal-body">
                    <h1>Konfirmasi</h1>
                    <div className="row">
                        <div className="col mb-n3">
                            <p>Id </p>
                        </div>
                        <div className="col mb-n3 mr-n5">
                            <p className="">:</p>
                        </div>
                        <div className="col mb-n3 ml-n5">
                            <p className="fw-light">{dataUser.idUser}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col mb-n3">
                            <p>Server </p>
                        </div>
                        <div className="col mb-n3 mr-n5">
                            <p className="">:</p>
                        </div>
                        <div className="col mb-n3 ml-n5">
                            <p className="fw-light">{dataUser.serverUser}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col mb-n3">
                            <p>Nickname </p>
                        </div>
                        <div className="col mb-n3 mr-n5">
                            <p className="">:</p>
                        </div>
                        <div className="col mb-n3 ml-n5">
                            <p className="fw-light">{dataUser.nickname}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col mb-n3">
                            <p>Jumlah Diamond </p>
                        </div>
                        <div className="col mb-n3 mr-n5">
                            <p className="">:</p>
                        </div>
                        <div className="col mb-n3 ml-n5">
                            <p className="fw-light">{dataUser.jumlahDiamond}</p>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col mb-n3">
                            <p>Harga </p>
                        </div>
                        <div className="col mb-n3 mr-n5">
                            <p className="">:</p>
                        </div>
                        <div className="col mb-n3 ml-n5">
                            <p className="fw-light">{dataUser.harga}</p>
                        </div>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="tombol-batal" onClick={handleKonfirmasiBatal}> Batal </button>

                    <Link to='/bayarboss'>
                    <div>
                    <button className="tombol-bayar2" onClick={handleKonfirmasiBayar}> Bayar </button>
                    </div>
                    </Link>
                </div>
            </Modal>
        </div>
     );
}
 
export default KonfirmasiBayar;