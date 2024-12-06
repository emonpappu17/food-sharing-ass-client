import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <section className="flex items-center h-screen">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl ">
                            <span className="sr-only">Error</span>{error.status}
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">{error.error.message}</p>
                        <p className="mt-4 mb-8 ">But don not worry, you can find plenty of other things on our homepage.</p>
                        <Link to='/'>
                            <button className="btn bg-[#85B935] w-full text-white">Back to homepage</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;