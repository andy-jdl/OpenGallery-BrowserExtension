import Display from '../components/image/Display'

import mockFavorite from '../stubbs/favorites.json'

// Restructure introduce your api
export default function Gallery() {

    const data = mockFavorite
    console.log('data', data)

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {data.map((painting) => (
                <div key={painting.ID} style={{ border: "1px solid red", padding: "16px" }}>
                    <Display imageUrl={painting.image_url} />
                </div>
            ))}
        </div>
    )
}