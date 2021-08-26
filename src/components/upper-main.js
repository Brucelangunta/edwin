import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/banner/pexels-photo-417074.jpeg'
import { MDBMask, MDBView } from "mdbreact";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBMedia } from "mdbreact";
import author from '../../static/author/main_author.jpg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import '../assets/scss/upper-main.scss'

import Book1 from '../../static/books/Book1.png'
import Book2 from '../../static/books/Book2.png'
import Book3 from '../../static/books/Book3.png'
import Book4 from '../../static/books/Book4.png'
import Book5 from '../../static/books/Book5.png'
import Book6 from '../../static/books/Book6.png'

import Logo1 from '../../static/logo/amazon.png'
import Logo2 from '../../static/logo/bam.png'
import Logo3 from '../../static/logo/Barnes-and-noble-booksellers-logo.png'
import Logo4 from '../../static/logo/stratton-logo.png'

const UpperMain = () => {
    const [mobState, __functState] = useState(false);


    useEffect(() => {
        
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 760);
        });

      }, [mobState]); 


      console.log(mobState);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: (mobState) ? 1 : 4,
        slidesToScroll: 1,
     };

    return (
            <div className="content-section z-depth-5 hoverable">
                <section className="upper-main">
                    <div className="container-gt">

                        <div className="content-wrapper">
                            <h1>Book</h1>
                            
                            <p className="middle-params">
                            Read and study all four Gospels at the same time! Complete and consolidated. All of the detail – None of the duplication
                            </p>
                                                        
                        </div>
                        <p className="fav-line">
                            "The Last Supper started out as a traditional Passover Seder.  This retelling of the Exodus story, of how a covenant-keeping God rescued His people from slavery, and restored them to their Promised Land, contained symbols and types that pointed to an even greater redemption, that of humanity from the web of deceit and lies that held them in the slavery of rebellion against Yehovah.  This was the Festival of Redemption, and on the eve of His death Yehoshua, Yehovah’s salvation, used the Seder symbols and types to teach His disciples how He, their true Passover Lamb, was going to redeem them.  In doing so He introduced some new elements into the Seder, transforming it into the Lord’s Supper.  It is this editor’s opinion that Christ did not intend to completely do away with the Haggadah, reducing it to a couple Messianic memorials, but rather to enhance the telling by highlighting the fulfillment of the Passover prophecies." <br/>  His instructions seem to indicate that this celebration of redemption was to continue (see 1 Corinthians 5:7, 8).  –  Notes on the Last Supper - Appendix C
                            </p>
                        <CarouselProvider
                            naturalSlideWidth={50}
                            naturalSlideHeight={25}
                            totalSlides={1}
                            visibleSlides={1}
                            infinite={true}
                            isPlaying={true}
                            dragEnabled={true}
                            interval={5000}
                            className="carousel"
                        >
                            {/* <ButtonBack>Back</ButtonBack>
                            <ButtonNext>Next</ButtonNext> */}
                             <Slider className="slider">
                                <Slide className="slide" index={0}><img src={Book1}/></Slide>
                                {/* <Slide className="slide" index={1}><img src={Book2}/><h3>Alaskan Wilderness</h3></Slide> */}
                                {/* <Slide className="slide" index={2}><img src={Book3}/><h3>Alaskan Wilderness 2</h3></Slide>
                                <Slide className="slide" index={2}><img src={Book4}/><h3>Alaskan Wilderness 3</h3></Slide>
                                <Slide className="slide" index={2}><img src={Book5}/><h3>Marriage of the Heart</h3></Slide>
                                <Slide className="slide" index={2}><img src={Book6}/><h3>Ancient Art of Dowsing</h3></Slide> */}
                            </Slider>
                            
                            
                        </CarouselProvider>
                        <p className="p15"> Taking a unique approach to harmonizing the Biblical accounts, Edwin Alan Salhany expertly weaves the four Gospel stories together into one continuous chronological narrative, removing duplication, and yet preserving all the details and nuances of the different writers.  </p>
                        <span><Link to="/about-the-book">READ MORE</Link></span>
                        {/* <Slider {...settings}>
                            <div className="book-wrapper-slider">
                                <img src={Book2}/>
                                <h3>Alaskan Wilderness</h3>
                            </div>
                            
                            <div className="book-wrapper-slider">
                                <img src={Book3}/>
                                <h3>Alaskan Wilderness 2</h3>
                            </div>

                            <div className="book-wrapper-slider">
                                <img src={Book4}/>
                                <h3>Alaskan Wilderness 3</h3>
                            </div>

                            <div className="book-wrapper-slider">
                                <img src={Book6}/>
                                <h3>Ancient Art of Dowsing</h3>
                            </div>

                            <div className="book-wrapper-slider">
                                <img src={Book5}/>
                                <h3>Marriage of the Heart</h3>
                            </div>

                            <div className="book-wrapper-slider">
                                <img src={Book1}/>
                                <h3>Visited by Star Travelers</h3>
                            </div>
                    </Slider> */}
                   
                    </div>
                    <br/>
                    <br/>
                 
                   
                    <div className="container-gt">
                        <MDBCard className="pb-1 text-center card z-depth-5 hoverable">
                            <MDBCardBody>
                                <h2 className="h1-responsive font-weight-bold my-5 about-the-author">
                                    AUTHOR
                                </h2>
                                <MDBRow className="text-md-left">
                                    <MDBCol lg="6" md="12" className="mb-5">
                                        <MDBMedia object src={author} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid author-img"
                                        tag="img"
                                        alt="Sample avatar" />
                                    </MDBCol>
                                    <MDBCol md="8" lg="6" className="float-right author-content">
                                        <h1 className="font-weight-bold mb-3">Edwin Alan Salhany</h1>
                                        <h6 className="font-weight-bold white-text mb-3">
                                            Author/Writer
                                        </h6>
                                        <p className="white-text">
                                        I am the American born son of missionary parents, grew up in Central Africa, and am a lifelong disciple of Christ and a student of the Scriptures. <br/>
I graduated in 1978 from Southern Missionary College, Collegedale, TN, cum laude with BA degrees in theology and applied religion.  I have been blessed to be able to use my education as a youth leader, church elder and lay-preacher..

                                            <br/><br/>
                                             <Link to="/about-the-author">Read More</Link>
                                        </p>
                                        <a href="https://www.facebook.com/StrattonPressInc" target="_blank" className="p-2 fa-lg fb-ic">
                                            <MDBIcon fab icon="facebook-f" />
                                        </a>
                                        <a href="https://twitter.com/strattonpress/" target="_blank" className="p-2 fa-lg tw-ic">
                                            <MDBIcon fab icon="twitter" />
                                        </a>
                                        <a href="https://www.instagram.com/strattonpress/" target="_blank" className="p-2 fa-lg tw-ic">
                                            <MDBIcon fab icon="instagram" />
                                        </a>
                                        <a href="https://www.goodreads.com/author/show/6067587.Edwin_Alan_Salhany" target="_blank" className="p-2 fa-lg dribbble-ic">
                                            <MDBIcon fab icon="goodreads-g" />
                                        </a>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                       <div className="testimonialsmid-main z-depth-5">
                        <div className="container-gt">
                            <div className="content-wrapper">
                                <h1>Testimonials</h1>
                                
                               <div className = "flex">
                                <div className="middle card">
                               <p> What a great book! I love it.  It is certainly a tremendous product that I know I will find very useful....You've done a great job.</p>
                               <p className="name">   John Bradshaw </p>
                                <p className= "desc"> Speaker/Director It is Written International</p>
                                </div>

                                <div className="middle card">
                               <p> I just want to express my appreciation for your edition of the Gospels. It was such a pleasure to read that I read it half through as soon as I got home with it.
                                Without the duplications the story is much stronger and the sequence of events easier to follow. I like the use of the name "Yeshua". It seems to me to add a little reverence to the reading. I also find the appended material quite useful.
                                I think "The Gospel 'lite'" is a good idea well done and I recommend it to anyone and everyone. </p>

                               <p className="name"> Ray Barger </p>
                                <p className="desc"> Reader</p>
                                </div>
                                
                                </div>
                            </div>

                            <div className="grid-template-four-col" id="logos-col">
                                                            

                            </div>
                        </div>
                    </div>
                    <div className="mid-main z-depth-5">
                        <div className="container-gt">
                            <div className="content-wrapper">
                                <h1>FEATURED</h1>
                                
                                <p className="middle-params">
                                    Edwin Alan Salhany has been featured numerous times on...
                                </p>
                            </div>
                            <div className="grid-template-four-col" id="logos-col">
                                <li>
                                    <img src={Logo1}/>
                                </li>

                                <li>
                                    <img src={Logo2}/>  
                                </li>

                                <li>
                                    <img src={Logo3}/>
                                </li>

                                <li>
                                    <img src={Logo4}/>
                                </li>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default UpperMain