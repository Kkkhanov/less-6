


const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max)+1)
        );


const arr = generateArray(20, 99);
let evensum = 0;
let oddsum = 0;
for(let i=0; i<arr.length; i++){
    if (arr[i] % 2 == 0){
        evensum += arr[i]
    }
}
for(let i=0; i<arr.length; i++){
    if (arr[i] % 2 == 1){
        oddsum += arr[i]
    }
}

function f1(){
    let str = ' ';

    for (let i = 0; i<$('#num').val(); i++){
        str += '<h4>' + $('#string').val() + '</h4>'
        $('#out').html(str)
    }
    
}

function f2(){
    let red = Math.floor(Math.random() * Math.floor(255));

    let green = Math.floor(Math.random() * Math.floor(255));

    let blue = Math.floor(Math.random() * Math.floor(255));

    $("h4:nth-child(3n+1)").css("color", "rgb(" + red + "," + green + "," + blue + ")" );
}

function f3(){
    let red = Math.floor(Math.random() * Math.floor(255));

    let green = Math.floor(Math.random() * Math.floor(255));

    let blue = Math.floor(Math.random() * Math.floor(255));

    $("h4:nth-child(2n+1)").css("color", "rgb(" + red + "," + green + "," + blue + ")" );
}

$('#arr').text(arr)
$('#evensum').text('сумма четных чисел: ' + evensum)
$('#oddsum').text('сумма нечетных чисел: ' + oddsum)
$('button').click(f1); 
$('button').click(f2);
$('button').click(f3)

//function getRandomInt(max) {
    //return Math.floor(Math.random() * Math.floor(max));
 // }
  
  //var red = getRandomInt(255);
 // var green = getRandomInt(255);
  //var blue = getRandomInt(255);
  //$("#out").css("backgroundColor", "rgb(" + red + "," + green + "," + blue + ")" );
  