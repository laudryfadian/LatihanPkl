    function Person(first, last, umur, mata) {
    this.firstName = first;
    this.lastName = last;
    this.age = umur;
    this.eyeColor = mata;
  }
  
  var myFather = new Person("Jonny", "Dip", 48, "blue");
  var myMother = new Person("Salty", "Spyton", 30, "brown");
  
  document.write("Nama ayahku "+myFather.firstName+" dan nama ibuku "+myMother.firstName);

