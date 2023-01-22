body{
    font-family: "Montserrat";
}
#title{
    background-color:#ff4c68;
    color:#fff ;
}

.container{
    padding: 3% 15% 15%;
}
 
h1{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    /*font size defined with inline css*/
    line-height: 1.5;
    
}
h3{
    font-family:"Montserrat" ;
    font: weight 1.5rem; 

}
h2{
    font-family: 'Montserrat', sans-serif;
    /*font size defined with inline css*/
    line-height: 1.5;
}
p{
    color: #8f8f8f;
}
/*
.navbar-brand{
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold;
    font: size 60px;
    color: #fff;
 }
*/
 .navbar-logo {
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold;
    padding-top: var(--bs-navbar-brand-padding-y);
    padding-bottom: var(--bs-navbar-brand-padding-y);
    margin-right: var(--bs-navbar-brand-margin-end);
    text-decoration: none;
    white-space: nowrap;
    color: #fff;
    font-size: 30px;

}
.nav-item{
    padding: 0 18px;
}
.nav-linke{
    font-family: "Montserrat";
    padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
    font-size: 1.2rem;
    color: #fff;
    text-decoration: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
   
}
.dowload-button{
    margin: 5% 3% 5% 0;

}

.title-image{
    
    transform:rotate(25deg);
    position: absolute;
    right: 30%;
   
}


#features{
    padding:7% 15%  ;
    background-color: #fff;
    position: relative;
   z-index: 1;
}
.feature-box{
    text-align: center;
    padding: 4.5%;
}

.icon{
    color:#ef8172 ;
    margin-bottom: 1rem;

}
.icon:hover{
    color: #ff4c68;
}

#testimonials{
    
    text-align: center;
    background-color: #ff4c68;
    color: #fff;
}
.testimonial-image{
    width: 10%;
    border-radius: 100%;
    
}
.carousel-item{
    padding: 7% 15%;
}

#press{
    background-color: #ff4c68;
    text-align: center;
    padding-bottom: 3%;
}

.press-logo{
    width: 15%;
    margin: 20px 20px 50px;
}

#pricing{
    padding: 100px;
    text-align: center;
}
.pricing-column{
    padding: 3% 2%;
}

#cta{
    background-color:#ff4c68;
    text-align: center;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 100%;
    padding: 7% 15% ;
   

}
#footer{
    background-color: #fff;
    text-align: center;
    padding: 25px ;
}



@media (max-width: 1028px){
    #title {
        text-align: center;
    }
    .title-image{
        position: static;
        transform: rotate(0);
    }
}