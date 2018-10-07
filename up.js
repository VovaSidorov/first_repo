
plus = "+";
minus = "-";
ymnozh = "*";
delen = "/";

var sum = 0;

  var value1 = prompt("Введите число");
  console.log(value1);

  pr_value1 = parseInt(value1);

  // if (pr_value1!=value1) {
  //   alert("Вы ввели не коректное число"); 
  //   break;
  // }
 

  var znak = prompt("Введите знак");
  console.log(znak);
  if (znak == '')
  {
      alert('Вы ввели неправельный оператор');
  } 
  else
  var value2 = prompt("Введите число");
  console.log(value2);

  if (znak == plus)
  {
  sum = parseInt(value1) + parseInt(value2);
  }
  else if (znak == minus)
  {
  sum = parseInt(value1) - parseInt(value2);
  }
  else if (znak == ymnozh)
  {
  sum = parseInt(value1) * parseInt(value2);
  }
  else if (znak == delen)
  {
    sum = parseInt(value1) / parseInt(value2);
  }
  console.log(sum);
alert(parseInt(sum));
 

do {
  var znak = prompt("Введите знак");
  console.log(znak);
  
  if (znak != '')
  {
    var value2 = prompt("Введите число");
    console.log(value2);
  
        if (znak == plus)
        {
        sum += parseInt(value2);
        }
        else if (znak == minus)
        {
        sum -=  parseInt(value2);
        }
        else if (znak == ymnozh)
        {
        sum *= parseInt(value2);
        }
        else if (znak == delen)
        {
          sum /= parseInt(value2);
        }
   }
  console.log(sum);
alert(parseInt(sum));
} while (znak != '')
 




