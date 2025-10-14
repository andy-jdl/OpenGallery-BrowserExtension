// export interface Asset {
//     id: number;
//     title: string;
//     artist_name: string;
//     image_url: string;
//     location: string;
// }


// Since we are using the Art Inst., there is no location for now but it should be extended   
export interface Asset {
    id: number,
    title: string, 
    image_id: string,
    iiif_url: string,
    image_url: string
}
