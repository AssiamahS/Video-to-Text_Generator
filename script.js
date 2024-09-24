function generateVideo() {
    const text = document.getElementById('text-input').value;
    if (!text) {
        alert('Please enter some text.');
        return;
    }

    // Mock function to simulate video generation
    const videoUrl = `https://via.placeholder.com/600x400?text=${encodeURIComponent(text)}`;
    
    const videoOutput = document.getElementById('video-output');
    videoOutput.innerHTML = `<video width="600" controls>
                                <source src="${videoUrl}" type="video/mp4">
                                Your browser does not support the video tag.
                             </video>`;
}
