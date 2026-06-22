# Code Walkthrough Testing

## Definisi

Code Walkthrough merupakan teknik White Box Testing yang dilakukan dengan cara meninjau dan membahas source code secara bersama-sama untuk memahami alur program serta menemukan kemungkinan kesalahan logika pada sistem.

## Tujuan

- Memahami alur program.
- Menemukan kesalahan logika sejak dini.
- Memastikan kode sesuai dengan kebutuhan sistem.
- Mempermudah proses pemeliharaan program.

## Objek Pengujian

Pengujian dilakukan pada fitur Register yang terdapat pada sistem EMart. Fokus pengujian adalah proses validasi data pengguna sebelum akun berhasil dibuat.

## Penjelasan Pengujian

Tester melakukan peninjauan terhadap kode program yang digunakan pada proses registrasi pengguna. Pemeriksaan dilakukan pada validasi email, username, dan password untuk memastikan data yang dimasukkan pengguna diproses dengan benar.

Alur yang diperiksa:

1. Pengguna mengisi form registrasi.
2. Sistem memeriksa apakah seluruh field telah diisi.
3. Sistem memvalidasi format email.
4. Sistem memvalidasi panjang password.
5. Sistem menyimpan data pengguna.
6. Sistem menampilkan pesan registrasi berhasil.

## Tabel Pengujian

| No | Proses | Hasil |
|----|---------|---------|
| 1 | Validasi Email | Berjalan |
| 2 | Validasi Password | Berjalan |
| 3 | Penyimpanan Data | Berjalan |
| 4 | Notifikasi Registrasi | Berjalan |

## Hasil Pengujian

Seluruh alur registrasi dapat dijalankan sesuai dengan logika yang dirancang pada sistem.

## Kesimpulan

Berdasarkan hasil Code Walkthrough, tidak ditemukan kesalahan logika pada fitur Register dan seluruh proses berjalan sesuai kebutuhan sistem.
