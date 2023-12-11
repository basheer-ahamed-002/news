const nav=document.querySelector(".nav")
 nav.addEventListener('click',tabclick);


 function tabclick(event){

    const act=document.querySelectorAll(".active");

    act.forEach((btn)=>{
        btn.classList.remove('active')
    })

    const rem=document.querySelectorAll(".active-page");
    rem.forEach((del)=>{
        del.classList.remove('active-page')
    })



    event.target.parentElement.classList.add('active') 
    let id=event.target.href.split("#")[1]
    const one=document.getElementById(id);
    one.classList.add('active-page')
 }

 const more=document.querySelector(".more");
const read=document.querySelector(".read1");
const one=document.querySelector(".click");
const two=document.querySelector(".photos")


more.addEventListener('click',()=>{
    read.classList.add('active-read')
})
 
one.addEventListener('click',()=>{
    if(confirm("you want to see the Future"))
    two.classList.add('active-photo')
})