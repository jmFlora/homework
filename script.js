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