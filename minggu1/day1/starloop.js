    let hasil = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j <= i; j++) {
           hasil += '#';
        }
        hasil += '\n';
    }
    console.log(hasil);
