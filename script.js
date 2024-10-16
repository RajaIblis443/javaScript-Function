//luas lingkaran
const luasLingkaran = (r) => {
    // r = parseInt(r);
    if (isNaN(r)) { 
        console.log("Input tidak valid, harap masukkan angka.");
        return;
    }
    const text = `luas lingkaran dari ${r} adalah : ` 
    const rumus = Math.PI * (r * r);
    const hasil = `${text}${rumus}`;

    return hasil;
}

const luasSegitiga = (a, t) => {
    // a = parseInt(a);
    // t = parseInt(t); 
    if (isNaN(a) || isNaN(t)) {
        console.log("Input tidak valid, harap masukkan angka.");
        return;
    }
    const text = `luas segitiga dari ${a} dan ${t} adalah : `; 
    const rumus = 0.5 * a * t;
    const hasil = `${text}${rumus}`; 

    return hasil; 
}

const persegiPanjang = (p, l) => {
    if (isNaN(p) || isNaN(l)) {
        console.log("Input tidak valid, harap masukan angka");
        return;
    }
    const text = `luas persegi panjang dari ${p} x ${l} adalah : `;
    const rumus = p * l;
    const hasil = `${text}${rumus}`;

    return hasil;
}

const jajarGenjang = (p, t) => {
    if (isNaN(p) || isNaN(t)) {
        console.log("Input tidak valid, harap masukan angka");
        return;
    }
    const text = `luas jajar genjang dari ${p} x ${t} adalah : `;
    const rumus = 0.5 * p * t;
    const hasil = `${text}${rumus}`;

    return hasil;
}


const gajiKaryawan = (nama, ijin, gajiPerhari) => {
    if (isNaN(ijin) || isNaN(gajiPerhari)) {
        console.log("Input tidak valid, harap masukan angka");
        return;
    }
    const text = `gaji karyawan yang harus diberikan dari dasar keberangkatan.\n
     nama: ${nama} 
     ijin: ${ijin} 
     gari perhari: ${gajiPerhari}
     Total Gaji Yang didapatkan: `;
    const masuk = 30 - ijin;
    
    const rumus = gajiPerhari * masuk;

    const hasil = `${text}${rumus}`
    return hasil
}
//main

console.log(luasLingkaran(2));
console.log(luasSegitiga(2, 2));
console.log(persegiPanjang(2, 4));
console.log(jajarGenjang(3, 4));
console.log(gajiKaryawan("bagas", 2, 50000));

