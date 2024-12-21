import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteFood, emailFoods, updateFood } from "../../Hooks/Foods";
import useAuth from "../../Hooks/useAuth";
import Lottie from "lottie-react";
import loader from '../../assets/loader.json'
import Swal from "sweetalert2";
import { useState } from "react";
import PageTitle from "../../Components/PageTitle";

const ManageMyFoods = () => {
    const { user } = useAuth();
    const [selectedFood, setSelectedFood] = useState(null);

    const queryClient = useQueryClient();

    //Tanstack Query // Fetch food data
    const { isPending, error, data } = useQuery({
        queryKey: ['foodSortedData', user?.email],
        queryFn: () => emailFoods(user?.email)
    })

    // Mutation for updating food
    const mutation = useMutation({
        mutationFn: (food) => updateFood(food),
        onSuccess: (data, food) => {

            // Access and update the local cache  // get access of local cache
            queryClient.setQueryData(['foodSortedData', user?.email], (oldFoods) => {
                if (!oldFoods) return []; // Handle edge cases where data might be undefined
                return oldFoods.map((item) =>
                    item._id === food.id ? { ...item, ...food } : item
                );
                // return oldFoods.map((item) =>
                //     item._id === food.id ? { ...item, ...data } : item
                // );
            });

            // queryClient.invalidateQueries(['foodSortedData', user?.email]);

            const modal = document.getElementById('my_modal_5');
            if (modal) modal.close();
            Swal.fire({
                title: "Food updated successfully",
                text: "Success!",
                icon: "success"
            });
        },
        onError: (err) => {
            console.log(err);
        }
    })

    // Mutation for deleting food
    const mutation2 = useMutation({
        mutationFn: (id) => deleteFood(id),
        onSuccess: (data, id) => {
            queryClient.setQueryData(['foodSortedData', user?.email], (oldFoods) => {
                if (!oldFoods) return [];

                // Filter out the deleted food
                return oldFoods.filter(item => item._id !== id)
            })
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        },
        onError: (err) => {
            console.log(err);
        }
    })

    if (isPending) return <div className="flex items-center justify-center h-20"><Lottie className="w-20" animationData={loader}></Lottie></div>

    if (error) return 'An error has occurred: ' + error.message

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const foodName = form.foodName.value
        const foodImage = form.foodImg.value
        const pickupLocation = form.location.value
        const foodQuantity = form.foodQuantity.value
        const expiredDateTime = form.expired.value
        const additionalNotes = form.notes.value
        const id = selectedFood?._id
        const food = { additionalNotes, foodName, foodImage, pickupLocation, foodQuantity, expiredDateTime, id }
        console.log(food);
        mutation.mutate(food, { onSuccess: e.target.reset() })
    }

    return (
        <div className="mb-16">
            <PageTitle title={'ManageMyFood'}></PageTitle>
            <div className="container p-2 mx-auto sm:p-4">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Foods: {data.length}</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup className="">
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="">
                            <tr className="text-left">
                                <th className="p-3">Food Image</th>
                                <th className="p-3">Food Name</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Quantity</th>
                                <th className="p-3">Expire</th>
                                <th className="p-3 text-right">Update</th>
                                <th className="p-3">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {data.map(food => <tr key={food._id} className="border-b border-opacity-20 ">
                                <td className="p-3">
                                    <img className="size-24" src={food.foodImage} />
                                </td>
                                <td className="p-3">
                                    <p>{food.foodName}</p>
                                </td>
                                <td className="p-3">
                                    <p>{food.foodStatus}</p>

                                </td>
                                <td className="p-3">
                                    <p>{food.foodQuantity}</p>

                                </td>
                                <td className="p-3">
                                    <p>{food.expiredDateTime}</p>

                                </td>
                                <td className="p-3 text-right">
                                    <button className="btn bg-[#85B935] dark:text-white text-slate-900"
                                        onClick={() => {
                                            document.getElementById('my_modal_5').showModal();
                                            setSelectedFood(food)
                                        }}>Update</button>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md ">
                                        <button
                                            className="btn bg-[#85B935] dark:text-white text-slate-900"
                                            onClick={() => {
                                                Swal.fire({
                                                    title: "Are you sure?",
                                                    text: "You won't be able to revert this!",
                                                    icon: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor: "#3085d6",
                                                    cancelButtonColor: "#d33",
                                                    confirmButtonText: "Yes, delete it!"
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        mutation2.mutate(food._id)
                                                    }
                                                })
                                            }}>Delete</button>
                                    </span>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div>
                            <div >
                                <label htmlFor="foodName" className="text-sm">Food Name</label>
                                <input id="foodName" type="text" name="foodName" defaultValue={selectedFood?.foodName} placeholder="Food Name" required className="w-full rounded-md border-slate-900 border	ring-inset p-3" />
                            </div>
                            <div >
                                <label htmlFor="foodImg" className="text-sm">Food Image</label>
                                <input id="foodImg" type="url" name="foodImg" defaultValue={selectedFood?.foodImage} placeholder="Food Image" required className="w-full rounded-md border-slate-900 border ring-inset p-3 " />
                            </div>
                            <div >
                                <label htmlFor="foodQuantity" className="text-sm">Food Quantity
                                </label>
                                <input id="foodQuantity" type="number" name="foodQuantity" defaultValue={selectedFood?.foodQuantity} placeholder="Food Quantity" required className="w-full rounded-md border-slate-900 border ring-inset p-3 " />
                            </div>

                            <div className="  sm:col-span-3">
                                <label htmlFor="location" className="text-sm">Pickup Location</label>
                                <input id="location" type="text" name="location" defaultValue={selectedFood?.pickupLocation} placeholder="Pickup Location" required className="w-full rounded-md border-slate-900 border ring-inset p-3 " />
                            </div>
                            <div >
                                <label htmlFor="expire" className="text-sm">Expired Date</label>
                                <input id="expire" name="expired" defaultValue={selectedFood?.expiredDateTime} placeholder="Expired Date" required className="w-full rounded-md border-slate-900 border	ring-inset p-3 " />
                            </div>
                            <div >
                                <label htmlFor="donarName" className="text-sm">Donator Name</label>
                                <input id="donarName" type="text" value={selectedFood?.donatorName} readOnly placeholder="Donator Email" className="w-full rounded-md border-slate-900 border ring-inset p-3 " />
                            </div>
                            <div>
                                <label htmlFor="expire" className="text-sm">Donator Email</label>
                                <input id="expire" type="email" value={selectedFood?.donatorEmail} readOnly placeholder="Donator Email" className="w-full rounded-md border-slate-900 border ring-inset p-3 " />
                            </div>
                            <div>
                                <label htmlFor="notes" className="text-sm">Additional Notes</label>
                                <input id="notes" type="text" name="notes" defaultValue={selectedFood?.additionalNotes} placeholder="Additional Notes" required className="w-full rounded-md border-slate-900 border	ring-inset p-3 " />
                            </div>
                            <button type="submit" className="btn  bg-[#85B935] dark:text-white text-slate-900 w-full mt-4">Update</button>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ManageMyFoods;