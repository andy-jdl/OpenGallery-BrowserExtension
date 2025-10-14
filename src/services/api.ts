import { Asset } from '../models/Asset'

// for demo purposes only
const ids = [27992, 21843, 24880, 24851, 25105, 25102, 25099, 25113, 25110, 25108];

const randomId = (): number => ids[Math.floor(Math.random() * ids.length)];

export const fetchRefresh = async () => {
    const id = randomId()
    const response = await fetch(`http://localhost:8080/api/v1/artworks/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch refresh data");
    }
    return response.json();
}

export const addFavorite = async (asset: Asset): Promise<void> => {
    const response = await fetch("http://localhost:8080/favorites", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(asset),
    })
    
    if(!response.ok) {
        throw new Error("Failed to add favorite")
    }
}