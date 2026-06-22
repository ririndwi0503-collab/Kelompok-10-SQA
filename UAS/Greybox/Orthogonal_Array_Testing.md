# Orthogonal Array Testing

## Definisi

Orthogonal Array Testing merupakan teknik Gray Box Testing yang digunakan untuk menguji berbagai kombinasi input dengan jumlah test case yang lebih sedikit namun tetap mewakili seluruh kemungkinan kondisi.

## Tujuan

- Mengurangi jumlah test case.
- Menguji berbagai kombinasi input secara efisien.
- Menemukan kesalahan pada kombinasi data tertentu.
- Meningkatkan efektivitas pengujian.

## Objek Pengujian

Fitur Login pada sistem EMart.

## Penjelasan Pengujian

Pengujian dilakukan menggunakan kombinasi data username dan password yang valid maupun tidak valid untuk memastikan sistem dapat menangani berbagai kondisi input.

## Faktor dan Level

| Faktor | Level |
|---------|---------|
| Username | Valid / Invalid |
| Password | Valid / Invalid |

## Tabel Pengujian

| No | Username | Password | Expected Output |
|----|----------|----------|----------------|
| 1 | Valid | Valid | Login Berhasil |
| 2 | Valid | Invalid | Login Gagal |
| 3 | Invalid | Valid | Login Gagal |
| 4 | Invalid | Invalid | Login Gagal |

## Hasil Pengujian

Seluruh kombinasi input menghasilkan output sesuai dengan kebutuhan sistem.

## Kesimpulan

Orthogonal Array Testing menunjukkan bahwa sistem mampu menangani berbagai kombinasi input dengan baik.
