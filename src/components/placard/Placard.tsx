import '../../index.css';
interface PlacardProps {
    title:string
    artist:string
    location:string
}

export default function Placard({title, artist, location}:PlacardProps) {
    return (
        <div className="space-y-2 mb-4">
            <p className="text-lg font-semibold">{title}</p>
            <p>{artist}</p>
            <p>{location}</p>
        </div>
    )
}