
 let sportName="";
    function nameset(img){
    let h5 = img.name;
   let sportName=h5;
  localStorage.removeItem('sportName');
  localStorage.setItem('sportName', sportName);
  window.location.href = "../pages/sportPage.html";
};

 