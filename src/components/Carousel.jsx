import { useState } from "react"

const images = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
]

function Carousel() {
    const [current, setCurrent] = useState(0)

    function prev() {
        setCurrent((current) => (current === 0 ? images.length - 1 : current - 1))
    }
    function next() {
        setCurrent((current) => (current === images.length - 1 ? 0 : current + 1))
    }
    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((el, index) => {
                    return <img src={el} key={index} className="object-cover" alt="" />
                })}
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-[40px] h-[40px] absolute top-[180px] left-4 rotate-90 cursor-pointer"
                onClick={prev}
            >
                <path
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-[40px] h-[40px] top-[180px] absolute right-4 rotate-[-90deg] cursor-pointer"
                onClick={next}
            >
                <path
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
                />
            </svg>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {images.map((_, i) => (
                        <div
                            className={`
                            transition-all w-3 h-3 bg-white rounded-full cursor-pointer
                            ${current === i ? "p-2" : "bg-opacity-50"}
                            `}
                            key={i}
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel
