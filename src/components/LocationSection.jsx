const locations = [
    {
        name: "Citra Garden 6",
        address: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        distance: 9.5
    },
    {
        name: "Emporium Mall",
        address: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        distance: 7.6
    },
    {
        name: "Puri Indah Mall",
        address: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        distance: 4.8
    },
    {
        name: "Lippo Mall Puri",
        address: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        distance: 4.4
    },
    {
        name: "Terminal 3 Ultimate",
        address: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        distance: 9.2
    }
]

function LocationSection() {
    return (
        <div className="px-5 mt-7">
            <p className="text-2xl font-bold">Outlet Location</p>
            <p className="text-slate-800">Explore your options</p>
            <div className="flex flex-col gap-3 mt-6">
                {locations.map((el, index) => {
                    return <LocationCard 
                        item={el}
                        key={index}
                    />
                })}
            </div>
            <p className="text-orange-500 font-bold text-xl mt-10">SEE ALL</p>
        </div>
    )
}

function LocationCard({ item }) {
    return (
        <div className="border-b-2 border-slate-200 py-2">
            <p className="text-xl text-slate-800 font-semibold">{item.name}</p>
            <p className="text-slate-400">
                {item.address}
            </p>
            <div className="text-slate-400 flex items-center gap-4 mt-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>{item.distance} Km</p>
            </div>
        </div>
    )
}

export default LocationSection
