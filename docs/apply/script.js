function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

document.getElementById('application-form').addEventListener('submit', async function(e){
    e.preventDefault();

    const form = e.target;
    const url = 'https://open-gallery-app-service-dgh5c7akd5b0cyam.centralus-01.azurewebsites.net/api/v1/artist-application';
    const payload = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        location: form.location.value.trim(),
        portfolio: form.portfolio.value.trim(),
        image_links: form.image_links.value.trim(),
        website: form.website.value.trim()
    }
    console.log('Submitting application:', payload);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const error = await response.json();
            showToast(error.message);
        } else {
            showToast('Application submitted successfully');
            form.reset();
        }
    } catch (error) {
        showToast('Application failed... please try again later');
    }
})