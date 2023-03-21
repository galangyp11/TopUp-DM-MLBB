import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const DataToWA = ({dataUser}) => {
    const client = new Client();

    client.on('qr', qr => {
        qrcode.generate(qr, {small: true});
    });

    client.on('ready', () => {
        console.log('Client is ready!');

        const number = '+6281211139102';

        const text = 'galang ganteng';

        const chatId = number.substring(1) + '@c.us';

        client.sendMessage(chatId, text);
    });

    // client.on('message', () => {
    //     message.client('sob');
    // });

    client.initialize();

    return ( 
      <div className="wa">
        {console.log('tes doang')}
      </div>
     );
}
 
export default DataToWA;