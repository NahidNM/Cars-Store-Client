import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='max-h-screen text-white bg-gray-600'>
            <footer className="p-5 text-base text-white footer sm:p-10">
                <div>
                <div className="flex items-center gap-2 ">
            <img src="https://i.ibb.co/PWTzwrq/car-logo.png" alt="" className="hidden w-10 md:block" />
            <h1 className="hidden text-2xl font-bold normal-case md:block">
              <span className='text-amber-500'>Cars</span><span className='text-sky-500'>Store</span>
            </h1>
          </div>
                 <p>CARSTORE.COME<br/>Level-4, 34, IT Centre, Banani, Dhaka <br /> Contact: mdnahidhasan171@gmail.com</p>
                </div> 
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">Home</a> 
                    <a className="link link-hover">All Cars</a> 
                    <a className="link link-hover">My Cars</a> 
                    <a className="link link-hover">Blog</a>
                </div> 
                <div className="md:ml-20">
                <span className="footer-title">Newsletter</span>
                <div className='flex gap-3 text-lg'>
                    <div className='p-3 border rounded-xl'><FiFacebook/></div>
                    <div className='p-3 border rounded-xl'><FiLinkedin/></div>
                    <div className='p-3 border rounded-xl'><FiYoutube/></div>
                </div> 
                <div className="form-control w-80 ">
                <label className="label">
                    <span className="">Enter your email address</span>
                </label> 
                <div className="flex flex-col items-center justify-center w-3/4 gap-2 sm:gap-0 sm:flex-row">
                    <input type="text" placeholder="username@site.com" className="w-4/5 px-3 py-2 border rounded-md outline-none border-secound border-opacity-30 sm:rounded-r-none"/> 
                    <button className="h-full px-3 py-2 font-bold tracking-wide text-white border rounded-md bg-button hover:bg-buttonhover sm:rounded-l-none border-secound border-opacity-30">Subscribe</button>
                </div>
                </div>
            </div>
            </footer>
            <h1 className='pb-5 mx-5 text-xl text-center'>All Right reserved by <a className='underline font-para text-main' href="https://www.linkedin.com/in/md-nahid-hasan-94b084260/">MD NAHID HASAN</a></h1>
        </div>
    );
};

export default Footer;