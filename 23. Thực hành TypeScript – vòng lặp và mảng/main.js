{
    // khai báo và gán giá trị ban đầu
    var myNumber = [1, 2, 3, 4, 5];
    // for
    for (var i = 6; i <= 10; i++) {
        myNumber.push(i);
    }
    myNumber[0] = 100;
    // print - for of
    for (var _i = 0, myNumber_1 = myNumber; _i < myNumber_1.length; _i++) {
        var x = myNumber_1[_i];
        console.log(x);
    }
}
