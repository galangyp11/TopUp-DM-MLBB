import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const DataToWA = ({dataUser}) => {
    const client = new Client();

    client.on('qr', qr => {
        qrcode.generate(qr, {small: true});
    });

    client.on('ready', () => {
        console.log('Client is ready!');
        const noTelpAsli = `${dataUser.noTelp}`;

        const noTelp =  noTelpAsli.substring(1);

        const number = `+62${noTelp}`;

        const text = `=== PESANAN DIAMOND ===
        - Id : ${dataUser.idUser}
        - Server : ${dataUser.serverUser}
        - Nickname : ${dataUser.nickname}
        - Jumlah Diamond : ${dataUser.jumlahDiamond}
        - Harga : ${dataUser.harga}
        - Pembayaran : ${dataUser.pembayaran}
        =========================
        PASTIKAN PEMBAYARAN SUDAH DITERIMA BARU KEMUDIAN DIAMOND DI PROSES`;

        const chatId = number.substring(1) + '@c.us';

        client.sendMessage(chatId, text);
    });

    client.initialize();

    return ( 
      <div className="wa">
        {console.log(dataUser)}
      </div>
     );
}
 
export default DataToWA;