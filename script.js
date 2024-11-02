const form = document.getElementById("genarator");
const qr = document.getElementById("qrcode");



const onGenarateSubmit = (e) => {
  e.preventDefault();
  cleanui();


  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;
  console.log(url,size);

  if(url===""){
    alert("please enter a valid URL");
  }
  else{
    showspinner();
  
    setTimeout(() => {
      hidespinner();
      genarateQrCode(url,size);

      setTimeout(() => {
        const saveurl=qr.querySelector("img").src;
        createSaveBtn(saveurl);
      }, 50);
    }, 1000);
  }

}

const genarateQrCode = function (url,size) {
   
   const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
  
}

 const cleanui= function(){
  qr.innerHTML="";
  const savebtn = document.getElementById("savelink");

  if(savebtn){
    savebtn.remove;
  }
 }



const showspinner= function(){
   document.getElementById("spining").style.display="block";
}

const hidespinner= function(){
  document.getElementById("spining").style.display="none";
}

const createSaveBtn = function(saveurl){

const link = document.createElement("a");
link.id ="savelink";
link.classList ="download-btn";
link.href=saveurl;
link.download="qrcode";
link.innerHTML="Save QR Code";
document.getElementById("genarator").appendChild(link);

}

hidespinner();

form.addEventListener("submit",onGenarateSubmit)