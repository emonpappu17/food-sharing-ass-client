import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
import { EffectCreative, Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Banner = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        axios("sliderData.json").then((res) => setSlides(res.data));
    }, []);

    return (
        <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: ['-125%', 0, -800],
                    // rotate: [0, 0, -90],
                },
                next: {
                    shadow: true,
                    translate: ['125%', 0, -800],
                    // rotate: [0, 0, 90],
                },
            }}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper5 aspect-video relative"
            loop={true}
            autoplay={
                {
                    delay: 2000,
                    disableOnInteraction: false
                }
            }
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="">
                        <img
                            src={slide.imageUrl}
                            alt={slide.title}
                            className="w-full h-full object-cover brightness-50"
                        />
                        <div className="absolute inset-0 flex justify-center items-center p-3">
                            <div className="flex flex-col items-center text-center md:max-w-3xl mt-10 md:mt-0">
                                <Fade direction="right" cascade damping={0.2}>
                                    <h1 className="text-2xl font-bold leading-none sm:text-5xl text-white">{slide.title}
                                    </h1>
                                    <p className="md:mt-5 md:mb-7 text-lg text-slate-400">{slide.description}</p>
                                    <div className="flex flex-wrap justify-center">
                                        <button className="mr-4 md:px-8 px-3 py-1 md:py-3  text-lg font-semibold rounded bg-[#85B935] text-gray-50">Get started</button>
                                        <button className="md:px-8  px-3 py-1 md:py-3  text-lg border rounded text-gray-900 ">Learn more</button>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;








