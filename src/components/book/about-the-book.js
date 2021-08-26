import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import '../../assets/scss/book.scss'
import {Link} from 'gatsby'

import Book1 from '../../../static/books/Book1.png'
// import Book2 from '../../../static/books/Book2.png'
// import Book3 from '../../../static/books/Book3.png'
// import Book4 from '../../../static/books/Book4.png'
// import Book5 from '../../../static/books/Book5.png'
// import Book6 from '../../../static/books/Book6.png'

import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBMedia } from "mdbreact";

const AboutTheBook = (props) => {
    // const slug =(props.location.href);
    const disqusConfig = {
        shortname: 'edwin-alan-salhany',
        config: { identifier:  12}
    }

    return(
        <main className="wrapperMain">
				<div 
					className="container"
					id="book-containers" >
                        <MDBCard className="my-5 px-1 pb-1 text-center card z-depth-5 hoverable">
                            <MDBCardBody>
                                <MDBRow className="text-md-left">
                                    <MDBCol lg="6" md="12" className="mb-5">
                                        <MDBMedia object src={Book1} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid author-img"
                                        tag="img"
                                        alt="Sample avatar" />
                                    </MDBCol>
                                    <MDBCol md="8" lg="6" className="float-right author-content">
                                        <h1 className="font-weight-bold mb-3">The Gospel "Lite": <br/> Four Witnesses - One  </h1>
                                        {/* <h6 className="font-weight-bold white-text mb-3">
                                            Author/Writer
                                        </h6> */}
                                        <p className="white-text">
                                        Taking a unique approach to harmonizing the Biblical accounts, Edwin Alan Salhany expertly weaves the four Gospel stories together into one continuous chronological narrative, removing duplication, and yet preserving all the details and nuances of the different writers.  Using the venerable King James text, this is not a paraphrase, but a re-edit of the very Word of God.  An invaluable resource for Bible students, pastors, and teachers, each period and incident in the Savior’s life is identified and labeled, with full text references, dates, and indexes.  This is not just another Gospel harmony, grouping related texts together. With this unique consolidation of the Good News it is possible to read all four Gospels simultaneously, and easily study the record of Jesus’ life on earth. 
                                        </p>
                                        <section className="fullSection">
                                            <nav className="booklinkBlocks">
                                                <span>Ebooks :</span>
                                                {/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/gp/product/B082VLS2LC?notRedirectToSDP=1&ref_=dbs_mng_calw_0&storeType=ebooks">Amazon</a></li> */}
																								{/*<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/alaskan-wilderness-adventure-book-1/">Stratton Press</a></li>*/}
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/the-gospel-lite-edwin-alan-salhany/1131036818?ean=9781643454375">Barnes & Noble</a></li>
                                            </nav>

                                            <nav className="booklinkBlocks">
                                                <span>Purchase Paperback :</span>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Gospel-Lite-Four-Witnesses-Life/dp/164345188X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1554414877&sr=1-1">Amazon</a></li>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/the-gospel-lite-edwin-alan-salhany/1131036818?ean=9781643451886">Barnes & Noble </a></li>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Gospel-Lite/Edwin-Alan-Salhany/9781643451886?id=8258036461372#">Books A Million</a></li>
                                            </nav>
                                        </section>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                       
							
						<div className="commentSection" >
							<DiscussionEmbed {...disqusConfig} />
						</div>
				</div>	
			</main>

    )
}

export default AboutTheBook;
