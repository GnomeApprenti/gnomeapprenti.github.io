import ContactForm from '../components/ContactForm'

export default function Contact(){
    return(
        <div className='border'>
            <header className='bg-slate-700 text-white p-10 '>
                <div className=''>
                    <h1 className='text-7xl'>Get in touch</h1>
                    <h2 className='text-xl font-extrabold mt-10'>Have a project you would like to discuss? Let's make something great together! Email me at <a href="mailto:lchakroun2306@gmail.com?subject=Mail from my Personal Website" className='text-slate-400'>lchakroun2306@gmail.com</a> or use the form below to let me know a little more about your objectives and I'll get back to you.</h2>
                </div>
                
            </header>
            <div className='flex bg-slate-400 p-10 space-x-5'>
                <img src='https://lunevedy.com/ui/assets/img/800x900-typing.jpg' className='w-1/3'></img>
                <ContactForm/>
            </div>
        </div>
    )
}