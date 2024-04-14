import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

export default function Footer(){
    return (
        <footer className='flex flex-col items-center space-y-5 bg-slate-700 text-white p-10'>

            <h2 className=' text-4xl'>Leith Chakroun</h2>

            <h3>Front-end designer and developer</h3>

            <ul className='flex space-x-5'>
                <li>
                    <a href="https://github.com/GnomeApprenti" target="_blank">
                        <img src={github} alt="" className="h-10"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/leith-chakroun-5178a81b1/" target="_blank">
                        <img src={linkedin} alt="" className="h-10"/>
                    </a>
                </li>
            </ul>

        </footer>

    )
}