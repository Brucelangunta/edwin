import React from 'react'
import Inputs from "./Inputs/input"
import '../../assets/scss/contact.scss'

const Contact = (props)=>{


	function OnSubmitForm (e) {

	    e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
				alert('Succesfully sent!')
                form.reset();
            } else {
            	console.log('something went wrong')
            }
        };

        xhr.send(data);
       
	}


    return(
			<main className="flexMainContainer">
                <div class="container">
				<div className="flex-container-fx">

						<p className="contactMessage text-justify">
							Hello! Are you having a good day? Anyway, if you have any concerns or you just want to 
							share something, please feel free to drop me a line. I would love to hear anything from you.
						</p>

						<form 
							onSubmit={OnSubmitForm}
							action="https://formspree.io/mbjqoneo"
							method="POST">

						<div className="columns" id="form-wrapper">
							<div className="column is-half">
						
								<Inputs 
									name="fullname" 
									type="text" />

								<Inputs
									name="phone" 
									type="text" />
									   <input
                                        name="author"
                                        type="hidden"  value = 'Edwin Alan Salhany'/>


							</div>

							<div className="column is-half">

								<Inputs 
									name="email"
									type="email" />

								<Inputs 
									name="address" 
									type="text" />

							</div>
						</div>

						<div className="columns">
							<div className="column is-full" id="textAreaContainer">
								<label> Message	</label>
						          <textarea type="text" name='message' 
							           className="textArea"
							           placeholder='Message'
							           required />
		

						        <div className="buttonContainer text-center">
									<input 
										className="abtiaryButton" 
										value="Submit"
										type="submit" />
								</div>
							</div>
						</div>

					</form>


					<div className="info-section-address text-center">
						<span>
						  	<h5>Address</h5>
							831 N Tatnall Street, Suite M #188 Wilmington,
							DE 19801
						</span> <br/><br/><br/>

						<span>
							<h5>Phone</h5>
							<a href="tel:8883237009"> 888-323-7009 </a>
						</span> <br/><br/><br/>

						<span>
							<h5>Email</h5>
						 <a href="mailto:publish@stratton-press.com"> publish@stratton-press.com </a>
						</span>
					</div>
				</div>
                </div>
			</main>
    )
}

export default Contact;