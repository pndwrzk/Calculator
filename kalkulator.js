let tombol = document.querySelector(".container-tombol");
let layar = document.getElementById("layar");
let resetLayar = false;
let bolehHitung = false;
let tmpval = "";
//operator variable untuk menyimpan operator yang diclick
let operator = "";

tombol.addEventListener("click", function(e) {
    //mengambil tombol yang di click
    let tombolClick = e.target;
    // mengambil isi dari tombol yang sudah di click
    let nilaitombol = tombolClick.innerText;
    // memasukan nilai dari tombol yang click ke dalam inputan layar
    //layar.value + nilaitombol agar isi inputan bertambah tidak menggantikan

    //CONTOH
    //"INI ADALAH STRING" + INIVARIABLIE + "STRING LAGI"
    //"INI ADALAH STRING" + INIfunction()
    //variable + INIfunction()

    if (nilaitombol == "C") {
        //isi layar akan menjadi kosong
        layar.value = "";
    } else if (nilaitombol == "<") {
        //mengapus 1 angka
        //maksud slice adalah memotong 0=dimulai dari angka pertama dan (-1) adalah yang dipotong adalah angka sebelum angka pertama tersebut
        layar.value = layar.value.slice(0, -1);
    } else if (nilaitombol == "=") {
        if (bolehHitung == true) {
            layar.value = eval(tmpval + operator + layar.value);
            bolehHitung = false;
        }
    } else if (tombolClick.classList.contains("operator")) {
        if (bolehHitung == true) {
            layar.value = eval(tmpval + operator + layar.value);
            bolehHitung = false;
        }
        tmpval = layar.value;
        operator = nilaitombol;

        resetLayar = true;
    } else {
        if (resetLayar == true) {
            layar.value = nilaitombol;
            resetLayar = false;
            bolehHitung = true;
        } else {
            layar.value = layar.value + nilaitombol;
        }
    }
});