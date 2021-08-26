import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import '../assets/scss/mid-main.scss'
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBMedia } from "mdbreact";

const Midmain = () => {
    return(
        // <div>
        //     <h1>Hello world</h1>
        // </div>
        <MDBCard className="my-5 px-5 pb-1 text-center card z-depth-5 hoverable">
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold my-5 about-the-author">
                    ABOUT THE AUTHOR
                </h2>
                <p className="grey-text w-responsive mx-auto mb-5">
                    Author / Writer
                </p>
                <MDBRow className="text-md-left">
                     <MDBCol lg="6" md="12" className="mb-5">
                        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                        tag="img"
                        alt="Sample avatar" />
                     </MDBCol>
                     <MDBCol md="8" lg="6" className="float-right">
                        <h4 className="font-weight-bold mb-3"></h4>
                        <h6 className="font-weight-bold grey-text mb-3">
                            Web Designer
                        </h6>
                        <p className="grey-text">
                           
                        </p>
                        <a href="#!" className="p-2 fa-lg fb-ic">
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href="#!" className="p-2 fa-lg tw-ic">
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href="#!" className="p-2 fa-lg dribbble-ic">
                            <MDBIcon fab icon="dribbble" />
                        </a>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}

export default Midmain;