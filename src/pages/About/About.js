

import './Aboutus.css';
import Aos from 'aos';
import { useEffect } from 'react';
export default function About() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className='container-fluid about'>
      <div className='row'>
        <div className=' col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-dark h-100' ><h1 className='text-dark h-100 fs-1'>dfff</h1></div>
        <div className=' col-lg-6 col-md-6 col-sm-12 col-xs-12 empty  ' data-aos="fade-right">
          <img src='./car.png' className='img-fluid  car mt-5 mb-5' />
          <p className='  fs-6 abtext1  mt-5 mb-2'><img src='./pointer.png' className='pointer mx-0' />   Denting is the service in which bend and scratches are repaired.</p>
          <p className='  fs-6 abtext1  mt-4'><img src='./pointer.png' className='pointer mx-0' />   Painting is the service in which Paint and scratches are repaired.</p>
          <p className='  fs-6 abtext1 mt-4'><img src='./pointer.png' className='pointer mx-0' />   PPF is the service in which coating of plastic sheet is used to cover the whole car paint which gives shiny look to your car.</p>
          <p className='  fs-6 abtext1 mt-4'><img src='./pointer.png' className='pointer mx-0' />   Services is the type of service in which car has been completely looped and warranted parts has been changed as per their life.</p>

        </div>
        <div className='col col-lg-6 col-md-6 col-sm-12 col-xs-12 bg-dark mt-0 py-5 pb-5 h-100 aboutp ' data-aos="fade-left"><h1 className='text-center text-white'>ABOUT US</h1>
          <p className='text-white mx-auto w-75 Abtext mt-5 '>Our company is a startup for Automobile Servicing which help customer to maintain their vehicle heatlh
            we ensure to maintain loyalty with customer by giving them a hundered percent satisfactory result .
            Autorepair's mission is to enable premium quality care for your luxury car service at affordable pricing .
            We ensure real time updates for complete car care needs with a fair and transparent pricing mechanism.
            Skilled technicians, working at our state-of-the-art German technology workshop further ensure that only
            genuine OEM parts are used for your car care needs.</p>
          <p className='text-white mx-auto w-75 Abtext mt-5 lastp'>Customer satisfaction is the core of all initiatives at AutoRepair. Online appointment scheduling with door-step,
            same day pick-up and drop anywhere in Mumbai is our constant endeavor to maximize customer convenience.
            Our commitment stands for reliability and unequalled professionalism to provide dealer quality auto-service at a
            fair price.This website is owned and operated by Prasad, Ruturaj, & Aniket. PRA is a legal name & AutoRepair is the brand name.
          </p>
        </div>

        <div className=' col-lg-12 col-md-12 col-sm-12 col-xs-12 socail   my-0' data-aos="fade-up"><h1 className='text-white text-center fs-1 mt-5 py-5'>SOCIAL MEDIA</h1>
          <div className=' mx-auto text-center'>
            <img src='./facebook-icon.png' className='logo1' />
            <img src='./instagram-icon.png' className='logo1' />
            <img src='./linkedin-icon.png' className='logo1' />
            <img src='./snapchat-icon.png' className='logo1' />
            <img src='./whatsapp-icon.png' className='logo1' />
            <img src='./wave1.png' className=' wave1 mt-5' />

          </div>

        </div>

      </div>

    </div>
  )
}

