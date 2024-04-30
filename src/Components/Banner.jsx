import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{img: "https://i.ibb.co/9tDnzqF/3-a116c2ad-b3cd-4d23-a8e3-9c068b20484a.jpg", title: "Landscape Painting", des: "A serene landscape painting capturing the beauty of mountains.",}, {img: "https://i.ibb.co/CbWS2DH/images-q-tbn-ANd9-Gc-QFJCk-ENb-J-6i-x-36i-NKJ5-BTXl-P5-A7-FIKo-Sl7d-GJbe1-EGw-Cq6-Vu-S7a-BLw-JCIgdq.jpg", title: "Portrait Drawing", des: " detailed pencil sketch portrait capturing the essence of the subject.",}, {img: "https://i.ibb.co/XXNdRLJ/public.jpg", title: "Cartoon Drawing", des: "Fun and lively comic strip drawing with colorful characters.",}]
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);




    return (
        <>
            <div className="w-full h-0 sm:h-96 md:h-[640px] flex flex-col items-center object-cover justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
                {/* text container here */}
                <div className="drop-shadow-lg text-white text-center px-5">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                </div>
            </div>
            {/* slider container */}
            <div className="flex justify-center items-center gap-3 p-2">
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <img onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                        alt={slide.title}/>
                ))}
            </div>
        </>
    );
};

export default Banner;