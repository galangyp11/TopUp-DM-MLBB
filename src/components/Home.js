import {useEffect, useState} from "react";

import IdServer from "./IdServer";
import Diamonds from "./Diamonds";
import Pembayaran from "./Pembayaran";
import Notelp from "./Notelp";
import CheckoutWA from "./BuktiKeWA";
import KonfirmasiBayar from "./KonfirmasiBayar";
import AlertGagal from "./AlertGagal";

import './ButtonBayar.css';

const Home = ({isKonfirmasi, setIsKonfirmasi, isShow, setIsShow, dataUser, setDataUser}) => {
    
    const [isiAlert, setIsiAlert] = useState('');
    const [isAlert, setIsAlert] = useState(false);
   
    useEffect(() => {

        if(dataUser.jumlahDiamond === '5') {
            setDataUser((dataHarga) => ({
                ...dataHarga,
                harga: 'Rp. 6.000'
            }));
        } else if(dataUser.jumlahDiamond === '11') {
            setDataUser((dataHarga) => ({
                ...dataHarga,
                harga: 'Rp. 12.000'
            }));
        } else if(dataUser.jumlahDiamond === '27') {
            setDataUser((dataHarga) => ({
                ...dataHarga,
                harga: 'Rp. 20.000'
            }));
        } else if(dataUser.jumlahDiamond === '50') {
            setDataUser((dataHarga) => ({
                ...dataHarga,
                harga: 'Rp. 35.000'
            }));
        } else if(dataUser.jumlahDiamond === '100') {
            setDataUser((dataHarga) => ({
                ...dataHarga,
                harga: 'Rp. 67.000'
            }));
        } else if(dataUser.jumlahDiamond === '137') {
            setDataUser((dataHarga) => ({
                ...dataHarga,
                harga: 'Rp. 83.000'
            }));
        } else if(dataUser.jumlahDiamond === '250') {
            setDataUser((dataHarga) => ({
                ...dataHarga,
                harga: 'Rp. 119.000'
            }));
        } else if(dataUser.jumlahDiamond === '1000') {
            setDataUser((dataHarga) => ({
                ...dataHarga,
                harga: 'Rp. 265.000'
            }));
        } else {
            setDataUser((dataHarga) => ({
                ...dataHarga,
                harga: ' '
            }));
        }
    }, [dataUser.jumlahDiamond])

    const handleBayar = () => {
        console.log(dataUser);

        // setIsShow(true)

        if(dataUser.idUser === 'Null') {
            setIsAlert(true)
            setIsiAlert('ID tidak ditemukan !')
        } else if(dataUser.serverUser === 'Null') {
            setIsAlert(true)
            setIsiAlert('Server tidak ditemukan !')
        } else if(dataUser.jumlahDiamond === 'Null') {
            setIsAlert(true)
            setIsiAlert('Silahkan pilih jumlah Diamond')
        } else if(dataUser.pembayaran === 'Null') {
            setIsAlert(true)
            setIsiAlert('Silahkan pilih metode pembayaran !')
        } else if(dataUser.noTelp === 'Null') {
            setIsAlert(true)
            setIsiAlert('Silahkan isi nomor telepon !')
        } else {
            setIsAlert(false)
            setIsShow(true)
        }
      
     }

    const handleKonfirmasiBatal = () => {
        setIsShow(false)
    }

    const handleKonfirmasiBayar = (e) => {
        e.preventDefault()

        // emailjs.send('gmail', 'template_fg7kwle', 'JJk7fWuFBmuUuR02t')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        setIsShow(false)
        setIsKonfirmasi(true)
    
    }
    return ( 
        <div className="" style={{ backgroundColor:'#EDF1D6' }}>
            {console.log(isKonfirmasi)}

            <div className="container">   
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
                    <KonfirmasiBayar show={isShow} handleKonfirmasiBatal={handleKonfirmasiBatal} handleKonfirmasiBayar={handleKonfirmasiBayar} dataUser={dataUser}/>
                </div>

                <div className="fixed-bottom d-flex justify-content-center mb-5" >
                    {isAlert ? <AlertGagal isiAlert={isiAlert}/> : <></> }
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