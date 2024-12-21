import { updateProfile } from "firebase/auth";
import useAuth from "../../Hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import PageTitle from "../../Components/PageTitle";

const Register = () => {

    const { createUser, user, setUser } = useAuth()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                updateProfile(res.user, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    console.log('Profile updated!');
                    setUser({ ...user, displayName: name, photoURL: photo })
                    e.target.reset();
                    navigate('/')
                    Swal.fire({
                        title: "Success",
                        text: "Successfully Register",
                        icon: "success"
                    });
                }).catch((error) => {
                    console.log(error);
                });
            })
            .catch(err => {
                toast(err.message)
            })
    }

    return (
        <div className="px-5 pt-40">
            <PageTitle title={'Register'}></PageTitle>
            <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div className="my-10 shadow-xl mx-auto container flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 bg-gray-100 dark:text-gray-100 text-gray-800">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign up</h1>
                        <p className="text-sm dark:text-gray-400 text-gray-600">Sign up to create your account</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                                <input required type="text" name="name" id="name" placeholder="name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 border-gray-300 dark:bg-gray-900 bg-gray-50 dark:text-gray-100 text-gray-800" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input required type="email" name="email" id="email" placeholder="abc@.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 border-gray-300 dark:bg-gray-900 bg-gray-50 dark:text-gray-100 text-gray-800" />
                            </div>
                            <div>
                                <label htmlFor="photo" className="block mb-2 text-sm">Photo URL</label>
                                <input required type="url" name="photo" id="photo" placeholder="photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 border-gray-300 dark:bg-gray-900 bg-gray-50 dark:text-gray-100 text-gray-800" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                </div>
                                <input required type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 border-gray-300 dark:bg-gray-900 bg-gray-50 dark:text-gray-100 text-gray-800" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#85B935] dark:text-gray-900 text-gray-50">Sign up</button>
                            </div>
                            <p className="px-6 text-sm text-center dark:text-gray-400 text-gray-600">Already have an account?
                                <Link to='/login' className="hover:underline dark:text-violet-400 text-violet-600">Sign in</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Register;