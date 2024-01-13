import crown from "../assets/crown.png"

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
                <div className="flex gap-5 justify-center mt-3 items-start py-5 relative">
                    <div className="relative">
                        <img src={crown} className="w-[50px] h-[50px] mx-auto opacity-80" alt="" />
                        <p className="text-center font-bold text-slate-800 mt-3">Silver</p>
                        <p className="text-white text-center font-bold bg-green-500 w-[25px] h-[25px] rounded-full absolute right-[-8px] top-8">
                            ✓
                        </p>
                    </div>
                    <div className="border-b-2 border-black w-[40px] h-[35px]"></div>
                    <div className="opacity-60">
                        <Lock name={"Gold"} />
                        <p className="text-center font-bold text-slate-800 mt-3">Gold</p>
                    </div>
                    <div className="border-b-2 border-black w-[40px] h-[35px]"></div>
                    <div className="opacity-60">
                        <Lock name={"Platinum"} />
                        <p className="text-center font-bold text-slate-800 mt-3">Platinum</p>
                    </div>
                    <div className="w-[23px] h-[23px] bg-white z-10 border-[6px] border-amber-200 rounded-full absolute bottom-[-8px] right-[-7px]"></div>
                    <div className="h-[8px] w-[100%] bg-slate-200 rounded-full absolute bottom-0"></div>
                </div>
                <p className="mt-4">
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
                    return <MenuIcon item={el} key={index} />
                })}
            </div>
            <div className="bg-blue-600 rounded-xl py-9 px-5 flex flex-col items-end gap-10 mt-6">
                <p className="text-white text-right text-2xl font-bold w-3/5 right-0">
                    Dapatkan 5 poin dengan mengajak teman kamu
                </p>
                <button className="text-blue-500 bg-white rounded-xl px-5 py-4 font-bold">
                    REFER NOW
                </button>
            </div>
        </div>
    )
}

function MenuIcon({ item }) {
    return (
        <div className="w-[30%] my-4">
            <img src={item.img} className="w-[70px] h-[70px] m-auto" alt="" />
            <p className="text-center text-slate-600 mt-3">{item.name}</p>
        </div>
    )
}

function Lock({ name }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className={`w-[50px] h-[50px] p-[9px] ${name === "Gold" && "bg-yellow-300"} ${
                name === "Platinum" && "bg-gray-300"
            } bg-opacity-60 rounded-full mx-auto`}
        >
            <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
            <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415" />
        </svg>
    )
}

export default MenuSection
