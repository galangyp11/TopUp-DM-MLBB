import './HalamanBayar.css'
const HalamanBayar = ({setIsKonfirmasi, dataUser}) => {

    const handleKembali = () => {
        setIsKonfirmasi(false)
    } 

    console.log(dataUser)
    return ( 
        <div className="halaman-bayar container d-flex justify-content-center align-items-center ">
            <div className="card-bayar">
                <h1>{dataUser.pembayaran}</h1>
                    <div className="row mt-3">
                        <div className="col-5"> Pembayaran </div>

                        <div className="col"> : Mobile Legends </div>
                    </div>

                    <div className="row">
                        <div className="col-5"> Server </div>

                        <div className="col"> : {dataUser.serverUser} </div>
                    </div>

                     <div className="row">
                        <div className="col-5"> Id </div>

                        <div className="col"> : {dataUser.idUser} </div>
                    </div>

                    <div className="row">
                        <div className="col-5"> Nickname </div>

                        <div className="col"> : {dataUser.nickname} </div>
                    </div>

                    <div className="row">
                        <div className="col-5"> Diamond </div>

                        <div className="col"> : {dataUser.jumlahDiamond} </div>
                    </div>

                    <div className="row">
                        <div className="col-5"> Harga </div>

                        <div className="col"> : {dataUser.harga} </div>
                    </div>
                <div className="border-danger d-flex justify-content-center mt-5">
                    <button className='tombol-kembali' onClick={handleKembali}>Kembali</button>
                </div>
            </div>
        </div>
     );
}
 
export default HalamanBayar;