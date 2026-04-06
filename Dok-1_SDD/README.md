# Software Design Description (SDD)
## 1. Pendahuluan
Dokumen ini menjelaskan desain sistem EMart yang digunakan untuk 
mendukung proses transaksi jual beli secara online.

## 2. Arsitektur Sistem
Sistem EMart menggunakan arsitektur web application dengan komponen:
- Frontend (User Interface)
- Backend (Logic System)
- Database (Data Storage)

User mengakses sistem melalui browser kemudian request dikirim 
ke server dan diproses oleh backend lalu disimpan ke database.

## 3. Desain Komponen

### 3.1 Modul Login
Digunakan untuk autentikasi user dan admin

### 3.2 Modul Register
Digunakan untuk pendaftaran user baru

### 3.3 Modul Produk
Digunakan untuk menampilkan produk

### 3.4 Modul Cart
Digunakan untuk menyimpan produk sementara

### 3.5 Modul Checkout
Digunakan untuk transaksi pembelian

### 3.6 Modul Admin
Digunakan untuk mengelola produk dan user

## 4. Database Design
Tabel yang digunakan:
- users
- products
- cart
- orders
- transactions

## 5. Interface Design
Sistem memiliki tampilan:
- Halaman login
- Halaman register
- Halaman produk
- Halaman cart
- Halaman checkout
- Halaman admin dashboard
