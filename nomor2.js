function dropRight(arr, drop =1) {
  var balik = arr.reverse();
  var hasil = balik.slice(drop);
  console.log(hasil.reverse());
  
}
dropRight([1, 2, 3])
dropRight([1, 2, 3], 2)
dropRight([1, 2, 3], 5)
dropRight([1, 2, 3], 0) 