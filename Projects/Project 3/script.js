const forms=document.querySelector('.form1')

forms.addEventListener('submit',function(e){
 e.preventDefault()

 const number1=parseInt(document.querySelector('#number1').value);
 const number2=parseInt(document.querySelector('#number2').value);

 const results=document.querySelector('#result')

 const totalSum=number1+number2;

 results.innerHTML=`<span>The sum of two number is ${totalSum}</span>`

})