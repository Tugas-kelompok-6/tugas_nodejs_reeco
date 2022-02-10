function value(jumlah){
    let total = jumlah.reduce((val, nilaiSekarang)=>{
        return val + nilaiSekarang
    },0)
    var avg = total / jumlah.length;

    console.log(avg.toPrecision(3));
}
value([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])
value([2, 3, 2, 3])
value([3, 3, 3, 3, 3])