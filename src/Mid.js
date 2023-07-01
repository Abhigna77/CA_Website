import React from "react"

export default function Mid(){
    return(
    
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
  </div>
  <div class="carousel-inner">

    <div class="carousel-item active">
    <div class="carousel-caption d-none d-md-block" >
       
        <h1 className="pop">CAMPUS AMBASSADOR</h1>
        <h3 className="po">A wonderful opportunity!</h3>
        <img src="https://callmevamp.github.io/Wiss_Website/ca_wiss.png" className="bb" />
        <br />
        
        <a href="#ContactUs"><input className="m" type="button" value='Contact Us'/></a>
        
        {/* <button className="m" onClick="document.getElementById('ContactUs').scrollIntoView();">Contact Us</button> */}
        {/* <button className="m">Apply Now</button> */}
        
      </div>
      <img src="https://th.bing.com/th/id/OIP.wrGksyHG5BSX46K0l_-2fwHaEK?pid=ImgDet&rs=1" class="d-block w-100" alt="..." />
      
    </div>

    <div class="carousel-item" id="link">
      <img src="https://th.bing.com/th/id/OIP.wrGksyHG5BSX46K0l_-2fwHaEK?pid=ImgDet&rs=1" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <br/>
        <br/>
        <h3 className="pop">Come!!,Join us to witness one of the most awaited Fests in Eastern India.</h3>
        <br />
        <br />
        <div className="ggg">
        <img src="https://th.bing.com/th/id/OIP.Ua5AXhtGRgPuisZVmetclQHaFL?pid=ImgDet&rs=1" className="gg"/>
        <h3 className="aa"><a href="https://www.facebook.com/">Facebook</a></h3>
        </div>
        <div className="ggg">
        <img src="https://th.bing.com/th/id/R.5e04fd779e7607a47d0bad14976caa90?rik=MYieavaZpaXrMw&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f02%2fNew-Instagram-logo.jpg&ehk=kTNHOU7RNhSBC8VTl4FPXOmyjXgyJlrNtPiZ9qk03fA%3d&risl=&pid=ImgRaw&r=0" className="gg" />
        <h3 className="aa"><a href="https://www.instagram.com/">Instagram</a></h3>
        </div>
        <div className="ggg">
        <img src=" https://th.bing.com/th/id/R.47eaadd0d7d830e6997047b770117584?rik=2Rnd7K5MC3ddmQ&riu=http%3a%2f%2fimages.hamodia.com%2fhamod-uploads%2f2017%2f04%2f26185611%2f19851248_xxl-1024x853.jpg&ehk=BEu2UzHTBPnEiGzhUQzrXIqP8JxQenepg7YVS6la9fs%3d&risl=&pid=ImgRaw&r=0" className="gg"/>
        <h3 className="aa"><a href="https://twitter.com/i/flow/login">Twitter</a></h3>
        </div>
      </div>
    </div>

   

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}