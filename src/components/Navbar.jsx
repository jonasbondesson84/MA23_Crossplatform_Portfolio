import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            {/* <h1>Portfolio</h1> */}
            <div className="links">
                <Link to='/'>
                    
                    <div className="links">
                        Home
                    
                    <div class="underline"></div>
                    </div>
                </Link>
                <Link to='/projects'>
                    <div className="links">
                        Projects
                        <div class="underline">
                        </div>
                    </div>
                </Link>
                <Link to='/skills'>
                    <div className="links">
                        Skills
                        <div class="underline">
                        </div>
                    </div>
                </Link>
                <Link to='/about'>
                    <div className="links">
                        About me
                        <div class="underline">
                        </div>
                    </div>
                </Link>
                <Link to='/contact'>
                    <div className="links">
                        Contact me
                        <div class="underline">
                        </div>
                    </div>
                </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
<div className="navbar">

</div>