# Cause Effect Relationship Testing

## Definisi

Cause Effect Relationship digunakan untuk mengidentifikasi hubungan antara kondisi input (Cause) dengan hasil yang dihasilkan sistem (Effect).

## Tabel Cause dan Effect

| Cause | Keterangan |
|---------|-------------|
| C1 | Username benar |
| C2 | Password benar |

| Effect | Keterangan |
|---------|------------|
| E1 | Login berhasil |
| E2 | Login gagal |

## Tabel Pengujian

| No | C1 | C2 | Output |
|----|----|----|---------|
| 1 | Y | Y | E1 |
| 2 | Y | T | E2 |
| 3 | T | Y | E2 |
| 4 | T | T | E2 |

## Kesimpulan

Hubungan antara data input dan hasil login berjalan sesuai aturan sistem.
