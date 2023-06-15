const nodeList = document.querySelectorAll(".box");

nodeList.forEach(function(e){
    console.log(e);
    e.style.backgroundColor = e.id;
    e.addEventListener('click', function(){
        document.body.style.backgroundColor = e.id
    })
})
