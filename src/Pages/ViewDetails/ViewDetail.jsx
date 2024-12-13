import { useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";

const ViewDetail = () => {
    const { user } = useAuth()

    const loadedData = useLoaderData()
    // console.log(loadedData);
    const { _id, foodImage, foodName, donatorName, donatorImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, donatorEmail } = loadedData
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('hi');

    }

    return (
        <section className="">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row gap-6">
                <div className="flex items-center justify-center">
                    <img src={foodImage} className="md:w-[800px] w-[500px] object-cover" alt="" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left space-y-5">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">{foodName} </h1>

                    <div className="flex items-center  justify-center lg:justify-normal gap-3 mt-2">
                        <img
                            src={donatorImage}
                            alt={donatorName}
                            className="w-10 h-10 rounded-full border border-base-300"
                        />
                        <span className="text-sm text-base-content">{donatorName}</span>
                    </div>
                    <p className=" text-base-content  text-lg ">
                        <span className="font-semibold">Quantity:</span> Serves {foodQuantity} people
                    </p>
                    <p className="text-base-content   text-lg ">
                        <span className="font-semibold">Expires On:</span> {expiredDateTime}
                    </p>
                    <p className="text-base-content   text-lg ">
                        <span className="font-semibold">Pickup Location:</span> {pickupLocation}
                    </p>
                    <p className="text-base-content   text-lg ">
                        <span className="font-semibold">Email:</span> {donatorEmail}
                    </p>
                    <button
                        className="btn bg-[#85B935] w-full dark:text-white text-slate-900"
                        onClick={() => document.getElementById('my_modal_5').showModal()}
                    >
                        Request
                    </button>
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box border">
                    {/* <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div> */}

                    <form onSubmit={handleSubmit} className="space-y-12 border">
                        <div>
                            <div className="">
                                <label htmlFor="foodName" className="text-sm">Food Name</label>
                                <input id="foodName" type="text" name="foodName" placeholder="Food Name" required className="w-full rounded-md border-slate-900 border	ring-inset p-3" />
                            </div>
                            <div className="">
                                <label htmlFor="foodImg" className="text-sm">Food Image</label>
                                <input id="foodImg" type="url" name="foodImg" placeholder="Food Image" required className="w-full rounded-md border-slate-900 border ring-inset p-3 " />
                            </div>
                            <div className="">
                                <label htmlFor="foodQuantity" className="text-sm">Food Quantity
                                </label>
                                <input id="foodQuantity" type="number" name="foodQuantity" placeholder="Food Quantity" required className="w-full rounded-md border-slate-900 border ring-inset p-3 " />
                            </div>
                            <div className="  sm:col-span-3">
                                <label htmlFor="location" className="text-sm">Pickup Location</label>
                                <input id="location" type="text" name="location" placeholder="Pickup Location" required className="w-full rounded-md border-slate-900 border ring-inset p-3 " />
                            </div>
                            <div className="">
                                <label htmlFor="expire" className="text-sm">Expired Date</label>
                                <input id="expire" type="date" name="expired" placeholder="Expired Date" required className="w-full rounded-md border-slate-900 border	ring-inset p-3 " />
                            </div>
                            <div className="">
                                <label htmlFor="expire" className="text-sm">Donator Email</label>
                                <input id="expire" type="email" value={user?.email || ''} readOnly placeholder="Donator Email" className="w-full rounded-md border-slate-900 border	ring-inset p-3 " />
                            </div>
                            <div className=" ">
                                <label htmlFor="notes" className="text-sm">Additional Notes</label>
                                <input id="notes" type="text" name="notes" placeholder="Additional Notes" required className="w-full rounded-md border-slate-900 border	ring-inset p-3 " />
                            </div>
                            <button type="submit" className="btn  bg-[#85B935] dark:text-white text-slate-900 w-full mt-4">Request</button>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </section>
    );
};

export default ViewDetail;