# Equivalence Partitioning

## Definisi

Equivalence Partitioning digunakan untuk membagi data input ke dalam kelas valid dan tidak valid.

## Tabel Equivalence Class

| Kelas | Data |
|---------|---------|
| Valid | Username dan Password benar |
| Tidak Valid | Username kosong |
| Tidak Valid | Password kosong |

## Tabel Test Case

| No | Input | Expected Output | Status |
|----|---------|---------|---------|
| 1 | admin / 12345 | Login Berhasil | PASS |
| 2 | kosong / 12345 | Ditolak | PASS |
| 3 | admin / kosong | Ditolak | PASS |

## Kesimpulan

Sistem dapat membedakan input valid dan tidak valid dengan baik.
