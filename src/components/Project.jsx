export default function Project({image, title, text, link}){
    return(
        <div className = "p-10 flex flex-col space-y-3 text-slate-700">
				<a href={link}><img src={image} alt="Placeholder image"></img></a>

				<h3 className=" font-extrabold text-3xl">{title}</h3>
				<p>{text}</p>
				<a href={link} className = "text-white text-xl border bg-slate-700 text-center p-3 rounded-2xl"><span>View project</span><i className = ""></i></a>
		</div>
    )
}