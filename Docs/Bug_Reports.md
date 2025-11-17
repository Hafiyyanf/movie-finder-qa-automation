# Bug Reports – Movie Finder

Dokumen ini berisi daftar bug yang ditemukan selama proses QA testing pada aplikasi **Movie Finder**.  
Setiap bug memiliki detail langkah reproduksi, hasil aktual, hasil yang diharapkan, serta prioritas & status.

---

## Bug-001 – AI Search: Tidak muncul informasi lebih detail setelah cards film di klik.
**Area:** AI Search  
**Severity:** High  
**Priority:** P1  
**Status:** Open

**Deskripsi:**  
Ketika user sudah melakukan searching, dan sudah muncul cards-cards filmnya, lalu saat mouse hover diatas cardsnya terlihat perubahan dari cardsnya jadi ada shadow tapi saat di klik tidak muncul apa-apa.

**Langkah Reproduksi:**
1. Ketik kata kunci apapun contoh: “film horror”.
2. Tunggu sampai hasil cards-cards muncul.
3. Perhatikan cards dan arahkan mouse ke salah satu cards.
4. Klik Cards

**Actual Result:**  
- Tidak ada respon apa-apa setalah klik Cards.

**Expected Result:**  
- Muncul informasi lebih detail dari filmnya.

**Evidence:**  
- Link Evidance: https://jam.dev/c/66007404-464e-4e61-aa71-5e42f2abc87c 

## Bug-002 – AI Search: Cards yang muncul bukan judul film atau AI Respon ambigu
**Area:** AI Search  
**Severity:** High  
**Priority:** P1  
**Status:** Open
**Test Case Number:** TC-SEARCH-006

**Deskripsi:**  
Ketika user sudah melakukan searching test case yang digunakan adalah "cara memasak nasi goreng", hasil card film rekomendasi yang muncul ada beberapa yang bukan judul film sepertinya. (Perlu di cek lebih lanjut dari mana AI mengambil detail informasi menganai itu)

**Langkah Reproduksi:**
1. Ketik kata kunci : “cara memasak nasi goreng”.
2. Tunggu sampai hasil cards-cards muncul.
3. Perhatikan cards yang muncul dan perhatikan judul-judulnya

**Actual Result:**  
- Cards yang ditampilkan bukan sebuah film.

**Expected Result:**  
- Cards yang muncul harusnya hanya film.

**Evidence:**  
-

## Bug-003 – Profile: Profile tidak bisa di klik
**Area:** Profile  
**Severity:** High  
**Priority:** P1  
**Status:** Open

**Deskripsi:**  
Ketika user klik profile yang berada diatas kanan, tidak ada respon apa-apa

**Langkah Reproduksi:**
1. Klik profile yang ada diatas kanan

**Actual Result:**  
- Tidak ada respon apa-apa setelah klik profile.

**Expected Result:**  
- Masuk ke page profile.

**Evidence:**  
- Link Evidance https://jam.dev/c/f7f49665-5f3b-47cc-be5a-589297b8f4fa
