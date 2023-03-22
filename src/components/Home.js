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
        idUser: 'Null',
        serverUser: 'Null',
        nickname: 'Null',
        jumlahDiamond: 'Null',
        harga: ' ',
        pembayaran: 'Null',
        noTelp: 'Null'
    });

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

    useEffect(() => {
        // let id = dataUser.idUser
        // const url = `https://pokeapi.co/api/v2/berry/${id}/`;

        let idServer = dataUser.idUser + dataUser.serverUser
        const url = `https://v1.apigames.id/merchant/M230314DWWH5029OR/cek-username/mobilelegend?user_id=${idServer}&signature=000a7da84dfbdfc958f3392a6af11ea8`
  
        const fetchData = async () => {
            try{
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.data.username)
                setDataUser((dataNick) => ({
                    ...dataNick,
                    nickname: JSON.stringify(json.data.username)
                }))
            } catch(error) {
                console.log('error bang')
            }
        }

        fetchData()
    }, [])

    const handleBayar = () => {
        setIsShow(true)
        // if(dataUser.idUser !=== 'jokowi') {

        // }
    }

    const handleBatal = () => {
        setIsShow(false)
    }
    return ( 
        <div className="" style={{ backgroundColor:'#EDF1D6' }}>
            {console.log(dataUser)}

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