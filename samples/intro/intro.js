/*eslint-disable */

// hard to follow
function a(arr){
  var t=0
   for(i =0; i< arr.length;i++ ) 
       t  =t+arr[i]
       return   t    / arr .length}


// easier to understand (and now notice how we can see things like a problem when numbers is empty)

function average(numbers) {

    var sum = 0;
    for (index = 0; index < numbers.length; index++) {
        sum = sum + numbers[index];
    }

    return sum / numbers.length;
}
