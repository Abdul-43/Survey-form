const rating=document.querySelectorAll(".stars");

rating.forEach((element,index)=>{
    element.addEventListener('click',()=>{
      let crnt_star=index+1;
      rating.forEach((star,i)=>{
        if(crnt_star>=i+1){
          star.innerHTML=`&#9733`;
        }
        else{
          star.innerHTML=`&#9734`;
        }
      })
    })
})