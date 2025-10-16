interface ImageProps {
    imageUrl:string
}

export default function Display({imageUrl}:ImageProps) {
    return (
        <div className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center bg-gray-100 rounded-xl shadow-sm overflow-hidden">
            <img
            src={imageUrl}
            className="object-contain w-full h-full"
            loading="eager"
            />
        </div>
    )
}