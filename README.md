# AI Movie Finder – QA Test Automation Project

Project ini dibuat sebagai bagian dari QA Technical Test untuk menguji fitur–fitur pada website AI-powered Movie Finder, termasuk:
- Login
- AI Search (prompt-based movie recommendation)
- Search History

Pengujian mencakup test cases, automation testing, serta dokumentasi bug dan rekomendasi user experience.

---
## Test Case

Dokumen test case lengkap ada pada folder:

[Test Case](Docs/TEST_CASES_MOVIE_FINDER.xlsx)

Test case mencakup:

**1. Auth:**
- Login sukses
- Login gagal
- Logout

**2. AI Search:**
- Prompt valid
- Prompt panjang
- Prompt typo
- No AI result
- Out of Context

**3. History:**
- History tersimpan
- Multiple history
- Clear history
- History setelah clear

---

## Automated Test Coverage

Automasi menggunakan Playwright + JavaScript, sama seperti test case.

Semua script ada di (tests/).

---

## Installation & Setup
sebelum menjalankan testnya, perlu dilakukan installation & setup terlebih dahulu sebagai berikut:

### 1. Clone Repository
```bash
git clone https://github.com/USERNAME/movie-finder-qa-automation.git
cd movie-finder-qa-automation
```


### 2️. Install Dependencies**
```bash
npm install
```

### 3️. Install Playwright Browsers**
```bash
npx playwright install
```
---

## Running the Tests
Berikut cara untuk menjalankan testnya:

### Run all tests
```bash
npx playwright test
```

### Run specific folder
```bash
npx playwright test tests/auth
```

### Run a specific test file
```bash
npx playwright test Login.spec.js
```

### Run with UI (debug mode)
```bash
npx playwright test --ui
```

### Show latest HTML report
```bash
npx playwright show-report
```

---

## Configuration
Konfigurasi utama dapat ditemukan pada:

📄 playwright.config.js

Termasuk:
- Timeout
- Browser settings
- Reporter
- Base URL

---

## Bug Reports

- Dokumen bug report dapat ditemukan di:

 [Bug Reports](Docs/Bug_Reports.md)

Format memuat:
- Title
- Area
- Severity
- Priority
- Status
- Test Case Number
- Steps to reproduce
- Expected
- Actual Result
- Severity
- Screenshot (opsional)

---

## UX Recommendations

Rekomendasi untuk meningkatkan user experience ada pada:

[UX Recommendations](Docs/UX_Recommendations.md)

---

## Tech Stack
- Playwright (Automation Testing)
- JavaScript (Node.js)
- HTML Report
- Excel / Markdown for Test Cases

---

## Contact
Project dibuat oleh:
Hafiyyan Faza
QA Automation – Technical Test
