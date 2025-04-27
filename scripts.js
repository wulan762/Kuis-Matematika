// Fungsi untuk mengirim jawaban dan menyimpan status latihan
function submitQuiz() {
    let jawaban1 = document.querySelector('input[name="soal1"]:checked');
    let jawaban2 = document.querySelector('input[name="soal2"]:checked');
    let jawaban3 = document.querySelector('input[name="soal3"]:checked');
    let jawaban4 = document.querySelector('input[name="soal4"]:checked');
    let jawaban5 = document.querySelector('input[name="soal5"]:checked');
    let jawaban6 = document.querySelector('input[name="soal6"]:checked');
    let jawaban7 = document.querySelector('input[name="soal7"]:checked');
    let jawaban8 = document.querySelector('input[name="soal8"]:checked');
    
    // Validasi jika semua soal sudah dijawab
    if (jawaban1 && jawaban2 && jawaban3 && jawaban4 && jawaban5 && jawaban6 && jawaban7 && jawaban8) {
        // Menyimpan hasil evaluasi
        let hasil = {
            soal1: jawaban1.value === "6750" ? "benar" : "salah",
            soal2: jawaban2.value === "10.000" ? "benar" : "salah",
            soal3: jawaban3.value === "35" ? "benar" : "salah",
            soal4: jawaban4.value === "24" ? "benar" : "salah",
            soal5: jawaban5.value === "60" ? "benar" : "salah",
            soal6: jawaban6.value === "500.000 cm2" ? "benar" : "salah",
            soal7: jawaban7.value === "0,6 m2" ? "benar" : "salah",
            soal8: jawaban8.value === "07.30" ? "benar" : "salah"
        };

        // Menyimpan hasil di localStorage
        localStorage.setItem("hasilLatihan", JSON.stringify(hasil));

        // Arahkan ke halaman evaluasi
        window.location.href = 'evaluasi.html';
    } else {
        alert("Silakan pilih jawaban untuk semua soal!");
    }
}
