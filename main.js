var confirmbtn=document.getElementsByTagName('button')[0];
var continuebtn=document.getElementsByTagName('button')[1];
var error=document.getElementsByClassName('error');
var input=document.getElementsByTagName('input');
var usname=document.getElementById('name');
var number=document.getElementById('number');
var date=document.getElementById('date');
var cvc=document.getElementById('cvc');
var thanku=document.getElementById('thanku');
var form=document.getElementsByTagName('form')[0];

thanku.style.display="none";

confirmbtn.addEventListener('click',function a()
{


if(/^([a-zA-Z]+)\s([a-zA-Z]+)$/.test(input[0].value)==true)
{usname.textContent=input[0].value;
error[0].style.display="none";
input[0].style.borderColor="  hsl(278, 68%, 11%)";

}
else
{
error[0].style.display="block";
error[0].innerHTML="wrong format"
input[0].style.borderColor="hsl(0, 100%, 66%)";
}


if(/^([0-9]{4})\s([0-9]{4})\s([0-9]{4})\s([0-9]{4})$/.test(input[1].value)==true)
	{number.textContent=input[1].value;
error[1].style.display="none";
input[1].style.borderColor="  hsl(278, 68%, 11%)";

}
else
{
error[1].style.display="block";
error[1].innerHTML="wrong format, numbers only"
input[1].style.borderColor="hsl(0, 100%, 66%)";
}

if(input[2].value<=12 && /^([0-9]{2})$/.test(input[2].value)==true && /^([0-9]{2})$/.test(input[3].value)==true)
{date.textContent=input[2].value+"/"+input[3].value;
error[2].style.display="none";
input[2].style.borderColor="  hsl(278, 68%, 11%)";
input[3].style.borderColor="  hsl(278, 68%, 11%)";

}
else
{
error[2].style.display="block";
error[2].innerHTML="wrong format"
input[2].style.borderColor="hsl(0, 100%, 66%)";
input[3].style.borderColor="hsl(0, 100%, 66%)";
}


if(/^([0-9]{3})$/.test(input[4].value)==true)
	{cvc.textContent=input[4].value;
error[3].style.display="none";
input[4].style.borderColor="  hsl(278, 68%, 11%)";


}
else
{
error[3].style.display="block";
error[3].innerHTML="wrong format"
input[4].style.borderColor="hsl(0, 100%, 66%)";

}


console.log(input[0].innerHTML);


for(var i=0;i<3;i++)
	if(input[i].value=="")
		{error[i].innerHTML="can't be blank";
				error[i].style.display="block";
				}
				

if(input[3].value=="")
		{error[2].innerHTML="can't be blank";
				error[2].style.display="block";
				}


if(input[4].value=="")
		{error[3].innerHTML="can't be blank";
				error[3].style.display="block";
				}
				

var k=0;
for(i=0;i<error.length;i++)
	if(error[i].style.display=="none")
		k++;
	console.log(k);
if(k==4)
	{thanku.style.display="grid";
		form.style.display="none";}


});


continuebtn.onclick=()=>
{
	location.reload();
}


