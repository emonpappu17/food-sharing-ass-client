import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { AttentionSeeker, Slide, Zoom } from "react-awesome-reveal";


import 'swiper/css/bundle';

const Banner = () => {
    const [slides, setSlides] = useState([])

    useEffect(() => {
        axios('sliderData.json')
            .then(res => setSlides(res.data))
    }, [])

    return (
        <div>
            <Swiper
                slidesPerView={1}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {
                    slides.map(slide => <SwiperSlide className="relative" key={slide.title}>
                        <div>
                            {/* <div className="absolute top-0 ">{slide.title}</div> */}
                            <Zoom>
                                <img className="transition-transform duration-1000 scale-110  aspect-video object-cover" src={slide.imageUrl} />
                            </Zoom>
                            <div className="absolute top-0">
                                <div className="flex items-center justify-center  h-full">
                                    <div className="text-center md:space-y-5 space-y-2 md:max-w-[650px] max-w-72">
                                        <Zoom><h1 className="pacifico lg:text-6xl md:text-3xl text-2xl text-orange-500 ">{slide?.title}</h1></Zoom>
                                        <Slide direction="up" ><p className="text-gray-50 lg:text-3xl md:text-xl ">{slide?.description}</p></Slide >
                                        <AttentionSeeker effect="rubberBand" delay={1000}> <button className="py-2 px-3 text-xs md:text-base border hover:border-none text-white rounded-xl hover:bg-orange-500 ">any</button></AttentionSeeker>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Banner;





// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade, Navigation, Pagination, Autoplay, Zoom } from 'swiper/modules';

// import 'swiper/css/bundle';

// const Banner = () => {
//     const [slides, setSlides] = useState([]);

//     useEffect(() => {
//         axios('sliderData.json')
//             .then(res => setSlides(res.data));
//     }, []);



//     // return (
//     //     <div>
//     //         <Swiper
//     //             slidesPerView={1}
//     //             effect={'fade'}
//     //             navigation={true}
//     //             pagination={{
//     //                 clickable: true,
//     //             }}
//     //             modules={[EffectFade, Navigation, Pagination, Autoplay, Zoom]}
//     //             loop={true}
//     //             autoplay={{
//     //                 delay: 2500,
//     //                 disableOnInteraction: false,
//     //             }}
//     //             zoom={true} // Enable zoom functionality
//     //             onSlideChange={(swiper) => {
//     //                 // Trigger zoom reset on slide change
//     //                 const currentSlide = swiper.slides[swiper.activeIndex];
//     //                 const zoomElement = currentSlide.querySelector('.swiper-zoom-container');
//     //                 if (zoomElement) {
//     //                     swiper.zoom.in(); // Zoom in when the slide becomes active
//     //                     setTimeout(() => swiper.zoom.out(), 2000); // Zoom out after 2 seconds
//     //                 }
//     //             }}
//     //         >
//     //             {
//     //                 slides.map(slide => (
//     //                     <SwiperSlide key={slide.title}>
//     //                         <div className="swiper-zoom-container">
//     //                             <img className="aspect-video object-cover" src={slide.imageUrl} alt={slide.title} />
//     //                         </div>
//     //                     </SwiperSlide>
//     //                 ))
//     //             }
//     //         </Swiper>
//     //     </div>
//     // );


//     return (
//         <div>
//             {slides.length > 0 && (
//                 <Swiper
//                     slidesPerView={1}
//                     effect={'fade'}
//                     navigation={true}
//                     pagination={{ clickable: true }}
//                     modules={[EffectFade, Navigation, Pagination, Autoplay, Zoom]}
//                     loop={true}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     zoom={true}
//                     onSlideChange={(swiper) => {
//                         const activeSlide = swiper.el.querySelector('.swiper-slide-active .swiper-zoom-container');
//                         if (activeSlide) {
//                             swiper.zoom.in();
//                             setTimeout(() => swiper.zoom.out(), 2000);
//                         }
//                     }}
//                 >
//                     {slides.map((slide) => (
//                         <SwiperSlide key={slide.title}>
//                             <div className="swiper-zoom-container">
//                                 <img className="aspect-video object-cover" src={slide.imageUrl} alt={slide.title} />
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             )}
//         </div>
//     );


// };


// export default Banner;
