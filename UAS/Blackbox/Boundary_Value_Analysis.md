# Boundary Value Analysis (BVA)

## Definisi

Boundary Value Analysis (BVA) merupakan metode Black Box Testing yang digunakan untuk menguji nilai batas minimum dan maksimum dari suatu input agar sistem dapat memproses data dengan benar.

## Tabel Batasan Data

| No | Field | Batas Minimum | Batas Maksimum |
|----|--------|---------------|---------------|
| 1 | Username | 3 karakter | 20 karakter |
| 2 | Password | 5 karakter | 20 karakter |

## Tabel Test Case

| No | Test Case | Input | Expected Output | Actual Output | Status |
|----|-----------|--------|----------------|---------------|--------|
| TC01 | Username minimum | abc | Diterima | Diterima | PASS |
| TC02 | Username kurang batas | ab | Ditolak | Ditolak | PASS |
| TC03 | Password minimum | 12345 | Diterima | Diterima | PASS |
| TC04 | Password kurang batas | 1234 | Ditolak | Ditolak | PASS |

## Kesimpulan

Sistem berhasil memvalidasi batas minimum dan maksimum pada field Login sesuai kebutuhan.
