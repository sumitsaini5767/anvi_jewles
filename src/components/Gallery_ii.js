import React from "react";

export default function Gallery_ii() {
  // document.querySelectorAll(".img-div img").forEach((image) => {
  //   image.onclick = () => {
  //     console.log(
  //       (document.querySelector(".popup-img img").src =
  //         image.getAttribute("src"))
  //     );
  //     document.querySelector(".popup-img img").src = image.getAttribute("src");
  //     let imagess = document.querySelector(".popup-img img").src;
  //     console.log(imagess);
  //     var path = imagess.slice(22, 43);
  //     console.log(path);
  //     if (document.querySelector(".popup-img").style.display == "none") {
  //       document.querySelector(".popup-img").style.display = "block";
  //       document.querySelector(".popup-img").style.src = path;
        // console.log(
        //   document.querySelector(".popup-img").style.src
        // )
  //       if (document.querySelector(".popup-img img").src == "") {
  //         console.log("Image is missing");
  //       } else {
  //         console.log("Changed");
  //       }
  //     }
  //   };
  // });
  // document.querySelector(".cross").onclick=()=>{
  //   console.log(document.querySelector(".popup-img").style.display);
  //   document.querySelector(".popup-img").style.display="none";
  // }
  function popup1(){
    document.querySelector(".popup-img1").style.display="block";
  }
  function popup2(){
    document.querySelector(".popup-img2").style.display="block";
  }
  function popup3(){
    document.querySelector(".popup-img3").style.display="block";
  }
  function popup4(){
    document.querySelector(".popup-img4").style.display="block";
  }
  function popup5(){
    document.querySelector(".popup-img5").style.display="block";
  }
  function popup6(){
    document.querySelector(".popup-img6").style.display="block";
  }
  function popup7(){
    document.querySelector(".popup-img7").style.display="block";
  }
  function popup8(){
    document.querySelector(".popup-img8").style.display="block";
  }
  function cancel1(){
    document.querySelector(".popup-img1").style.display="none";
  }
  function cancel2(){
    document.querySelector(".popup-img2").style.display="none";
  }
  function cancel3(){
    document.querySelector(".popup-img3").style.display="none";
  }
  function cancel4(){
    document.querySelector(".popup-img4").style.display="none";
  }
  function cancel5(){
    document.querySelector(".popup-img5").style.display="none";
  }
  function cancel6(){
    document.querySelector(".popup-img6").style.display="none";
  }
  function cancel7(){
    document.querySelector(".popup-img7").style.display="none";
  }
  function cancel8(){
    document.querySelector(".popup-img8").style.display="none";
  }
  return (
    <>
      <div className="galpg2">
        <div className="main-galdiv">
          <div className="galdiv1">
            <div className="img-div" onClick={popup1}>
              <img src="images/gallery-01.jpg" />
            </div>
            <div className="popup-img1 popup-imgg" style={{ display: "none" }}>
            <span className="close" onClick={cancel1}>&times;</span>
            <img src="images/gallery-01.jpg" alt="" />
          </div>
            <div className="img-div" onClick={popup2}>
              <img src="images/gallery-02.jpg" />
            </div>
            <div className="popup-img2 popup-imgg" style={{ display: "none" }}>
            <span className="close" onClick={cancel2}>&times;</span>
            <img src="images/gallery-02.jpg" alt="" />
          </div>
          </div>
          <div className="galdiv2">
            <div className="img-div img-div1" onClick={popup3}>
              <img src="images/gallery-03.jpg" />
            </div>
            <div className="popup-img3 popup-imgg" style={{ display: "none" }}>
            <span className="close" onClick={cancel3}>&times;</span>
            <img src="images/gallery-03.jpg" alt="" />
          </div>
          </div>
          <div className="galdiv1">
            <div className="img-div" onClick={popup4}>
              <img src="images/gallery-04.jpg" />
            </div>
            <div className="popup-img4 popup-imgg" style={{ display: "none" }}>
            <span className="close" onClick={cancel4}>&times;</span>
            <img src="images/gallery-04.jpg" alt="" />
          </div>
            <div className="img-div" onClick={popup5}>
              <img src="images/gallery-05.jpg" />
            </div>
            <div className="popup-img5 popup-imgg" style={{ display: "none" }}>
            <span className="close" onClick={cancel5}>&times;</span>
            <img src="images/gallery-05.jpg" alt="" />
          </div>
          </div>
          <div className="galdiv2">
            <div className="img-div img-div1" onClick={popup6}>
              <img src="images/gallery-06.jpg" />
            </div>
            <div className="popup-img6 popup-imgg" style={{ display: "none" }}>
            <span className="close" onClick={cancel6}>&times;</span>
            <img src="images/gallery-06.jpg" alt="" />
          </div>
          </div>
          <div className="galdiv1">
            <div className="img-div" onClick={popup7}>
              <img src="images/gallery-07.jpg" />
            </div>
            <div className="popup-img7 popup-imgg" style={{ display: "none" }}>
            <span className="close" onClick={cancel7}>&times;</span>
            <img src="images/gallery-07.jpg" alt="" />
          </div>
            <div className="img-div" onClick={popup8}>
              <img src="images/gallery-08.jpg" />
            </div>
            <div className="popup-img8 popup-imgg" style={{ display: "none" }}>
            <span className="close" onClick={cancel8}>&times;</span>
            <img src="images/gallery-08.jpg" alt="" />
          </div>
          </div>
          
        </div>
        <div className="gal-bottom">
          <img src="images/gallery-09.jpg" />
          <img src="images/gallery-10.jpg" />
          <img src="images/gallery-11.jpg" />
          <img src="images/gallery-12.jpg" />
          <img src="images/gallery-13.jpg" />
        </div>
      </div>
    </>
  );
}
