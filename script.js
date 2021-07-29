swal({
    text: "مرحبا ايها المستخدم عليك مشاركه الموقع لتوفير ارقام باقي الدول",
  });
  setTimeout( function(){
    swal({
    title: "رائع, بما انك مستفاد! قم بمشاركت رابط الصفحه كل ما كان عدد المستخدمين كثيراً كل ما توفرت المزيد من الدول المجانية",
  }); }, 99000 );
    //dev
   //dev
  document.getElementById("foot").innerHTML = "Dev iNmbory";
  //dark fun
  const body = document.querySelector('body');
  const toggle = document.getElementById('toggle');
  toggle.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
  }
  // اسيا
  function rand(len) {
        var randomNumber;
        var n = '0771';
    
    for(var count = 0; count < len; count++) {
        randomNumber = Math.floor(Math.random() * 10);
        n += randomNumber.toString();
    }
        return n;
    }
    function setRand(){
       document.getElementById('rand').value = rand(7); 
    }
    function copynum() {
        var copyText = document.getElementById("rand");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
}
    function copypass() {
        var copyText = document.getElementById("copypass");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
}
// اثير
function rand(len) {
        var randomNumber;
        var n = '0781';
    
    for(var count = 0; count < len; count++) {
        randomNumber = Math.floor(Math.random() * 10);
        n += randomNumber.toString();
    }
        return n;
    }
    function setRand1(){
       document.getElementById('rand1').value = rand(7); 
    }
    function copynum1() {
        var copyText = document.getElementById("rand1");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
}
    function copypass1() {
        var copyText = document.getElementById("copypass1");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
}
// دسبلي
function fucs1(){
            document.getElementById("li1").style.borderBottom = "38px solid rgb(108 150 214)";
            document.getElementById("li2").style.border = "none";
            document.getElementById("li3").style.border = "none";
            document.getElementById("li4").style.border = "none";
            document.getElementById("ather").style.display = "none";
            document.getElementById("asya").style.display = "block";
        }
        function fucs2(){
            document.getElementById("li2").style.borderBottom = "38px solid rgb(108 150 214)";
            document.getElementById("li1").style.border = "none";
            document.getElementById("li3").style.border = "none";
            document.getElementById("li4").style.border = "none";
            document.getElementById("asya").style.display = "none";
            document.getElementById("ather").style.display = "block";
        }
        function fucs3(){
            swal("غير مفعل");
        }
        function fucs4(){
            swal("غير مفعل");
}
// animation
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

