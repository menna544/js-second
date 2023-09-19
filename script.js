let btnsubmit=document.querySelector('.btn-submit');
let form=document.querySelector('.convert')
let inchinp=document.querySelector('.inch-inp')
let convertedinch=document.querySelector('.convertedinch')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    inch();  
})
function inch(){
    if(inchinp.value == ""){
convertedinch.textContent="";
    }else{
        convertedinch.textContent=(inchinp.value) + " inches = " +
        (inchinp.value* 0.0254) + " Meters "
    }
}