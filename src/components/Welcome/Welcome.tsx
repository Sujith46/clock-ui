import { Link } from "react-router-dom";

import "./Welcome.scss";

const Welcome = () => {
    return (
        <div className="welcome">
            <h1>👋 Hey, Welcome back!</h1>
            <Link to="/clock" className="btn">Checkout out the cool clock</Link>
        </div>
    )
}

export default Welcome