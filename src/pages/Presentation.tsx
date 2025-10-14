import { useState, useEffect, useRef } from 'react';
import { Refresh, Explore, Favorite, Navigate  } from "../components/buttons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addFavorite, fetchRefresh } from "../services/api";
import Placard from "../components/placard/Placard";
import Display from "../components/image/Display";
import { queryClient } from "../lib/queryClient";
import { Asset } from '../models'


import mockAsset from '../stubbs/mockAsset.json'

export default function Presentation() {

    const USE_STUB = false;
    const { data: asset, refetch } = useQuery<Asset>({
        queryKey: ['refresh'],
        queryFn: fetchRefresh,
        enabled: !USE_STUB, 
    });

    const data = USE_STUB ? mockAsset : asset;
    const [isVisible, setIsVisible] = useState(true);
    const hasMounted = useRef(false);
    
    const favoriteMutation = useMutation<void, Error, Asset>({
        mutationFn: addFavorite,
        onSuccess: () => {
            console.log("Favorite added");
            queryClient.invalidateQueries({queryKey:['favorites']})
        }
    })

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
    
    function handleFavorite(asset: Asset) {
        favoriteMutation.mutate(asset)
    }

    async function handleRefresh() {
        setIsVisible(false);
        await new Promise(r => setTimeout(r, 400));
        await refetch();
    }

    if (!data) {
        return <p>Loading...</p>;
    }

    // TODO Change your buttons to be just icons maybe? Refresh, Love, Map
    return (
        <div className='flex items-center justify-center min-h-screen bg-white'>
            <div className='flex flex-col md:flex-row items-center gap-8'>
                <Display imageUrl={data.image_url} />
                <div className='flex flex-col justify-center md:items-start text-center md:text-left'>
                    <Placard
                        title={data.title}
                        artist="unknown"
                        location="Art Institute of Chicago"
                    />
                    <div className='flex gap-3'>
                        <Refresh onRefresh={handleRefresh} />
                        <Favorite onFavorite={handleFavorite} asset={data as Asset} />
                        <Explore title={data.title} location="Chicago, IL" />
                    </div>
                </div>
            </div>
        </div>
    );
}