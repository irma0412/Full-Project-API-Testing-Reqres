📊 Dokumentasi Proyek API Testing
Hai! Selamat datang di repository dokumentasi proyek API Testing aku 🚀 Di sini aku mendokumentasikan seluruh proses pengujian API di Reqres.in, mulai dari Test Plan sampai ke Final Report. Semua tahapan aku pisahkan per folder supaya lebih gampang diikuti.

Struktur Folder:

.github/workflows → Berisi konfigurasi CI/CD pipeline menggunakan GitHub Actions. Pipeline ini otomatis menjalankan automation test setiap ada push/PR. Karena repository ini hanya fokus pada project pengujian (tanpa aplikasi web/apk yang perlu di-build & deploy), tahap CD (Continuous Deployment) tidak bisa dijalankan penuh. Tapi, script CD tetap disertakan untuk menunjukkan alur lengkap CI/CD.

1_Test_Plan → Berisi dokumen Test Plan yang menjelaskan ruang lingkup, tujuan, strategi, dan jadwal project ini.

2_Test_Case → Berisi desain Test Case yang aku buat sebagai acuan pengujian.

3_Manual_Test_Result → Hasil pengujian manual menggunakan Postman, lengkap dengan screenshot dan bukti testing.

4_Automation_Test → Kumpulan file untuk Automation API Testing menggunakan Node.js + Mocha + node-fetch. Termasuk report dari Mochawesome.

5_Performance_Test → Bagian performance testing yang dilakukan dengan JMeter + Allure Report (Load Test & Stress Test).

6_Final_Report → Laporan akhir yang merangkum keseluruhan hasil testing, temuan penting, dan saran untuk improvement.

Deskripsi Proyek:
Proyek ini berfokus pada pengujian API di dummy API Reqres.in. Aku memulai dengan pengujian manual di Postman, dilanjutkan dengan automation menggunakan Node.js, dan pengujian performa menggunakan JMeter. Laporan hasil testing juga aku buat dalam bentuk HTML Extra Report dari Newman agar lebih visual & mudah dibaca. Selain itu, aku juga menambahkan CI/CD pipeline dengan GitHub Actions di folder .github/workflows untuk mengotomatisasi proses testing.

Referensi & Link Terkait:
Postinganku di LinkedIn (tentang project ini): 
(https://www.linkedin.com/posts/irma-suryani-3b07841ba_final-report-api-test-reqresin-activity-7358750112396791808-MxtD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMEGTQBFSv0AdY1vOZRPgVyJI6HXfLr5pM)

Postingan dokumentasi CI : https://www.linkedin.com/posts/irma-suryani-3b07841ba_githubactions-ciabrcd-automationtesting-activity-7376501305021825024-45KY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMEGTQBFSv0AdY1vOZRPgVyJI6HXfLr5pM

Catatan:
Project ini aku susun sebagai dokumentasi lengkap dari proses API Testing-ku. Tiap tahapan aku pisahkan di folder yang berbeda supaya lebih rapi. Kalau ada saran atau masukan, aku akan sangat terbantu untuk pengembangan project berikutnya!