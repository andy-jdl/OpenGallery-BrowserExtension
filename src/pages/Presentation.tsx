import { useState, useEffect, useRef } from 'react';
import { Refresh, Explore, Favorite  } from "../components/buttons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchRefresh } from "../services/api";
import Placard from "../components/placard/Placard";
import Display from "../components/image/Display";
import { queryClient } from "../lib/queryClient";
import { Artwork } from '../models';
import { motion, AnimatePresence } from 'framer-motion'


// TODO: Description, Stutter image, Favorites implementation, Preload images
export default function Presentation() {

    const { data: asset, refetch } = useQuery<Artwork>({
        queryKey: ['refresh'],
        queryFn: fetchRefresh
    });

    const [isVisible, setIsVisible] = useState(true);
    const hasMounted = useRef(false);

    function addFavorite() {
        
    }

    useEffect(() => {
        if (!asset) return;

        // Initial image has mounted, no need to fade out/in or recall
        if (!hasMounted.current) {
            hasMounted.current = true;
            return;
        }
        
        setIsVisible(false);
        const timer = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timer);
    }, [asset]);
    

    async function handleRefresh() {
        await refetch();
    }
    
    if (!asset) {
        return (
            <div className='flex items-center gap-8 -translate-y-4'>
                <p className='text-sky-400'>Loading...</p>;
            </div>
            )
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-white relative'>
            <AnimatePresence mode="wait">
                {isVisible && (
                    <motion.div
                        key={asset.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex flex-col md:flex-row items-center gap-8"
                    >
                        <div className='flex flex-col md:flex-row items-center gap-8 -translate-y-8'>
                            <Display imageUrl={asset.image_url} />
                            <div className='flex flex-col justify-center md:items-start text-center md:text-left'>
                                <Placard
                                    title={asset.title}
                                    artist={asset.artist}
                                    location={asset.museum}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[60%] md:w-[55%] lg:w-[30%] flex justify-center items-center space-x-8 bg-gray-50 shadow-sm rounded-xl px-6 py-3">
                    <Refresh onRefresh={handleRefresh} />
                    <Favorite onFavorite={addFavorite} asset='' />
                    <Explore title={asset.title}  />
                </div>
        </div>
    );
}