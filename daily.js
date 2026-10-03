const menuBtn = document.querySelector('.menuBox');
const sidebar = document.querySelector(".sidebar");
let open = true;

menuBtn.addEventListener('click',()=>{
    if(open===false){
        sidebar.classList.add("-left-200");
        sidebar.classList.remove("left-0");

    }else{
        sidebar.classList.remove("-left-200");
        sidebar.classList.add("left-0");

    }
    open = !open;
})