import emailjs from '@emailjs/browser';

const DataToEmail = () => {
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
   
    return ( 
        <div></div>
     );
}
 
export default DataToEmail;