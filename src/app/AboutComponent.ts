import { Component } from '@angular/core';
@Component({
    template: ` 
            <div class="about-section paddingTB60 gray-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 col-sm-6">
                                <div class="about-title clearfix">
                                    <h1>About <span>India Heritage Site</span></h1>
                                    <p class="about-paddingB"> This is basically a simple website which display the list of india top heritage sites listed by UNESCO , in the home page you can find the list of sites with name and image and when you click it you will navigated to info page where you can read about that site and also see more images </p>
                                    <p>sed I made this website using Angular 2 with bootstrap , for now its hard coded list of servce and i also have repos of this site in Github of which link i put down below </p>
                            <div class="about-icons"> 
                                <ul >
                                    <li><a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a> </li>
                                    <li><a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a> </li>
                                    <li> <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a> </li>
                                    <li> <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a> </li>
                                </ul>        
                             </div>
                             <div class="github-icon"> 
                             <p>Github Repo</p>
                                <ul >
                                     <li> <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-github-square fa-3x social"></i></a> </li>
                                </ul>        
                             </div>
                         </div>
                     </div>     	
                </div>
             </div>
         </div>
    `,
    styles: [`
    
    .paddingTB60 {padding:60px 0px 60px 0px;}
.gray-bg {background: #F1F1F1 !important;}
.about-title {}
.about-title h1 {color: #535353; font-size:45px;font-weight:600;}
.about-title span {color: #AF0808; font-size:45px;font-weight:700;}
.about-title h3 {color: #535353; font-size:23px;margin-bottom:24px;}
.about-title p {color: #7a7a7a;line-height: 1.8;margin: 0 0 15px;}
.about-paddingB {padding-bottom: 12px;}
.about-img {padding-left: 57px;}


.about-icons {margin:48px 0px 48px 0px ;}
.about-icons i{margin-right: 10px;padding: 0px; font-size:35px;color:#323232;box-shadow: 0 0 3px rgba(0, 0, 0, .2);}
.about-icons li {margin:0px;padding:0;display:inline-block;}
#social-fb:hover {color: #3B5998;transition:all .001s;}
 #social-tw:hover {color: #4099FF;transition:all .001s;}
 #social-gp:hover {color: #d34836;transition:all .001s;}
 #social-em:hover {color: #f39c12;transition:all .001s;}

    `]
})
export class AboutComponent {
}
