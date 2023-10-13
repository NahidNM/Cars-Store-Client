import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import contact from '../../../../public/Contract/contact.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contract = () => {
    useEffect(() => {
        AOS.init({
          // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1200, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
        });
      }, []);
      useEffect(() => {
        AOS.refresh();
      });

// react Email


const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();
    // console.log(import.meta.env.VITE_TEMPLATE);

    emailjs.sendForm('service_ns9wuho', 'template_8nqvfcu', form.current, 'Jjpwm5-wVtkApMDEb')
    // emailjs.sendForm(`import.meta.env.VITE_SERVICE`, `import.meta.env.VITE_TEMPLATE`, form.current, `import.meta.env.VITE_PUBLIC_KEY`)
      .then((result) => {
          console.log(result.text);

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Email Send Sucessfully',
            showConfirmButton: false,
            timer: 1500
          })
form.reset()


      }, (error) => {
          console.log(error.text);
      });
  };


    return (
        <div>
           
            <div data-aos="fade-up" className="mx-auto text-gray-100 bg-white">
                <div
                    className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto mt-24 mb-10 text-gray-900 border rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                    <div  data-aos="fade-down-right" className="flex flex-col justify-between">

                        <div className="mt-8 text-center">
                            <img src={contact} alt="" />
                        </div>
                    </div>
                    <div  data-aos="fade-down" className="">
                        <div>
                            <h2 className='py-10 text-4xl font-bold'>Contact Us</h2>
                        </div>                   
<form ref={form} onSubmit={sendEmail}>
      <div className='mt-8'>
      <label className="text-sm font-bold text-gray-600 uppercase">Full Name</label>
      <input type="text" name="user_name" className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline" placeholder='Name'/>
      </div>

      <div className='mt-8'>
      <label className="text-sm font-bold text-gray-600 uppercase">Email</label>
      <input type="email" name="user_email" className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"/>
      </div>

      <div className='mt-8'>
      <label className="text-sm font-bold text-gray-600 uppercase">Message</label>
      <textarea name="message" className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"/>
      </div>

      <div className='mt-8'>
      <input type="submit" value="Send" className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-indigo-500 rounded-lg focus:outline-none focus:shadow-outline hover:bg-indigo-300"/>
      </div>
    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;