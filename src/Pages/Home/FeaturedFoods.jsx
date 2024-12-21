import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import loader from '../../assets/loader.json'
import Lottie from "lottie-react";
import useFoods from "../../Hooks/Foods";
// import axios from "axios";
import Card from "./Card";
import { Link } from "react-router";

const FeaturedFoods = () => {
    // const getFoods = async () => {
    //     try {
    //         const res = await useFoods();
    //         res.status === 200 ? res.data : [];
    //     }
    //     catch (error) {
    //         console.log(error);
    //         return [];
    //     }
    // }
    // const url = 'https://food-sharing-ass-server.vercel.app/foods'

    //Tanstack Query
    const { isPending, error, data } = useQuery({
        queryKey: ['foodData'],
        queryFn: useFoods,
        // // queryFn: async () => {
        //     const res = await useFoods();
        //     return res.data
        // },
        // refetchInterval: 1000, //one second por por data fetch kortase but joddi onno kono website/tab a chole jai then fetch kora bondo kore dibe shudu ai site a aslei data fetch korbe auto 
        // refetchIntervalInBackground: true, //onno website/tab a chole geleo data background a fetch hote thakbe
    })

    if (isPending) return <div className="flex items-center justify-center h-20"><Lottie className="w-20" animationData={loader}></Lottie></div>

    if (error) return 'An error has occurred: ' + error.message
    // console.log(data);

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-5xl font-bold text-center mb-10">Featured <span className="text-[#85B935]">Foods</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-4 lg:px-0">
                {
                    data.map(card => <Card key={card._id} card={card}></Card>)
                }
            </div>
            <div className="flex justify-center">
                <Link to='/availableFood'>
                    <button className="mt-10 btn bg-[#85B935] w-full dark:text-white text-slate-900">Show All </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;