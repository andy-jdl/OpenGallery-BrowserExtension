export const fetchRefresh = async () => {
    const response = await fetch(`http://localhost:8080/api/v1/artworks/random`);
    if (!response.ok) {
        throw new Error("Failed to fetch refresh data");
    }
    return response.json();
}
