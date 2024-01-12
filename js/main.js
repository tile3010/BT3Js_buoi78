// Add num
var numberAray = [];
function addNum() {
    var num = Number(document.querySelector("#number").value);
    numberAray.push(num);
    document.querySelector("#txtNum").innerHTML = numberAray;
}
document.querySelector("#btnNum").onclick = addNum;

//bài 1
function sum() {
    var total = 0;
    for (var i = 0; i < numberAray.length; i++) {
        if (numberAray[i] >= 0) {
            total += numberAray[i];
        }
    }

    document.querySelector("#txtSum").innerHTML = "Tổng: " + total;
}
document.querySelector("#btnSum").onclick = sum;

// bài 2
function count() {
    var numberAraycopy = [];
    for (var i = 0; i < numberAray.length; i++) {
        if (numberAray[i] > 0) {
            numberAraycopy.push(numberAray[i])
        }
        var count = numberAraycopy.length;
        document.querySelector("#txtCount").innerHTML = "Đếm số dương: " + count;
    }
}
document.querySelector("#btnCount").onclick = count;

// bai 3
function findMin() {
    var min = numberAray[0];
    for (var i = 1; i < numberAray.length; i++) {
        if (min > numberAray[i]) {
            min = numberAray[i]
        }
    }
    document.querySelector("#txtMin").innerHTML = "Số nhỏ nhất: " + min;
}

document.querySelector("#btnMin").onclick = findMin;

// bài 4
var numbers = [];
function positiveNumbers() {
    for (var i = 0; i < numberAray.length; i++) {
        if (numberAray[i] > 0) {
            numbers.push(numberAray[i])
        }
    }
    var min = numbers[0];
    for (var j = 1; j < numbers.length; j++) {
        if (min > numbers[j]) {
            min = numbers[j];
        }
    }
    console.log("a: " + numbers);
    document.querySelector("#txtSoDuong").innerHTML = "Số dương nhỏ nhất: " + min;

}
document.querySelector("#btnSoDuong").onclick = positiveNumbers;

// bài 5
function evenNumberEnd() {
    var numberEnd = [];
    for (var i = 0; i < numberAray.length; i++) {
        if (numberAray[i] % 2 == 0) {
            numberEnd.push(numberAray[i])
        }
    }
    var result = numberEnd[numberEnd.length - 1];
    document.querySelector("#txtSoChan").innerHTML = "Số chẵn cuối cùng: " + result;

}
document.querySelector("#btnSoChan").onclick = evenNumberEnd;

// bài 6 
function convert(location1, location2) {
    var location1 = Number(document.querySelector("#location1").value);
    var location2 = Number(document.querySelector("#location2").value);

    var temp = numberAray[location1];
    numberAray[location1] = numberAray[location2];
    numberAray[location2] = temp;

    console.log(numberAray);
    document.querySelector("#txtDoi").innerHTML = "Mảng sau khi đổi" + numberAray;

}
document.querySelector("#btnDoi").onclick = convert;

// bài 7
function sortNuber() {
    var scoreArrcopy = []
    for (var i = 0; i < numberAray.length; i++) {
        scoreArrcopy.push(numberAray[i]);
    }
    scoreArrcopy.sort(function (a, b) {
        return a - b;
    })
    document.querySelector("#txtSapXep").innerHTML = "Mảng sau khi sắp xếp: " + scoreArrcopy;
}
document.querySelector("#btnSapXep").onclick = sortNuber;

//  bài 8
function primeNumber() {
    var primeNumbercopy = []
    for (let i = 0; i < numberAray.length; i++) {
        if (primeNumber1(numberAray[i]) == 1) {
            primeNumbercopy.push(numberAray[i]);
        } else {
            // return -1;
        }
    }
    document.querySelector("#txtSoNguyenTo").innerHTML = "Số nguyên tố đầu tiên: " + primeNumbercopy[0];
}
document.querySelector("#btnSoNguyenTo").onclick = primeNumber;
function primeNumber1(n) {
    var flag = 1;
    if (n < 2) {
        return flag = 0;
    }
    var i = 2;
    while (i < n) {
        if (n % i == 0) {
            flag = 0;
            break;
        }
        i++;
    }
    return flag
}

// bài 9
var intNumBer = [];
function intNumber() {
    var intN = Number(document.querySelector("#intNumber").value);
    intNumBer.push(intN);
    for (i = 0; i < intNumBer.length; i++) {
        Number.isInteger(intNumBer[i]);
    }
    var result = intNumBer.length;
    document.querySelector("#txtSoNguyen1").innerHTML = intNumBer;
    document.querySelector("#txtSoNguyen").innerHTML = "Đếm số nguyên: " + result;
}
document.querySelector("#btnSoNguyen").onclick = intNumber;

// bài 10
function countNumberPositiveMinus() {
    var soAm = [];
    var soDuong = []
    for (var i = 0; i < numberAray.length; i++) {
        if (numberAray[i] < 0) {
            soAm.push(numberAray[i]);
        } else {
            soDuong.push(numberAray[i]);
        }
    }
    if (soDuong.length > soAm.length) {
        document.querySelector("#txtSoSanh").innerHTML = "Số Dương > Số Âm";
    }else if(soDuong.length == soAm.length){
        document.querySelector("#txtSoSanh").innerHTML = "Số Dương = Số Âm";
    } 
    else {
        document.querySelector("#txtSoSanh").innerHTML = "Số Dương < Số Âm";
    }
}
document.querySelector("#btnSoSanh").onclick = countNumberPositiveMinus;