

function Footer(){
    return(
        <div className='text-center p-3 mt-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        &copy; {new Date().getFullYear()} Contactez moi :{' '}
        <a target="_blank" className='text-dark' href='https://mail.google.com/mail/u/1/#inbox?compose=new'>
          elotmoad@gmail.com
        </a>
      </div>   
    );
}

export default Footer;