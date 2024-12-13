import { Link } from "react-router-dom";

const Breadcrumb = ({ location }) => {

    const pathnames = location.pathname.split('/').filter(x => x)
    //     console.log(location.pathname.split('/'));
    // console.log(pathnames);
    //     if (pathnames.length === 0) {
    //         // If the current route is the home route ('/'), do not render the breadcrumbs
    //         return null;
    //     }

    return (
        <div className="breadcrumbs text-white">
            <ul>
                <li>
                    <Link className="font-semibold text-[#85B935]" to='/'>Home</Link>
                </li>
                {
                    pathnames.map((value, index) => {
                        // const to = `/${pathnames.slice(0, index + 1).join('/')}`
                        const isLast = index === pathnames.length - 1;
                        return (
                            <li key={index} className={!isLast ? 'font-semibold text-[#85B935]' : 'text-gray-300'}>
                                {isLast ? <span>{value}</span> : <Link >{value}</Link>}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Breadcrumb;

