import { useMutation } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { addFood } from "../../Hooks/Foods";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import adding from '../../assets/adding.json'

const AddFood = () => {
    const { user } = useAuth()
    // const foodItems = [
    //     {
    //         foodName: "Fresh Apples",
    //         foodImage: "https://i.ibb.co.com/qddvDRZ/pexels-cenali-2487443.jpg",
    //         foodQuantity: 10,
    //         pickupLocation: "123 Main Street, Dhaka",
    //         expiredDateTime: "Thu Nov 30 2023",
    //         additionalNotes: "These are fresh and juicy apples collected directly from the local market. They are perfect for immediate consumption or juicing.",
    //         donatorImage: "https://i.ibb.co.com/C5dL0SW/pexels-pixabay-415829.jpg",
    //         donatorName: "Ayesha Rahman",
    //         donatorEmail: "ayesha.rahman@gmail.com",
    //         foodStatus: "available"
    //     },
    //     {
    //         foodName: "Vegetable Soup",
    //         foodImage: "https://i.ibb.co.com/TKWGWc5/pexels-foodie-factor-162291-539451.jpg",
    //         foodQuantity: 5,
    //         pickupLocation: "45 Gulshan Avenue, Dhaka",
    //         expiredDateTime: "Fri Dec 01 2023",
    //         additionalNotes: "Freshly made vegetable soup containing carrots, potatoes, and beans. Stored in sterilized containers to ensure hygiene.",
    //         donatorImage: "https://i.ibb.co.com/W6HPhgv/pexels-andrewperformance1-697509.jpg",
    //         donatorName: "Rifat Karim",
    //         donatorEmail: "rifat.karim@yahoo.com",
    //         foodStatus: "available"
    //     },
    //     {
    //         foodName: "Rice and Lentils",
    //         foodImage: "https://i.ibb.co.com/BP7jWt7/pexels-ella-olsson-572949-1640775.jpg",
    //         foodQuantity: 8,
    //         pickupLocation: "78 Banani Road, Dhaka",
    //         expiredDateTime: "Sat Dec 02 2023",
    //         additionalNotes: "Cooked rice and lentils packed in eco-friendly containers. Ideal for a quick and nutritious meal.",
    //         donatorImage: "https://i.ibb.co.com/GvMVfXG/pexels-alipazani-2613260.jpg",
    //         donatorName: "Mehzabin Akter",
    //         donatorEmail: "mehzabin.akter@hotmail.com",
    //         foodStatus: "available"
    //     },
    //     {
    //         foodName: "Chicken Curry",
    //         foodImage: "https://i.ibb.co.com/TcWKBG3/pexels-catscoming-674574.jpg",
    //         foodQuantity: 4,
    //         pickupLocation: "101 Dhanmondi, Dhaka",
    //         expiredDateTime: "Sun Dec 03 2023",
    //         additionalNotes: "Delicious homemade chicken curry with traditional spices. Contains nuts, so please consider allergies before consuming.",
    //         donatorImage: "https://i.ibb.co.com/yf3qGVV/pexels-italo-melo-881954-2379004.jpg",
    //         donatorName: "Shakil Ahmed",
    //         donatorEmail: "shakil.ahmed@outlook.com",
    //         foodStatus: "available"
    //     },
    //     {
    //         foodName: "Banana Bread",
    //         foodImage: "https://i.ibb.co.com/16JjDD3/pexels-marcel-fiedler-400737-1079020.jpg",
    //         foodQuantity: 3,
    //         pickupLocation: "58 Uttara Sector 4, Dhaka",
    //         expiredDateTime: "Mon Dec 04 2023",
    //         additionalNotes: "Homemade banana bread baked with organic ingredients. No preservatives or artificial flavors used.",
    //         donatorImage: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         donatorName: "Tamanna Sultana",
    //         donatorEmail: "tamanna.sultana@gmail.com",
    //         foodStatus: "available"
    //     },
    //     {
    //         foodName: "Boiled Eggs",
    //         foodImage: "https://i.ibb.co.com/h954r5X/pexels-janetrangdoan-824635.jpg",
    //         foodQuantity: 12,
    //         pickupLocation: "15 Bashundhara R/A, Dhaka",
    //         expiredDateTime: "Tue Dec 05 2023",
    //         additionalNotes: "Farm-fresh boiled eggs carefully packed in cartons. Perfect for a protein-packed snack or meal.",
    //         donatorImage: "https://i.ibb.co.com/kK6CcmB/pexels-cottonbro-6626903.jpg",
    //         donatorName: "Rahi Chowdhury",
    //         donatorEmail: "rahi.chowdhury@gmail.com",
    //         foodStatus: "available"
    //     },
    //     {
    //         foodName: "Packaged Biscuits",
    //         foodImage: "https://i.ibb.co.com/dm7XT29/pexels-ekaterina-bolovtsova-5702689.jpg",
    //         foodQuantity: 20,
    //         pickupLocation: "22 Mirpur Road, Dhaka",
    //         expiredDateTime: "Thu Nov 10 2023",
    //         additionalNotes: "Unopened and sealed biscuit packets with a long shelf life. Great for kids and adults alike.",
    //         donatorImage: "https://i.ibb.co.com/Ny9zKYT/pexels-linkedin-2182970.jpg",
    //         donatorName: "Arman Hossain",
    //         donatorEmail: "arman.hossain@gmail.com",
    //         foodStatus: "available"
    //     }
    // ];

    const mutation = useMutation({
        mutationFn: (food) => addFood(food),
        onSuccess: (data) => {
            console.log(data);
            Swal.fire({
                title: "Food added successfully",
                text: "Success!",
                icon: "success"
            });
        },
        onError: (err) => {
            console.log(err);
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const foodName = form.foodName.value
        const foodImage = form.foodImg.value
        const foodQuantity = form.foodQuantity.value
        const pickupLocation = form.location.value
        const expiredDateTime = form.expired.value
        const additionalNotes = form.notes.value
        const donatorImage = user.photoURL
        const donatorName = user.displayName
        const donatorEmail = user.email
        const foodStatus = "available"
        const food = { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, donatorImage, donatorName, donatorEmail, foodStatus }
        // console.log(food);
        mutation.mutate(food, { onSuccess: e.target.reset() })
    }

    return (
        <section className="p-6  mb-10 ">
            <h1 className="text-5xl font-bold text-center mb-10">Add<span className="text-[#85B935]">Food</span></h1>
            <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12 ">
                <fieldset className="grid grid-cols-4 gap-6 ">
                    <div className="col-span-full lg:col-span-2 flex justify-center items-center ">
                        <Lottie className="w-96" animationData={adding}></Lottie>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-2">
                        <div className="col-span-full sm:col-span-3 ">
                            <label htmlFor="foodName" className="text-sm">Food Name</label>
                            <input id="foodName" type="text" name="foodName" placeholder="Food Name" required className="w-full rounded-md border-slate-900 border	ring-inset p-3" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="foodImg" className="text-sm">Food Image</label>
                            <input id="foodImg" type="url" name="foodImg" placeholder="Food Image" required className="w-full rounded-md border-slate-900 border	ring-inset p-3 " />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="foodQuantity" className="text-sm">Food Quantity
                            </label>
                            <input id="foodQuantity" type="number" name="foodQuantity" placeholder="Food Quantity" required className="w-full rounded-md border-slate-900 border	ring-inset p-3 " />
                        </div>
                        <div className="col-span-full  sm:col-span-3">
                            <label htmlFor="location" className="text-sm">Pickup Location</label>
                            <input id="location" type="text" name="location" placeholder="Pickup Location" required className="w-full rounded-md border-slate-900 border	ring-inset p-3 " />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="expire" className="text-sm">Expired Date</label>
                            <input id="expire" type="date" name="expired" placeholder="Expired Date" required className="w-full rounded-md border-slate-900 border	ring-inset p-3 " />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="expire" className="text-sm">Donator Email</label>
                            <input id="expire" type="email" value={user?.email || ''} readOnly placeholder="Donator Email" className="w-full rounded-md border-slate-900 border	ring-inset p-3 " />
                        </div>
                        <div className=" col-span-full">
                            <label htmlFor="notes" className="text-sm">Additional Notes</label>
                            <input id="notes" type="text" name="notes" placeholder="Additional Notes" required className="w-full rounded-md border-slate-900 border	ring-inset p-3 " />
                        </div>
                        <button type="submit" disabled={mutation.isPending} className="btn col-span-full bg-[#85B935] dark:text-white text-slate-900">{mutation.isPending ? 'Adding..' : 'Add Food'}</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddFood;