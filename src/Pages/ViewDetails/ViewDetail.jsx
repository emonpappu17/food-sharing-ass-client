import { useLoaderData } from "react-router";
// import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { requestFood } from "../../Hooks/Foods";
import Swal from "sweetalert2";
import PageTitle from "../../Components/PageTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ViewDetail = () => {
    const [currentTime, setCurrentTime] = useState('')
    const [isRequested, setIsRequested] = useState(false)

    const loadedData = useLoaderData()
    const { _id, foodImage, foodName, donatorName, donatorImage, foodQuantity, pickupLocation, expiredDateTime, donatorEmail } = loadedData

    const mutation = useMutation({
        mutationFn: (food) => requestFood(food),
        onSuccess: (data) => {
            console.log(data);
            const modal = document.getElementById('my_modal_5');
            if (modal) modal.close();
            Swal.fire({
                title: "Food requested successfully",
                text: "Success!",
                icon: "success"
            });
            setIsRequested(true)
        },
        onError: (err) => {
            console.log(err);
        }
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('hi');
        const form = e.target
        const additionalNotes = form.notes.value
        const foodStatus = 'requested'
        const requestDate = form.requestDate.value
        const food = { additionalNotes, foodStatus, requestDate, _id }
        mutation.mutate(food)
    }

    useEffect(() => {
        const now = new Date();

        // Format the date as YYYY-MM-DD
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const date = now.getDate().toString().padStart(2, '0')
        setCurrentTime(`${date}-${month}-${year}`);

    }, [])

    return (
        <section >
            <PageTitle title={'FoodDetail'}></PageTitle>
            <div data-aos="fade-left">
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
                            disabled={isRequested}
                            className="btn bg-[#85B935] w-full dark:text-white text-slate-900"
                            onClick={() => document.getElementById('my_modal_5').showModal()}
                        >
                            {isRequested ? 'Requested' : 'Request'}
                        </button>
                    </div>
                </div>
            </div>

            {/* modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div>
                            <div >
                                <label htmlFor="foodName" className="text-sm">Food Name</label>
                                <input id="foodName" type="text" name="foodName" value={foodName} readOnly placeholder="Food Name" className="w-full rounded-md border-slate-900 border	ring-inset p-3" />
                            </div>
                            <div >
                                <label htmlFor="foodImg" className="text-sm">Food Image</label>
                                <input id="foodImg" type="url" name="foodImg" value={foodImage} readOnly placeholder="Food Image" className="w-full rounded-md border-slate-900 border ring-inset p-3 " />
                            </div>
                            <div >
                                <label htmlFor="foodQuantity" className="text-sm">Food Quantity
                                </label>
                                <input id="foodQuantity" type="number" name="foodQuantity" value={foodQuantity} readOnly placeholder="Food Quantity" className="w-full rounded-md border-slate-900 border ring-inset p-3 " />
                            </div>
                            <div >
                                <label htmlFor="expire" className="text-sm">Request Date</label>
                                <input id="expire" type="" value={currentTime} readOnly name="requestDate" placeholder="Expired Date" className="w-full rounded-md border-slate-900 border	ring-inset p-3 " />
                            </div>
                            <div className="  sm:col-span-3">
                                <label htmlFor="location" className="text-sm">Pickup Location</label>
                                <input id="location" type="text" name="location" value={pickupLocation} readOnly placeholder="Pickup Location" className="w-full rounded-md border-slate-900 border ring-inset p-3 " />
                            </div>
                            <div >
                                <label htmlFor="expire" className="text-sm">Expired Date</label>
                                <input id="expire" name="expired" value={expiredDateTime} readOnly placeholder="Expired Date" className="w-full rounded-md border-slate-900 border	ring-inset p-3 " />
                            </div>
                            <div >
                                <label htmlFor="donarName" className="text-sm">Donator Name</label>
                                <input id="donarName" type="text" value={donatorName} readOnly placeholder="Donator Email" className="w-full rounded-md border-slate-900 border ring-inset p-3 " />
                            </div>
                            <div >
                                <label htmlFor="expire" className="text-sm">Donator Email</label>
                                <input id="expire" type="email" value={donatorEmail} readOnly placeholder="Donator Email" className="w-full rounded-md border-slate-900 border ring-inset p-3 " />
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