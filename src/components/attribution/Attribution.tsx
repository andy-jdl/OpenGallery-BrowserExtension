import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AttributionProps {
    hasDescription: boolean;
    attribution: string;
}

export default function Attribution({ hasDescription, attribution }: AttributionProps) {
    const [hovered, setHovered] = useState(false);
    // TODO Icon not accessible
    return (
        <div
            className="absolute bottom-6 right-6"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div aria-label="More Information" className="flex items-center justify-center rounded-full w-6 h-6 bg-gray-100 text-gray-600 font-semibold cursor-pointer hover:bg-gray-200 transition">
                i
            </div>

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-8 right-0 w-64 bg-white text-gray-700 text-sm shadow-lg rounded-lg p-3 border border-gray-200 z-50"
                    >
                        { hasDescription && 
                            <p className="font-sans text-xs">Description on artwork is licensed under a Creative Commons Attribution 4.0 Generic License.</p>
                        }
                        <p className="font-sans text-xs">{attribution}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
