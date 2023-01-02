
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <>
        <div className=" h-screen flex justify-center flex-col items-center space-y-4">
            {/* <p className=" font-main text-2xl">OOPS</p> */}
            <h1 className="text-3xl font-banner">Error <span className=" text-yellow-500 font-bold font-anton">404</span> </h1>
            <p className=" text-2xl tracking-wider">Page Not Found </p>

            <Link to="/" className=" bg-black px-6 py-2 text-xl text-white rounded-lg">Go Home</Link>
        </div>
        </>
    )
}

export default NotFound;