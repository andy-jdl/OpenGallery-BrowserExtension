export const fetchRefresh = async () => {
    const response = await fetch(`https://open-gallery-app-service-dgh5c7akd5b0cyam.centralus-01.azurewebsites.net/api/v1/artworks/random`);
    if (!response.ok) {
        throw new Error("Failed to fetch refresh data");
    }
    return response.json();
}
