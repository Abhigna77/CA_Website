import React from 'react';
export default function Rewards(){
    
    return(
        <div className="total" id="Incentives">
            <br />
            <br />
             <h2 className="dd">Rewards and Incentives</h2>
             <br />
             <br />
            <div className="box">
            
                <div > <img id="imageAlignment" src="https://th.bing.com/th/id/OIP.d_dbwo5yQLL7ItiCQZnRMQHaFo?pid=ImgDet&rs=1" /><h4>Coupons</h4></div>
            
                <div > <img id="imageAlignment" src="https://th.bing.com/th/id/OIP.QNcozUvyk5AnCKOtpHDL9wHaFj?pid=ImgDet&rs=1" /><h4> Visit Campus</h4></div>
            
            
                <div > <img id="imageAlignment" src="https://cdn3.iconfinder.com/data/icons/christmas-hand-drawn-colorful-collection/100/sack-512.png" /><h4>Goodies</h4></div>
            
            </div>
            <br />

            <div className="box">
                <div className="ff" > <img id="imageAlignment" src="https://st2.depositphotos.com/1030387/8812/v/450/depositphotos_88121742-stock-illustration-participation-team-people.jpg" /><h4>Free Participation</h4></div>
            

                <div  className="kk"> <img id="imageAlignment" src="https://media.gettyimages.com/videos/certificate-icon-animation-video-id1009581024?s=640x640" /><h4>Get Certified</h4></div>


                <div className="ll"> <img id="imageAlignment" src="https://img.favpng.com/6/4/9/portable-network-graphics-concert-stage-image-desktop-wallpaper-png-favpng-YZNdzKyaQKJwBhQHbK26f6EX8.jpg" /><h4>Starnite Passes</h4></div>

            </div>
            <div className="new">
                <br />
                <br />
            <h3>For detailed information regarding perks</h3>
            <br />
            <button className="but" onClick={()=>window.location.href="https://www.wissenaire.org/"}>Click Here</button>
            </div>
            

        </div>
    )
}