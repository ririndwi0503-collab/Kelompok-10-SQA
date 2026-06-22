# Control Flow Testing

## Definisi

Control Flow Testing merupakan metode White Box Testing yang digunakan untuk memeriksa jalur eksekusi program berdasarkan percabangan dan keputusan yang terdapat dalam source code.

## Tujuan

- Memastikan setiap jalur program dapat dieksekusi.
- Menguji kondisi TRUE dan FALSE pada program.
- Menemukan kemungkinan kesalahan logika.

## Objek Pengujian

Fitur Login pada sistem EMart.

## Penjelasan Pengujian

Pengujian dilakukan terhadap proses login yang memiliki dua kemungkinan jalur program yaitu login berhasil dan login gagal.

Alur Program:

1. Pengguna memasukkan username dan password.
2. Sistem melakukan validasi data.
3. Jika data benar maka pengguna masuk ke halaman Home.
4. Jika data salah maka sistem menampilkan pesan Login Gagal.

## Tabel Jalur Program

| Jalur | Kondisi | Output |
|---------|---------|---------|
| Path 1 | Data Valid | Home |
| Path 2 | Data Tidak Valid | Login Gagal |

## Hasil Pengujian

Seluruh jalur program berhasil dijalankan sesuai dengan logika yang dibuat.

## Kesimpulan

Control Flow Testing menunjukkan bahwa seluruh percabangan program pada fitur Login dapat berjalan dengan baik.
