import { Link } from "react-router-dom";
import AddCarPage from "../pages/AddCarPage";


const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to='/add'>New Car</Link>
            {/* <AddCarPage /> */}
        </div>
    )
}

export default Navbar;