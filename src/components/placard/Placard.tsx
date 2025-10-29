import { motion } from "framer-motion"
import { PlacardProps, ColorDot } from "./type";

export default function Placard({title, artist, location, description, colors}:PlacardProps) {
    return (
        <div className="space-y-2 mb-4">
            <p className="text-lg font-semibold">{title}</p>
            <p className='font-sans'>{artist}</p>
            <p className='font-sans'>{location}</p>
            <p className='font-sans'>{description}</p>
            <ColorPalette profile={colors.profile} palette={colors.palette}/>
        </div>
    )
}

function ColorPalette({profile, palette}: ColorDot) {
    if(!profile || !palette) {
        return;
    }

    const colorArray = palette.split(",").map(color => color.trim());

    // Note: AIC returns in hls format, but this could change if others do hsl format
    if (profile.toLowerCase() === "hls") {
    const [h, l, s] = colorArray.map(Number);
    const hlsColor = `hsl(${h}, ${s}%, ${l}%)`;

        return (
            <motion.div
            className="w-10 h-3 rounded-full border border-gray-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ backgroundColor: hlsColor }}
            title="Dominant color"
            />
        );
    }


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
                    title={color}              
                />
            ))}
        </motion.span>
    )
}