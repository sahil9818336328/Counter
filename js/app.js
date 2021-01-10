const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach(function(item){
//console.log(item);
item.addEventListener('click',function(e){

    //console.log(e.currentTarget);
    const check = e.currentTarget.classList;
    if(check.contains('decrease')){
         count--;
    }else if(check.contains('increase')){
        count++;
    }else{
        count = 0;
    }

    value.textContent = count;
    if(count > 0){
        value.style.color='green';
    }
    if(count < 0){
        value.style.color='red';
    }
    if(count === 0){
        value.style.color='black';
    }

});
});


