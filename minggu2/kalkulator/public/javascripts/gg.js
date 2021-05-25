function ganjilgenap(){
    var angka1=parseFloat(document.calculator.angka1.value);
    if(angka1%2==0){
        document.calculator.hasil.value='Angka Genap';
    }else{
        document.calculator.hasil.value='Angka Ganjil';
    }
}