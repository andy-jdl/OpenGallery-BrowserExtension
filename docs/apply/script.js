const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

function showThumbnailPreview(files) {
    const previewContainer = document.getElementById('image-preview');
    previewContainer.innerHTML = ''; 
    validateImages(files);

    for (const file of files) {
        if (!file.type.startsWith('image/')) continue;

        const img = document.createElement('img');
        img.classList.add('w-24', 'h-24', 'object-cover', 'rounded-md', 'border', 'border-gray-300');
        img.file = file;
        previewContainer.appendChild(img);

        const reader = new FileReader();
        reader.onload = (e) => {
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}


function validateImages(files) {
    if (files.length === 0 || files.length > 5) {
        showToast('Upload at least one image and no more than five.');
        return false;
    }
    
    for(const file of files){
        if(!allowedTypes.includes(file.type)) {
            showToast(`${file.name} must be JPG, PNG or WEBP.`);
            return false;
        }

        if(file.size > 5 * 1024 * 1024) {
            showToast(`${file.name} file must be less than 5MB.`);
            return false;
        }
    }
    return true;
}

function resetForm(form) {
    form.reset();
    document.getElementById('image_files').value = '';
    document.getElementById('image-preview').innerHTML = '';
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

document.getElementById('image_files').addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        showThumbnailPreview(e.target.files);
    }
});

document.getElementById('application-form').addEventListener('submit', async function(e){
    e.preventDefault();

    const uploadedFiles = e.target.image_files.files;
    if(!validateImages(uploadedFiles)) {
        return;
    }
    const form = e.target;
    const url = 'https://open-gallery-backend-fqg5epekaah2e9da.centralus-01.azurewebsites.net/api/artist-application';
    const artistPayload = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        location: form.location.value.trim(),
        portfolio: form.portfolio.value.trim(),
        website: form.website.value.trim()
    }

    try {
        const applicationResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(artistPayload)
        });

        if(!applicationResponse.ok) {
            const errorText = await applicationResponse.text();
            resetForm(form);
            showToast(errorText);
            return;
        }

        const { applicationId } = await applicationResponse.json();
        await uploadToBlobStorage(applicationId, uploadedFiles);

        // finalize application with backend

        showToast('Application submitted successfully!');
        resetForm(form);
    } catch (error) {
        showToast('Application failed. Please try again later');
    }
})