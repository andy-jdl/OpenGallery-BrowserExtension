export interface Artwork {
    id: string, 
    title: string,
    artist: string,
    description: string,
    imageId: string,
    image_url: string,
    museum: string,
    related: string,
    attribution: string
    colors: Colors;
    city: string;
}

interface Colors {
    profile: string;
    palette: string;
}
