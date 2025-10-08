{
    // khai báo và gán giá trị ban đầu
    let myNumber: number[] = [1,2,3,4,5];

    // for
    for(let i=6; i<=10; i++){
        myNumber.push(i);
    }

    myNumber[0] = 100;

    // print - for of
    for(let x of myNumber){
        console.log(x);
    }

}