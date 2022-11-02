function test(){
    let arr = [1,-100, 1234, 0 , 5, -200, 2, 300, 1000000, -1000, 3, 20]
    let newArr = [...arr];
    newArr.sort(function(a,b){
        return a-b;
    });
    console.log(newArr);

    for(i=0; i<arr.length; i++){
        if(newArr[i]<0){
            newArr.splice(i, 1);
            i--;
        }
    }
    console.log(newArr);
    let num =null;

    for(num = 0;num<newArr.length;num++){
        if(newArr[num]!=num){
            break;
        }
    }
         console.log("num : "+num); 
         document.write(num);
    }
test();

function func(arr){
    //배열을 구별 1. 오름차순 2. 0보다 큰 배열만 추가
    arr.sort((a,b)=>a-b).filter((x)=>x>0);
    let i=1;
    while(i<10000000){
        if(!arr.includes(i))break;
        i++;
    }
    return i;
}

console.log(func([1,-100,1234,0,5,-200,2,300,100000,-1000,3,20,4]));