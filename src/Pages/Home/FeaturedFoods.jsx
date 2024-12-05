import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import loader from '../../assets/loader.json'
import Lottie from "lottie-react";
import useFoods from "../../Hooks/useFoods";
import axios from "axios";

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
    // const url = 'http://localhost:5000/foods'

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
    console.log(data);


    return (
        <div>

        </div>
    );
};

export default FeaturedFoods;