// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { AttentionSeeker, Slide, Zoom } from "react-awesome-reveal";


// import 'swiper/css/bundle';

// const Banner = () => {
//     const [slides, setSlides] = useState([])

//     useEffect(() => {
//         axios('sliderData.json')
//             .then(res => setSlides(res.data))
//     }, [])

//     return (
//         <div>
//             <Swiper
//                 slidesPerView={1}
//                 effect={'fade'}
//                 // navigation={true}
//                 // pagination={{
//                 //     clickable: true,
//                 // }}
//                 modules={[EffectFade, Navigation, Pagination, Autoplay]}
//                 loop={true}
//                 autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                 }}
//                 autoHeight={true}
//                 crossFade ={true}
//                 limitToOriginalSize={true}
//                 className="border aspect-video"
//             >
//                 {
//                     slides.map(slide => <SwiperSlide className="relative" key={slide.title}>
//                         <div>
//                             {/* <div className="absolute top-0 ">{slide.title}</div> */}
//                             {/* <Zoom>

//                             </Zoom> */}
//                             <img className="h-full w-full scale-150  object-cover" src={slide.imageUrl} />
//                             <div className="absolute flex items-center justify-center  border">
//                                 <div className="flex items-center justify-center  h-full">
//                                     <div className="text-center md:space-y-5 space-y-2 md:max-w-[650px] max-w-72">
//                                         <Zoom><h1 className="pacifico lg:text-6xl md:text-3xl text-2xl text-orange-500 ">{slide?.title}</h1></Zoom>
//                                         <Slide direction="up" ><p className="text-gray-50 lg:text-3xl md:text-xl ">{slide?.description}</p></Slide >
//                                         <AttentionSeeker effect="rubberBand" delay={1000}> <button className="py-2 px-3 text-xs md:text-base border hover:border-none text-white rounded-xl hover:bg-orange-500 ">any</button></AttentionSeeker>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>)
//                 }
//             </Swiper>
//         </div>
//     );
// };

// export default Banner;





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




// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";


// const Carousel = () => {
//     return (
//         <Swiper
//             modules={[Navigation, Pagination, Autoplay]} // Add modules you want
//             spaceBetween={20} // Space between slides
//             slidesPerView={1} // Number of visible slides
//             loop={true} // Infinite loop
//             navigation // Enable navigation arrows
//             pagination={{ clickable: true }} // Enable pagination dots
//             autoplay={{ delay: 3000 }} // Autoplay settings
//         >
//             <SwiperSlide>
//                 <div style={{ background: "#ddd", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                     Slide 1
//                 </div>
//             </SwiperSlide>
//             <SwiperSlide>
//                 <div style={{ background: "#ccc", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                     Slide 2
//                 </div>
//             </SwiperSlide>
//             <SwiperSlide>
//                 <div style={{ background: "#bbb", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                     Slide 3
//                 </div>
//             </SwiperSlide>
//         </Swiper>
//     );
// };

// export default Carousel;


import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Autoplay } from "swiper/modules";
// import { useEffect, useState } from "react";
// import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css/bundle';
import { EffectCreative, Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";

const Banner = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        axios("sliderData.json").then((res) => setSlides(res.data));
    }, []);

    return (
        <Swiper
            // modules={[EffectFade, Autoplay]}
            // effect="fade"
            // autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            // }}
            // loop={true}
            // slidesPerView={1}
            // className="relative aspect-video"

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
            className="mySwiper5 aspect-video"
            loop={true}
            autoplay={
                {
                    delay: 3000,
                    disableOnInteraction: false

                }
            }
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                        <img
                            src={slide.imageUrl}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay content */}
                        <div className="absolute bottom-4 md:left-4 bg-black bg-opacity-60 text-white p-4 rounded-md md:max-w-md">
                            <h2 className="text-xl font-bold">{slide.title}</h2>
                            <p className="mt-2">{slide.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;




// import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import { EffectFade, Autoplay } from "swiper/modules";
// import clsx from "clsx"; // Optional: For cleaner conditional class handling
// import { useEffect, useState } from "react";

// const Banner = () => {
//     const [slides, setSlides] = useState([]);
//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         axios("sliderData.json").then((res) => setSlides(res.data));
//     }, []);

//     return (
//         <Swiper
//             modules={[EffectFade, Autoplay]}
//             effect="fade"
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             loop={true}
//             slidesPerView={1}
//             // onSlideChange={(swiper) => {
//             //     setActiveIndex(swiper.activeIndex)
//             //     console.log(swiper);
//             //     console.log(activeIndex);
//             // }} // Track active slide
//             className="relative w-full h-[700px] overflow-hidden"
//         >
//             {slides.map((slide, index) => (
//                 <SwiperSlide key={index}>
//                     <div className="relative w-full h-full">
//                         {/* Add dynamic active class */}
//                         <img
//                             onChange={() => setActiveIndex(index)}
//                             src={slide.imageUrl}
//                             alt={slide.title}
//                             className={clsx(
//                                 "w-full h-full object-cover transition-transform duration-[6000ms]",
//                                 activeIndex === index ? "scale-150" : ""
//                             )}
//                         />
//                         <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-4 rounded-md max-w-md">
//                             <h2 className="text-xl font-bold">{slide.title}</h2>
//                             <p className="mt-2">{slide.description}</p>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };

// export default Banner;




// import axios from "axios";
// import { useEffect, useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css/bundle";
// import clsx from "clsx";

// const Banner = () => {
//   const [slides, setSlides] = useState([]);
//   const [visibleIndexes, setVisibleIndexes] = useState(new Set()); // Track visible slides
//   const imageRefs = useRef([]); // Store image refs

//   useEffect(() => {
//     axios("sliderData.json").then((res) => setSlides(res.data));
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const index = Number(entry.target.getAttribute("data-index"));
//           if (entry.isIntersecting) {
//             setVisibleIndexes((prev) => new Set([...prev, index]));
//           } else {
//             setVisibleIndexes((prev) => {
//               const updated = new Set(prev);
//               updated.delete(index);
//               return updated;
//             });
//           }
//         });
//       },
//       { threshold: 0.5 } // Trigger when 50% of the image is visible
//     );

//     imageRefs.current.forEach((image) => {
//       if (image) {
//         observer.observe(image);
//       }
//     });

//     // return () => {
//     //   imageRefs.current.forEach((image) => {
//     //     if (image) observer.unobserve(image);
//     //   });
//     // };
//   }, [slides]);

//   return (
//     <div>
//       <Swiper
//         slidesPerView={1}
//         effect={"fade"}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[EffectFade, Navigation, Pagination, Autoplay]}
//         loop={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={slide.title}>
//             <img
//               ref={(el) => (imageRefs.current[index] = el)} // Store each image ref
//               data-index={index} // Identify the slide
//               src={slide.imageUrl}
//               alt={slide.title}
//               className={clsx(
//                 "w-full h-full object-cover transition-transform duration-[6000ms]",
//                 visibleIndexes.has(index) ? "scale-150" : ""
//               )}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;






