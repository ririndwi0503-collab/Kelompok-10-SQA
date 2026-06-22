# Matrix Testing

## Definisi

Matrix Testing merupakan metode Gray Box Testing yang digunakan untuk mengidentifikasi hubungan antar modul atau komponen dalam sistem. Pengujian dilakukan untuk memastikan setiap modul dapat berinteraksi dengan baik dan tidak menimbulkan kesalahan ketika digunakan secara bersamaan.

## Tujuan

- Memastikan hubungan antar modul berjalan dengan baik.
- Mengidentifikasi ketergantungan antar fitur.
- Mengetahui pengaruh perubahan pada satu modul terhadap modul lainnya.
- Memastikan integrasi sistem berjalan sesuai kebutuhan.

## Objek Pengujian

Pengujian dilakukan pada fitur Login, Register, dan Home pada sistem EMart.

## Penjelasan Pengujian

Pengujian dilakukan dengan memeriksa hubungan antar halaman dan fungsi sistem. Setelah pengguna melakukan registrasi, data harus dapat digunakan pada proses login. Setelah login berhasil, pengguna harus dapat mengakses halaman Home.

## Matriks Pengujian

| Modul | Login | Register | Home |
|---------|---------|---------|---------|
| Login | ✓ | ✓ | ✓ |
| Register | ✓ | ✓ | ✓ |
| Home | ✓ | ✓ | ✓ |

## Hasil Pengujian

Seluruh modul dapat saling berinteraksi tanpa ditemukan kesalahan integrasi.

## Kesimpulan

Hubungan antar modul pada sistem EMart berjalan dengan baik dan sesuai kebutuhan sistem.
