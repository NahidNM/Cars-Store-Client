import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {

  const AutoplaySlider = withAutoplay(AwesomeSlider)

  return(
    <div className='pt-16'>
      <AutoplaySlider
    play={true}
    cancelOnInteraction={true} // should stop playing on user interaction
    interval={2000}
  >
    <div className="min-h-screen hero md:pt-16 ">
      <img src="https://i.ibb.co/Sw0NqsX/240-F-628457041-i-GDZYt-SFUF8-O3uv-Wv6-Pt-Wq6b7z3p-Ult3.jpg" alt="" className='w-full'/>
<div className="hero-overlay bg-opacity-60"></div>
<div className="text-center  hero-content text-neutral-content">
<div>
<div className=''>
    <h1 className="text-4xl font-medium uppercase drop-shadow-[3px_3px_0_rgb(234,179,8)] md:text-5xl">Hello there</h1>
    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>  
</div>
  </div>
</div>
<div className="min-h-screen hero md:pt-16 " >
<img src="https://i.ibb.co/KsTTFSm/240-F-539558104-3-Byq-LIC7-Dic0q-PXYl-NUz-Ure-Zoev8-Gla0.jpg" className='w-full' alt="" />

<div className="hero-overlay bg-opacity-60"></div>

<div className="text-center  hero-content text-neutral-content">
<div>
<div className=''>
    <h1 className="text-4xl font-medium uppercase drop-shadow-[3px_3px_0_rgb(234,179,8)] md:text-5xl">Hello there</h1>
    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>  
</div>
  </div>
</div>
<div className="min-h-screen hero md:pt-16 ">
<img src="https://i.ibb.co/xKvk1qr/240-F-269855995-UNnu1m-K0d-ZXi-P5-SNgndd-F9-TT7-L1-NV0zq.jpg" className='w-full' alt="" />
<div className="hero-overlay bg-opacity-60"></div>
<div className="text-center  hero-content text-neutral-content">
<div>
<div className=''>
    <h1 className="text-4xl font-medium uppercase drop-shadow-[3px_3px_0_rgb(234,179,8)] md:text-5xl">Hello there</h1>
    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>  
</div>
  </div>
</div>
  </AutoplaySlider>
    </div>
  )
}

export default Banner;










