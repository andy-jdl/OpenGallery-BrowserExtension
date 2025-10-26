import { motion } from "framer-motion"
import { PlacardProps, ColorDotsProps } from "./type";

export default function Placard({title, artist, location, description, related}:PlacardProps) {
    return (
        <div className="space-y-2 mb-4">
            <p className="text-lg font-semibold">{title}</p>
            <p className='font-sans'>{artist}</p>
            <p className='font-sans'>{location}</p>
            <p className='font-sans'>{description}</p>
            <ColorPalette colors={related}/>
        </div>
    )
}

function ColorPalette({colors}: ColorDotsProps) {
    
    if(colors.length <= 1) {
        return;
    }

    const colorArray = colors.split(",").map(color => color.trim());

    return (
        <motion.span
            className="inline-flex items-center ml-2 align-middle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {colorArray.map((color) => (
                <span
                    key={color}
                    className="inline-block w-3 h-3 rounded-full border border-gray-300 mx-[2px]"
                    style={{ backgroundColor: color }}                
                />
            ))}
        </motion.span>
    )
}