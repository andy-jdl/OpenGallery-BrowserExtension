import { useState, useEffect, useRef } from 'react';
import { Refresh, Explore, Favorite  } from "../components/buttons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addFavorite, fetchRefresh } from "../services/api";
import Placard from "../components/placard/Placard";
import Display from "../components/image/Display";
import { queryClient } from "../lib/queryClient";
import { Artwork } from '../models';
import { motion, AnimatePresence } from 'framer-motion'

import mockAsset from '../stubbs/mockAsset.json'

export default function Presentation() {

    const USE_STUB = true;

    const { data: asset, refetch } = useQuery<Artwork>({
        queryKey: ['refresh'],
        queryFn: fetchRefresh,
        enabled: !USE_STUB, 
    });

    const useData = USE_STUB ? mockAsset : asset;
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const hasMounted = useRef(false);
    const data = mockAsset[index]
    
    const favoriteMutation = useMutation<void, Error, Artwork>({
        mutationFn: addFavorite,
        onSuccess: () => {
            console.log("Favorite added");
            queryClient.invalidateQueries({queryKey:['favorites']})
        }
    })

    useEffect(() => {
        const nextIndex = (index + 1) % mockAsset.length;
        const nextImage = new Image();
        nextImage.src = mockAsset[nextIndex].image_url
    }, [index])

    useEffect(() => {
        if (!data) return;

        if (!hasMounted.current) {
        hasMounted.current = true;
        return;
        }

        setIsVisible(false);
        const timer = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timer);
    }, [data]);
    
    function handleFavorite(asset: Artwork) {
        favoriteMutation.mutate(asset)
    }

    async function handleRefresh() {
        setIsVisible(false);
        await new Promise(r => setTimeout(r, 400));
        setIndex((prev) => (prev + 1) % mockAsset.length);
        setIsVisible(true);
    }
    
    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-white relative'>
            <AnimatePresence mode="wait">
                {isVisible && (
                    <motion.div
                        key={data.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex flex-col md:flex-row items-center gap-8"
                    >
                        <div className='flex flex-col md:flex-row items-center gap-8 -translate-y-8'>
                            <Display imageUrl={data.image_url} />
                            <div className='flex flex-col justify-center md:items-start text-center md:text-left'>
                                <Placard
                                    title={data.title}
                                    artist={data.artist}
                                    location={data.museum}
                                />
                                <div className='flex gap-3 mt-4'>
                                    <Refresh onRefresh={handleRefresh} />
                                    <Explore title={data.title}  />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {data.description && 
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[75%] lg:w-[70%] max-w-6xl bg-gray-50 shadow-sm rounded-xl px-6 py-3">
                    <div className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        <p className="text-gray-700 text-center leading-relaxed">                                
                            {data.description}
                        </p>
                    </div>
                </div>
            }
        </div>
    );
}