interface ImageProps {
    imageUrl:string
}

export default function Display({imageUrl}:ImageProps) {
    return (
        // TODO fix presentation layout and padding.
        // We can simply pass the url into image. So in a deployment we would need to host these via s3 bucket perhaps
            <div className="w-1/2 mr-6">
                <img 
                    src={imageUrl}
                    alt="artwork-display"
                />
            </div>
    )
}