// Array to store the camera IPs
const cameraIPs = [
    "http://192.168.1.6:",  // Channel 1
    "http://camera-ip-address-2",  // Channel 2
    "http://camera-ip-address-3",  // Channel 3
    "http://camera-ip-address-4",  // Channel 4
    "http://camera-ip-address-5",  // Channel 5
    "http://camera-ip-address-6"    // Channel 6
];

// Example parking detection data (for demonstration purposes)
const parkingDetection = {
    1: false,  // Slot 1 - Free
    2: true,   // Slot 2 - Occupied
    3: false,  // Slot 3 - Free
    4: true,   // Slot 4 - Occupied
    5: false,  // Slot 5 - Free
    6: false,  // Slot 6 - Free
    7: true,   // Slot 7 - Occupied
    8: false,  // Slot 8 - Free
    9: true,   // Slot 9 - Occupied
    10: false, // Slot 10 - Free
    11: false, // Slot 11 - Free
    12: false, // Slot 12 - Free
    13: true,  // Slot 13 - Occupied
    14: false, // Slot 14 - Free
    15: true,  // Slot 15 - Occupied
    16: false, // Slot 16 - Free
    17: false, // Slot 17 - Free
    18: false   // Slot 18 - Occupied
};

// Function to change the live video feed
function changeChannel(channelNumber) {
    // Get the video iframe element
    const liveVideo = document.getElementById('liveVideo');
    
    // Update the iframe src with the selected camera IP
    liveVideo.src = cameraIPs[channelNumber - 1];
    
    // Update the channel title
    document.getElementById('channelTitle').innerText = `Channel No.${channelNumber}`;
}

// Function to toggle full screen for the video
function toggleFullScreen() {
    const videoContainer = document.getElementById('liveVideo');
    
    if (!document.fullscreenElement) {
        videoContainer.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Function to update the parking slots based on detection
function updateParkingSlots() {
    for (let i = 1; i <= 18; i++) {
        const slot = document.getElementById(`slot${i}`);
        if (parkingDetection[i]) {
            // If occupied, turn red
            slot.classList.add('occupied');
        } else {
            // If free, turn green
            slot.classList.remove('occupied');
            slot.style.backgroundColor = 'green'; // Ensure it is green when free
        }
    }
}

// Call the updateParkingSlots function on page load or at intervals
window.onload = updateParkingSlots;

// Optionally, you can set an interval to update parking slots dynamically
setInterval(updateParkingSlots, 5000); // Update every 5 seconds
