import { Link } from "react-router";

const Card = ({ card }) => {
    console.log(card);
    const { foodImage, foodName, donatorName, donatorImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes } = card

    return (
        <div>
            {/* <div className="max-w-sm mx-auto  rounded-lg shadow-md overflow-hidden">
                <img
                    src={foodImage}
                    alt={foodName}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{foodName}</h2>
                    <div className="flex items-center gap-3 mt-3">
                        <img
                            src={donatorImage}
                            alt={donatorName}
                            className="w-10 h-10 rounded-full border border-gray-300"
                        />
                        <span className="text-sm text-gray-600">{donatorName}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                        <span className="font-medium">Quantity:</span> Serves {foodQuantity} people
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        <span className="font-medium">Pickup Location:</span> {pickupLocation}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        <span className="font-medium">Expires On:</span> {expiredDateTime}
                    </p>

                    <p className="text-sm text-gray-500 mt-2 italic">{additionalNotes}</p>

                    <button
                        // onClick={onViewDetail}
                        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        View Details
                    </button>
                </div>
            </div> */}


            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <figure className="h-48 overflow-hidden">
                    <img
                        src={foodImage}
                        alt={foodName}
                        className="w-full object-cover h-full"
                    />
                </figure>
                <div className="card-body flex flex-col">
                    <h2 className="card-title text-base-content">{foodName}</h2>
                    <div className="flex items-center gap-3 mt-2">
                        <img
                            src={donatorImage}
                            alt={donatorName}
                            className="w-10 h-10 rounded-full border border-base-300"
                        />
                        <span className="text-sm text-base-content">{donatorName}</span>
                    </div>
                    <p className="text-base text-base-content mt-2">
                        <span className="font-semibold">Quantity:</span> Serves {foodQuantity} people
                    </p>
                    <p className="text-base text-base-content mt-1">
                        <span className="font-semibold">Pickup Location:</span> {pickupLocation}
                    </p>
                    <p className="text-base text-base-content mt-1">
                        <span className="font-semibold">Expires On:</span> {expiredDateTime}
                    </p>

                    <p className="text-sm text-base-content mt-2 italic">{additionalNotes}</p>

                    <div className="mt-auto">
                        <Link to='/viewDetail'>
                            <button
                                className="btn  bg-[#85B935] w-full dark:text-white text-slate-900"
                            >
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;