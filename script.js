document.getElementById('contactButton').addEventListener('click', function() {
    let message = prompt("Masukkan pesan Anda:", "Tanya lebih lanjut tentang saya...");
    
    if (message) {
        alert("Pesan Anda: " + message); 
        alert("Anda tidak memasukkan pesan."); 
    }
});
