
const HowItWorks = () => {
    const steps = [
        {
            icon: "🛒",
            title: "Donate Food",
            description: "Easily list surplus food items to share with the community.",
        },
        {
            icon: "🔍",
            title: "Browse Listings",
            description: "Find available food items near your location.",
        },
        {
            icon: "🤝",
            title: "Collect & Share",
            description: "Coordinate pickups and make a positive impact together.",
        },
    ];

    return (
        <section className="py-12 px-4 lg:px-0">
            <div className="container mx-auto text-center">
                {/* <h2 className="text-2xl lg:text-4xl font-bold mb-6">How It Works</h2> */}
                <h1 className="text-5xl font-bold text-center mb-10">How It Works</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} data-aos="zoom-out-up" className="h-full">
                            <div
                                // key={index}
                                className="p-6 rounded-lg shadow-lg bg-base-100 hover:shadow-xl transition h-full"
                            >
                                <div className="text-5xl mb-4">{step.icon}</div>
                                <h3 className="text-xl font-semibold text-[#85B935] mb-2 ">{step.title}</h3>
                                <p className="text-base-content">{step.description}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
