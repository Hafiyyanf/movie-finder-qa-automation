# UX Recommendations – Movie Finder

Dokumen ini berisi rekomendasi peningkatan User Experience berdasarkan hasil pengujian dan observasi selama QA.

---

## 1. Tidak Ada Opsi Forgot Password
**Masalah:**  
User tidak mendapatkan feedback yang jelas saat gagal login.

**Rekomendasi UX:**  
- Tambahkan pesan error yang informatif:  
  *“Email atau password salah. Silakan coba lagi.”*
- Highlight field yang salah.
- Tambahkan animasi subtle untuk error message (fade-in).

**Alasan UX:**  
Membantu pengguna memahami apa yang salah tanpa kebingungan.

---

## 2. Loading State yang Lebih Jelas pada Fitur Pencarian
**Masalah:**  
Spinner loading kecil dan posisinya kurang terlihat.

**Rekomendasi UX:**  
- Gunakan skeleton UI untuk memberikan persepsi kecepatan.
- Tempatkan loading indicator dekat area search results.
- Tambahkan timeout maksimal loading.

**Alasan UX:**  
Loading yang ambigu membuat user merasa aplikasi lambat.

---

## 3. Informasi Movie Detail Perlu Hierarki Visual Lebih Jelas
**Masalah:**  
Judul, rating, dan genre terlihat berdekatan sehingga tidak nyaman dilihat.

**Rekomendasi UX:**  
- Besarkan font judul film (H1).
- Tambahkan spacing antar elemen.
- Buat rating menonjol dengan icon bintang berwarna.

**Alasan UX:**  
Hierarki visual membantu pengguna mencerna informasi lebih cepat.

---

## 4. Informasi Movie masih kurang lengkap
**Masalah:**  
Saat ini informasi menganai film hanya Judul, rating, genre, dan sinopsis.

**Rekomendasi UX:**  
- Tambahkan Poster film.
- Tambahkan Pemeran-pemeran yang bermain di film tersebut.
- Tambahkan Link trailer dari Film Tersebut.

**Alasan UX:**  
- Memperkuat Pengambilan Keputusan Pengguna
- Memudahkan pengguna dalam Mencerna Informasi
- Mempercepat eksplorasi dan seleksi film
- Meningkatkan efisiensi alur pencarian

---

## 5. Penambahan Fitur “Recently Viewed”
**Masalah:**  
User sering ingin kembali ke film yang sebelumnya sudah dilihat.

**Rekomendasi UX:**  
- Tambahkan section “Recently Viewed” di homepage.

**Alasan UX:**  
- Mengurangi friksi atau searching dengan prompt yang sama saat pengguna menjelajah banyak judul.

---

## 6. History Page: Berikan Opsi Sorting & Filtering
**Masalah:**  
Jika history sudah panjang sulit ditelusuri.

**Rekomendasi UX:**  
- Tambahkan filter berdasarkan:
  - Tanggal ditonton
  - Genre
- Tambahkan sorting:
  - Terbaru → Terlama
  - A–Z

**Alasan UX:**  
- Memperbaiki navigasi dan kontrol bagi pengguna.

---

## 6. Tambahkan “Add to Favorites”
**Masalah:**  
Saat ini user hanya bisa menyimpan ke history, tidak ke favorit.

**Rekomendasi UX:**  
- Tambahkan tombol **Favorite** dengan icon hati.
- Sinkronkan dengan user profile.

**Alasan UX:**  
- Memberikan opsi personalisasi yang penting untuk aplikasi film.

---

## 7. Tambahkan Fitur "Dark Mode"
**Masalah:**  
Saat ini hanya ada satu mode tampilan

**Rekomendasi UX:**  
- Tambahkan tombol **Dark Mode** dengan icon bentuk lampu.

**Alasan UX:**  
- Memberikan Opsi Personalisasi
- Mengurangi Kelelahan Mata
- Menghemat Baterai untuk Perangkat Berlayar OLED

---

## 8. Tambahkan Fitur "Recommendation Feedback"
**Masalah:**  
Saat ini Hasil rekomendasi AI tidak memiliki mekanisme untuk dievaluasi oleh pengguna

**Rekomendasi UX:**  
- Tambahkan tombol **Thumbs up / Thumbs down** dengan icon bentuk thumbs.

**Alasan UX:**  
- AI Tidak Bisa Belajar Tanpa Umpan Balik Pengguna
- Memberikan Pengguna Kendali & Rasa Partisipasi
- Mengurangi Frustrasi Saat Rekomendasi Tidak Relevan
- Data Penting untuk Evaluasi & Continuous Improvement

---