const promos = [
    {
        img: "https://placehold.co/600x400",
        name: "PLATINUM Member 💎"
    },
    {
        img: "https://placehold.co/600x400",
        name: "GOLD Member ✨"
    },
    {
        img: "https://placehold.co/600x400",
        name: "Birthday Reward 🥳"
    },
    {
        img: "https://placehold.co/600x400",
        name: "Redeem Point 💰"
    },
    {
        img: "https://placehold.co/600x400",
        name: "Sign Up Reward 💰"
    },
    {
        img: "https://placehold.co/600x400",
        name: "Benefit GMania 💰"
    },
    {
        img: "https://placehold.co/600x400",
        name: "FAQ Member"
    },
]
function PromoSection() {
    return (
        <div className="px-6">
            <p className="text-2xl font-bold mt-5">Privileges</p>
            <p className="text-slate-800">Keep discovering our promo and news</p>
            <div className="flex flex-wrap justify-between">
                {promos.map((el, index) => {
                    return <PromoCard 
                        item={el}
                        key={index}
                    />
                })}
            </div>
        </div>
    )
}

function PromoCard({ item }) {
    return (
        <div className="w-[45%] my-5 rounded-xl shadow-lg overflow-hidden">
            <img src={item.img} className="w-[100%] h-auto aspect-square object-cover" alt="" />
            <div className="p-4">
                <p className="text-xl font-bold">{item.name}</p>
                <p className="text-slate-500 mt-3">Exp. 31 Dec 2024</p>
            </div>
        </div>
    )
}

export default PromoSection
