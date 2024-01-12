const menu = [
    {
        img: "https://cdn.icon-icons.com/icons2/1526/PNG/512/basket_106594.png",
        name: "Order",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/172/172119.png",
        name: "Redeem",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/5738/5738102.png",
        name: "My Voucher",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/3649/3649801.png",
        name: "Priviledge",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/4206/4206324.png",
        name: "History",
    },
    {
        img: "https://d29fhpw069ctt2.cloudfront.net/icon/image/37750/preview.svg",
        name: "Contact Us",
    },
]
function MenuSection() {
    return (
        <div className="p-4">
            <div className="shadow-md rounded-lg p-6">
                <div className="flex justify-between">
                    <span className="font-bold">Your Level</span>
                    <span className="font-bold text-orange-600">LEARN MORE</span>
                </div>

                <p>
                    Spend <b>3.500,001</b> by <b>23 Nov 2024</b> to reach <b>Gold</b>
                </p>
            </div>
            <div className="shadow-md rounded-lg p-3 mt-5">
                <div className="flex justify-between">
                    <span className="font-bold">Bakmi GM Points</span>
                    <span className="font-bold">40</span>
                </div>
                <p className="text-slate-600">
                    <b>40</b> will expire on <b>22 Feb 2024</b>.{" "}
                    <a href="#" className="underline text-blue-500">
                        See Details
                    </a>
                </p>
            </div>
            <div className="flex flex-wrap  mt-6 justify-around">
                {menu.map((el, index) => {
                    return <MenuIcon 
                        item={el}
                        key={index}
                    />
                })}
            </div>
            <div className="bg-blue-600 rounded-xl py-9 px-5 flex flex-col items-end gap-10 mt-6">
                <p className="text-white text-right text-2xl font-bold w-3/5 right-0">Dapatkan 5 poin dengan mengajak teman kamu</p>
                <button className="text-blue-500 bg-white rounded-xl px-5 py-4 font-bold">REFER NOW</button>
            </div>
        </div>
    )
}

function MenuIcon({item}) {
    return (
        <div className="w-[30%] my-4">
            <img src={item.img} className="w-[70px] h-[70px] m-auto" alt="" />
            <p className="text-center text-slate-600 mt-3">{item.name}</p>
        </div>
    )
}

export default MenuSection
