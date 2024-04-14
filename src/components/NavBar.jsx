import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <div className="bg-slate-700 flex justify-between p-4">
            <div>
                <Link to="/"> 
                    <img src={logo} className=" h-8" />
                </Link>
            </div>
            <div className=' text-white flex space-x-6 mr-14'>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}