class Family {
  constructor(nama, lahir) {
    this.name = nama;
    this.year = lahir;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myFam = new Family("Paijo", 2010);
document.write("Adikku berumur " + myFam.age(year) + " tahun.");

