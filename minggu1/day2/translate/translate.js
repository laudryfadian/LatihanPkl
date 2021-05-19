var indo = ["kucing","anjing","sapi","kuda","singa","harimau","burung","ikan"]
var inggris = ["cat","dog","cow","horse","lion","tiger","bird","fish"]


function tr() {

    var kata = document.getElementById("kata").value;

    let i = 0;
    for (i; i <= indo.length;) {

        if (kata == "" || !kata) {
            var katas = "Masukan Kata";
        } else if (kata == indo[i]) {
            var katas = inggris[i];
            document.getElementById("hasil").innerHTML = katas;
        }
        i++
    }
};

function tambah() {
    var kataind = document.getElementById("ind").value;
    var kataing = document.getElementById("ing").value;

    indo.push(kataind);
    inggris.push(kataing);
    view();

}

function view() {
    var tabel = document.getElementById("output");
    tabel.innerHTML = "<tr><th>No</th><th>Bahasa Indonesia</th><th>Bahasa Inggris</th><th>Action</th></tr>";
    for (let i = 0; i < indo.length; i++) {
        var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + indo[i] + "</td><td>" + inggris[i] + "</td><td>"+ btnHapus + "</tr>";
    }
};

function hapus(id) {
    indo.pop(id);
    inggris.pop(id);
    view();
}

view();
