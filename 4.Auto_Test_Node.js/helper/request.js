// import library node-fetch untuk mengirim request http (GET,POST,PUT, DLL)
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// mengambil isi file config
const CONFIG = require("../config/config");
// buat function request terdiri dari endpoint, method dan body, untuk method dan body bisa disesuaikan waktu eksekusi, dan untuk endpoint ambil dari file config.
async function request(endpoint, method = 'GET', body = null) {
    // untuk menyatukan url lengkap
    const url = `${CONFIG.base_Url}${endpoint}`;
    // membuat object option yang terdiri dari method dan header untuk dikirimkan ke API
    const options = {
        method, 
        headers : CONFIG.headers,
    };
    // kalo ada body maka body tersebut akan di ubah  jadi JSON string kemudian dimasukkan ke options.body
    if (body){
        options.body = JSON.stringify(body);
    }
    // menyimpan waktu saat request di mulai
    const start = Date.now()
    // mengirim http request ke url yang dituju dengan method + body
    const res = await fetch(url, options);
    // menghitung berapa lama waktu request berlangsung
    const duration = Date.now()-start;
    // mengubah respon dari API jadi objek javascript supaya bisa diakses datanya
    let resBody = null; // inisialisasi resBody
    try {
    resBody = await res.json(); // coba ambil body response (format JSON)
    } catch (err) {
    // kalau kosong / bukan JSON, biarin aja null
    }

    // me return hasilnya dalam bentuk object supaya mudah dipakai di file APIAutomation_reqres.js
    return{
        status : res.status,
        body : resBody,
        duration
    };
}
// export request supaya dapat di pakai di file lain
module.exports = { request };