
const Testimonials = () => {
    const testimonials = [
        {
            image: "https://i.ibb.co.com/W6HPhgv/pexels-andrewperformance1-697509.jpg",
            name: "Sarah Johnson",
            quote:
                "This platform has been a lifesaver! It's amazing to see how food that would otherwise go to waste can help others.",
        },
        {
            image: "https://i.ibb.co.com/GvMVfXG/pexels-alipazani-2613260.jpg",
            name: "Michael Lee",
            quote:
                "I love how easy it is to donate food. It's rewarding to know I'm making a positive impact in my community.",
        },
        {
            image: "https://i.ibb.co.com/Ny9zKYT/pexels-linkedin-2182970.jpg",
            name: "Emily Davis",
            quote:
                "Finding surplus food nearby has been so convenient. This platform truly brings people together.",
        },
        {
            image: "https://i.ibb.co.com/C5dL0SW/pexels-pixabay-415829.jpg",
            name: "Ronald Davis",
            quote:
                "Finding surplus food nearby has been so convenient. This platform truly brings people together.",
        },
    ];

    return (
        <section className="my-8 px-4 lg:px-0">
            <h1 className="text-5xl font-bold text-center mb-10">What People Are <span className="text-[#85B935]">Saying</span></h1>
            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                            <p className="relative px-6 py-1 text-lg italic text-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-[#85B935]">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>{testimonial.quote}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-[#85B935]">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg ">
                            <img src={testimonial.image} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full " />
                            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                            <p className="text-sm uppercase">{testimonial.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
