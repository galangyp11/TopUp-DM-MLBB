import {useEffect, useState} from "react";

import IdServer from "./IdServer";
import Diamonds from "./Diamonds";
import Pembayaran from "./Pembayaran";
import Notelp from "./Notelp";
import CheckoutWA from "./ChekoutWA";
import KonfirmasiBayar from "./KonfirmasiBayar";

import './ButtonBayar.css';

const Home = () => {
    
    const [isShow, setIsShow] = useState(false)
    const [dataUser, setDataUser] = useState({
        idUser: 'jokowi',
        serverUser: 'Null',
        nickname:'Null',
        jumlahDiamond: 'Null',
        harga:'Rp. 300.000',
        pembayaran: 'Null',
        noTelp: 'Null'
    });

    useEffect(() => {

    })

    const handleBayar = () => {
        setIsShow(true)
        // if(dataUser.idUser != 'jokowi') {

        // }
    }

    const handleBatal = () => {
        setIsShow(false)
    }
    return ( 
        <div className="" style={{ backgroundColor:'#EDF1D6' }}>
            {console.log(dataUser)}

            <div className="border border-danger container">   
                <div className="row pt-5 pb-2">
                    <div className="d-flex justify-content-center">
                        <IdServer dataUser={dataUser} setDataUser={setDataUser} />
                    </div>
                </div>

                <div className="row py-2">
                    <div className="d-flex justify-content-center">
                        <Diamonds dataUser={dataUser} setDataUser={setDataUser} />
                    </div>
                </div>

                <div className="row py-2">
                    <div className="d-flex justify-content-center">
                        <Pembayaran dataUser={dataUser} setDataUser={setDataUser}/>
                    </div>
                </div>

                <div className="row py-2">
                    <div className="d-flex justify-content-center">
                        <Notelp dataUser={dataUser} setDataUser={setDataUser}/>
                    </div>
                </div>

                <div className="row py-2 mb-5">
                    <div className="d-flex justify-content-center">
                        <CheckoutWA dataUser={dataUser} setDataUser={setDataUser}/>
                    </div>
                </div>

                <div className="">
                    <KonfirmasiBayar show={isShow} handleBatal={handleBatal} dataUser={dataUser}/>
                </div>

                <div className="row fixed-bottom">
                    <div className="vw-100 d-flex align-items-center justify-content-center" style={{ height:'60px', backgroundColor:'#40513B' }}>
                        <button className="tombol-bayar d-flex align-items-center justify-content-center" onClick={handleBayar} >Bayar</button>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Home;