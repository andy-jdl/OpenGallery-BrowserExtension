export interface PlacardProps{
    title:string
    artist:string
    location:string
    description: string    
    colors: ColorDot
}

export interface ColorDot {
  profile: string;
  palette: string;
}