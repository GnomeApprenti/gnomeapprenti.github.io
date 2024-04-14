import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
        <header className="flex p-10 bg-slate-700 text-white space-x-8 border">
    
            <div className="flex flex-col items-center space-y-8 justify-center">
                <div className="text-slate-700 bg-white w-min px-2 text-xl">WELCOME</div>
                <h1 className=" text-7xl">Leith Chakroun</h1>
                <h2 className=" py-10 font-bold w-2/3 text-3xl text-center">I am an innovative front-end developer who loves to build human-friendly interfaces.</h2>
    
                <div className="flex space-x-8 ">
                    <Link to="/portfolio" className="border rounded-lg p-3">View my work</Link>
                    <Link to="/contact" className="border rounded-lg p-3">Get in touch</Link>
                </div>
    
            </div>
    
            <div>
                <img src="https://jvflux.fr/images/4/47/Lamasticot.PNG" alt="" />
            </div>
    
        </header>
        </div>
    )
}
export default Home;