import React from 'react'
export default function Form(){
    return(
        

<div className="pp">
    <br />
    <br />
    <h2>Get in Touch!</h2>
    <br />
<section class="mb-4" >



<div class="row" id="ContactUs">

    <div class="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

           
            <div class="row">

               
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control"  />
                        <label for="name" class="">Your name</label>
                    </div>
                </div>
               
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control" />
                        <label for="email" class="">Your email</label>
                    </div>
                </div>
            <br />
 
            </div>
            
            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control" />
                        <label for="subject" class="">Subject</label>
                    </div>
                </div>
            </div>
            
            <div class="row">

                
                <div class="col-md-12">

                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                    </div>

                </div>
            </div>
           <br />

        </form>

        <div class="text-center text-md-left">
            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div class="status"></div>
    </div>
    
    
    

</div>

</section>
<br />
<br />
<div className="footer"><h2>Contact Details</h2>
 <h3>Gokul-7207714570</h3>
 <h3>Yaswanth-7032268693</h3>
 <p>For more information about us,visit our website</p><a href="wissenaire.org">Wissenaire</a>
 <p>© 2023 All Rights Reserved By Wissenaire</p>
</div>
</div>

    )
}