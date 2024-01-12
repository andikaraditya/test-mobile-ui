const products = [
    {
        img: "https://nilaigizi.com/assets/images/produk/produk_1578041377.jpg",
        name: "Es Teh Manis",
        point: 40
    },
    {
        img: "https://dcostseafood.id/wp-content/uploads/2021/12/ES-JERUK-murni.jpg",
        name: "Es Jeruk",
        point: 45
    },
]

function ProductSection() {
    return (
        <>
            <div className="flex justify-between px-5 mt-16 items-center">
                <div>
                    <p className="font-bold text-2xl">Redeem Your Rewards</p>
                    <p className="text-slate-600">Earn more to get your rewards</p>
                </div>
                <p className="text-orange-600 font-bold text-xl">SEE ALL</p>
            </div>
            <div className="w-[100%] flex mt-5 gap-5 px-5 overflow-x-scroll">
                {products.map((el, index) => {
                    return <ProductCard 
                        item={el}
                        key={index}
                    />
                })}
            </div>
        </>
    )
}

function ProductCard({item}) {
    return (
        <div className="w-[200px]">
            <img src={item.img} className="border-2 rounded-xl w-[200px] h-[200px] object-fill" alt="" />
            <p className="font-bold mt-3">{item.name}</p>
            <p className="text-orange-600 font-bold">{item.point} Pts</p>
        </div>
    )
}

export default ProductSection
