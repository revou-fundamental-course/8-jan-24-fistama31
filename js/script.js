const form = document.getElementById("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const sisi = document.getElementById("sisi").value;

    if (sisi <= 0) {
        alert("Panjang sisi harus positif!");
        return;
    }

    const luas = sisi * sisi;
    const keliling = 4 * sisi;

    const hasil = document.getElementById("hasil");
    const luasText = document.getElementById("luas");
    const kelilingText = document.getElementById("keliling");

    luasText.textContent = "Luas persegi adalah " + luas + " cm\u00B2";
    kelilingText.textContent = "Keliling persegi adalah " + keliling + " cm";
    hasil.style.display = "block";
});