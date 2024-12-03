import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "./hero";
import Hero2 from "./Hero2";
import 'swiper/css/bundle';
import { EffectCreative } from 'swiper/modules';

const HeroContainer = () => {
    return (
        <section>
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
                modules={[EffectCreative]}
                className="mySwiper5"
                loop={true}
                autoplay={
                    {
                        delay: 250,
                        disableOnInteraction: false

                    }
                }
            >
                <SwiperSlide>
                    <Hero></Hero>
                </SwiperSlide>
                <SwiperSlide>
                    <Hero2></Hero2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HeroContainer;