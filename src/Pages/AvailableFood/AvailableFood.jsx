import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loader from '../../assets/loader.json'
import { usedAvailableFoodsSort } from "../../Hooks/Foods";
import { useState } from "react";

import AvailableCard from "./AvailableCard";
import PageTitle from "../../Components/PageTitle";

const AvailableFood = () => {
    const [sort, setSort] = useState('foodName');
    const [search, setSearch] = useState('');

    //Tanstack Query
    const { isPending, error, data } = useQuery({
        queryKey: ['foodSortedData', sort, search],
        queryFn: () => usedAvailableFoodsSort(sort, search)
    })

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="container mx-auto">
            <PageTitle title={'AvailableFood'}></PageTitle>
            <div className="flex justify-between items-center my-5">
                <h1 className="">Available food: {data?.length}</h1>
                <div className="flex items-center ">
                    <input
                        type="text"
                        placeholder="Search food..."
                        className="input input-bordered w-full max-w-xs"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                    <details className="dropdown dropdown-end">
                        <summary className="btn m-1 bg-[#85B935] dark:text-white text-slate-900 whitespace-nowrap">Sort by</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1]  p-5 shadow whitespace-nowrap space-y-4 text-center">
                            <li className={`cursor-pointer ${sort === 'foodName' ? 'text-[#85B935]' : ''}`} onClick={() => setSort('foodName')}>Name</li>
                            <li className={`cursor-pointer ${sort === 'foodQuantity' ? 'text-[#85B935]' : ''}`} onClick={() => setSort('foodQuantity')}>Quantity</li>
                            <li className={`cursor-pointer ${sort === 'expire' ? 'text-[#85B935]' : ''}`} onClick={() => setSort('expire')}>Expire</li>
                        </ul>
                    </details>
                </div>
            </div>
            {isPending &&
                <div className="flex items-center justify-center h-20">
                    <Lottie className="w-20" animationData={loader}></Lottie>
                </div>}
            {!isPending && data.length === 0 &&
                <div className="text-center text-gray-500 my-5">
                    No match found
                </div>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-4 lg:px-0">
                {
                    data?.map(card => <AvailableCard key={card._id} card={card}></AvailableCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFood;





// import { useQuery } from "@tanstack/react-query";
// import Lottie from "lottie-react";
// import loader from '../../assets/loader.json';
// import { usedAvailableFoodsSort } from "../../Hooks/Foods";
// import { useState } from "react";
// import AvailableCard from "./AvailableCard";

// const AvailableFood = () => {
//     const [sort, setSort] = useState('foodName');
//     const [search, setSearch] = useState(''); // State for search input

//     // Tanstack Query with sort and search
//     const { isFetching, data = [], error } = useQuery({
//         queryKey: ['foodSortedData', sort, search],
//         queryFn: () => usedAvailableFoodsSort(sort, search),

//     });

//     if (error) return <div className="text-red-500">An error has occurred: {error.message}</div>;

//     return (
//         <div className="container mx-auto px-4 lg:px-0">
//             <div className="flex justify-between items-center my-5">
//                 <h1 className="">Available food: {data?.length}</h1>
//                 <div className="flex items-center space-x-4">
//                     {/* Search Input */}
//                     <input
//                         type="text"
//                         placeholder="Search food..."
//                         className="input input-bordered w-full max-w-xs"
//                         value={search}
//                         onChange={(e) => {
//                             setSearch(e.target.value);
//                         }}
//                     />
//                     <details className="dropdown dropdown-end">
//                         <summary className="btn m-1 bg-[#85B935] dark:text-white text-slate-900 whitespace-nowrap">Sort by</summary>
//                         <ul className="menu dropdown-content bg-base-100 rounded-box z-[1]  p-5 shadow whitespace-nowrap space-y-4 text-center">
//                             <li
//                                 className={`cursor-pointer ${sort === 'foodName' ? 'text-[#85B935]' : ''}`}
//                                 onClick={() => setSort('foodName')}
//                             >
//                                 Name
//                             </li>
//                             <li
//                                 className={`cursor-pointer ${sort === 'foodQuantity' ? 'text-[#85B935]' : ''}`}
//                                 onClick={() => setSort('foodQuantity')}
//                             >
//                                 Quantity
//                             </li>
//                             <li
//                                 className={`cursor-pointer ${sort === 'expire' ? 'text-[#85B935]' : ''}`}
//                                 onClick={() => setSort('expire')}
//                             >
//                                 Expire
//                             </li>
//                         </ul>
//                     </details>
//                 </div>
//             </div>
//             {isFetching && (
//                 <div className="flex items-center justify-center h-20">
//                     <Lottie className="w-20" animationData={loader} />
//                 </div>
//             )}
//             {!isFetching && data.length === 0 && (
//                 <div className="text-center text-gray-500 my-5">
//                     No match found
//                 </div>
//             )}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
//                 {data?.map(card => <AvailableCard key={card._id} card={card}></AvailableCard>)}
//             </div>
//         </div>
//     );
// };

// export default AvailableFood;
