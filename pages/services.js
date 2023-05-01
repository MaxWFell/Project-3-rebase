import Service from "@/components/Service";

function services({ services }) {

    return (<>
        <div style={{
            // linear gradient from #adc178 to #adc179
            backgroundImage: "linear-gradient(90deg, #adc178 0%, #adc179 100%)",
        }}>

            <div className="container">
                <h1 className="py-4 text-light">Explore our services!</h1>
                {services.map((service) => (
                    <div key={service.id}>
                        <Service service={service} />
                    </div>
                ))}
            </div>
            <div className='py-5'></div>
            <div className='py-5'></div>
        </div>
    </>);
}

export async function getStaticProps() {
    const services = [
        {
            id: 1,
            title: "Freshly Packaged with Care",
            description: "All orders are ready made fresh and tightly sealed, so you don't have to worry about any messes and most importantly contamination.",
        },
        {
            id: 2,
            title: "Super Fast Delivery",
            description: "Whether it maybe a date night, family gathering, or just you, you're in safe hands knowing we offer guaranteed next day delivery.",
        },
        {
            id: 3,
            title: "Options upon Options",
            description: "We offer a wide variety of cuisines for all types of Foodies. The only limitation is your cravings.",
        }
    ];

    return {
        props: {
            services,
        }
    }
}

export default services;