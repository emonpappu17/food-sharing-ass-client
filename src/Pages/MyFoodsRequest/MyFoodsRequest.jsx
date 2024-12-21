import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { cancelFood, requestedFood } from "../../Hooks/Foods";
import loader from '../../assets/loader.json'
import PageTitle from "../../Components/PageTitle";
import Swal from "sweetalert2";

const MyFoodsRequest = () => {
    const queryClient = useQueryClient();

    //Tanstack Query // Fetch requested food data
    const { isPending, error, data } = useQuery({
        queryKey: ['requestedFoodData'],
        queryFn: requestedFood,
    })

    // Mutation for cancel food
    const mutation = useMutation({
        mutationFn: (id) => cancelFood(id),
        onSuccess: (data, id) => {
            queryClient.setQueryData(['requestedFoodData'], (oldFoods) => {
                if (!oldFoods) return [];
                // Filter out the deleted food
                return oldFoods.filter(item => item._id !== id)
            })
            Swal.fire({
                title: "Cancel!",
                text: "Your food has been cancel.",
                icon: "success"
            });
        },
        onError: (err) => {
            console.log(err);
        }
    })
    
    if (isPending) return <div className="flex items-center justify-center h-20"><Lottie className="w-20" animationData={loader}></Lottie></div>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <PageTitle title={'MyFoodRequest'}></PageTitle>
            <div className="container p-2 mx-auto sm:p-4">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Requests: {data.length}</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup className="">
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="">
                            <tr className="text-left">
                                <th className="p-3">Food Name</th>
                                <th className="p-3">Donar Name</th>
                                <th className="p-3">Pickup Location</th>
                                <th className="p-3">Expire Date</th>
                                <th className="p-3">Request Date</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {data.map(food => <tr key={food._id} className="border-b border-opacity-20 ">
                                <td className="p-3 font-semibold text-base">
                                    <p>{food.foodName}</p>
                                </td>
                                <td className="p-3">
                                    <p>{food.donatorName}</p>
                                </td>
                                <td className="p-3">
                                    <p>{food.pickupLocation}</p>
                                </td>
                                <td className="p-3">
                                    <p>{food.expiredDateTime}</p>
                                </td>
                                <td className="p-3">
                                    <p>{food.requestDate}</p>
                                </td>
                                <td className="p-3 text-right">
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
                                                confirmButtonText: "Yes, cancel it!"
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    mutation.mutate(food._id)
                                                }
                                            })
                                        }}
                                    >Cancel</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyFoodsRequest;