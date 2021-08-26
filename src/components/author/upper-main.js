import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBMedia } from "mdbreact";

import author from '../../../static/author/main_author.jpg'

import '../../assets/scss/author.scss'

const UpperMain = () => {

    return (
            <div className="author-content-section">
                <section className="upper-main">
                    <div className="container-gt">
                        <MDBCard className="my-5 text-center card z-depth-5 hoverable">
                            <MDBCardBody>
                                <MDBRow className="text-md-left">
                                    <MDBCol lg="6" md="12" className="mb-5">
                                        <MDBMedia object src={author} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid author-img"
                                        tag="img"
                                        alt="Sample avatar" />
                                    </MDBCol>
                                    <MDBCol md="8" lg="6" className="float-right author-content text-center">
                                        <h1 className="font-weight-bold mb-3">Edwin Alan Salhany</h1>
                                        <h6 className="font-weight-bold white-text mb-3">
                                            Author/Writer
                                        </h6>
                                        <p className="white-text">
                                        I am the American born son of missionary parents, grew up in Central Africa, and am a lifelong disciple of Christ and a student of the Scriptures. 
I graduated in 1978 from Southern Missionary College, Collegedale, TN, cum laude with BA degrees in theology and applied religion.  I have been blessed to be able to use my education as a youth leader, church elder and lay-preacher.
Before, during and after college I worked in various blue-collar trades until I found employment as an industrial arts, Bible and history teacher at Pine Forest Academy, a private high school in Chunky, Mississippi. I finished my tenure there as the acting school principal.  I am also a certified locksmith, an ASE certified master auto mechanic, and electronic engine control specialist.  Since 1984 I have also been a lifestyle/nutritional consultant and the owner/operator, in partnership with my wife, of a successful health and nutrition retail store.  
While I entertain a wide range of interests my favorite areas of study include Bible history and chronology, eschatology, and the prophetic significance of the Jewish Tabernacle/Temple services and festivals. 
I reside with my wife and family in Ethridge, Tennessee, where we serve our community through our natural foods business and various community health projects, and our church as local leaders.     

                                        </p>
                                        <a href="https://www.facebook.com/StrattonPressInc/" target="_blank" className="p-2 fa-lg fb-ic">
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
                </section>
            </div>
    )
}

export default UpperMain