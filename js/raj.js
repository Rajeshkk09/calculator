var input = document.getElementById('inputbox');
var button = document.querySelectorAll('button');
var arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            String = eval ( string );
            input.value = string;
        }else if ( e.target .innerHTML == 'AC') {
            String = " ";
            input.value = string;
        }else if ( e.target .innerHTML == 'DEl') {
            string = string.substring(0,string.length-1,);
            input.value = string;
        }else{
            string+= e.target.innerHTML;
            input.value=string;
        }
    })
})