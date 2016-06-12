for(i = 0; i < 4; i++) {
for(j = 0; j < 2; j++){
alert(i + ", " + j)
}
}

var array1 = [" Kersen", " Sinaasappel"];
var array2 = ["sap", "jam"];
var array3 = [];

for (var i = 0; i < array1.length; i++){
for (var j = 0; j < array2.length; j++){
array3.push(array1[i] + array2[j])
}
}
alert(array3);