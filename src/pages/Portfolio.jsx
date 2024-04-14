import Project from '../components/Project'

export default function Portfolio(){

    return (
    <div className="bg-slate-700 text-white border">

        <header className = "">
            <div className = "flex flex-col space-y-10 p-10">
                <h1 className="text-7xl">Portfolio</h1>
                <h2 className="text-4xl font-bold">Below you can see a selection of my web design and front-end development projects.</h2>
            </div>
            
        </header>
            
            
           
        <main>

        <section className = " bg-slate-400">

            <div className = "grid grid-cols-3 p-10">

                <Project 
                    image="../../public/assets/img/project-smoothie.jpg" 
                    title="Smooth Smoothies" 
                    text="A multi-column, flexbox-based page layout and hero image with a tinted overlay." 
                    link="../../public/portfolio/smoothies/index.html"
                />

                <Project 
                    image="../../public/assets/img/project-fashion.jpg" 
                    title="Snazzy Fashion" 
                    text="A web page for a fashion retailer with a background video that plays in a continuous loop." 
                    link="../../public/portfolio/fashion/index.html"
                />

                <Project 
                    image="../../public/assets/img/store.png" 
                    title="Online Store" 
                    text="An online store offering books on web design with affiliate links to Amazon." 
                    link="../../public/portfolio/../store/index.html"
                />

                <Project 
                    image="../../public/assets/img/project-multi-col.png" 
                    title="Multi-column Layouts" 
                    text="A gallery of multi-column, reponsive layouts." 
                    link="../../public/portfolio/project-multi-column/index.html"
                />

                <Project 
                    image="../../public/assets/img/project-hero.png" 
                    title="Hero Block Gallery" 
                    text="A gallery of hero block elements with split-screen layouts and duotone images." 
                    link="../../public/portfolio/project-hero/index-1.html"
                />

                <Project 
                    image="../../public/assets/img/project-crypto-wallet.jpg" 
                    title="Crypto Wallet" 
                    text="A dark-themed responsive single-page website for a fictitious crypto wallet." 
                    link="../../public/portfolio/crypto-wallet/index.html"
                />


            </div> 
        </section>

        </main>
    </div>
    )

}