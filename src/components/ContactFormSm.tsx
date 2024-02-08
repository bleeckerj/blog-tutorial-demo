import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import axios from 'axios';
import type { APIRoute } from "astro";
import FormConfirmationModal  from '../components/FormConfirmationModal';

/* My Generic Contact Form Component  */
/* Pings me in Discord in #notes-to-self when someone fills this in */
/* Add an email ping too at some point, eh? */
export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isErrorOpen, setErrorOpen] = useState(false);

  const onSubmit = data => {
    var object = {};
    var json = {"content": JSON.stringify(data)}; //JSON.stringify(object);
    const webhookURL = "https://discord.com/api/webhooks/967241010449088592/kOtdCCfpWtpkDBHwnQUzzDa6vJOhLePyDHifQzEUDSnDSgj78WmqERisGJ4Ygd16XGMp"
    const options = {
      method: 'post',
      baseURL: webhookURL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: json
    };
    axios.request(options)
    .then(function (response) {
      setModalOpen(true); // Open modal on success
      setErrorOpen(false);

    })
    .catch(function (error) {
      setErrorOpen(true);
      setModalOpen(false);

    });

    return new Response( 
      "{'hey' : 'there'}"
    );


    }
  
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeErrorModal = () => {
    setErrorOpen(false);
    console.log('Eh?');
  };

  return (
  <section className="flex flex-col items-center justify-center my-20 max-w-2xl">
  <form  action="/" method="POST" style={{fontSize : '1rem', fontFamily: 'FormaDJRDeck'}} 
  className="space-y-3 md:space-y-4 max-w-5/6 min-w-[340px]" onSubmit={handleSubmit(onSubmit)}>

	{/* <form className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900"> */}
		<h2 className="w-full text-3xl font-bold">Contact us</h2>
    <div className="grid grid-cols-2 gap-2 mb-[-1rem]">
		<div>
    	<label htmlFor="firstName" className="block mb-1 ml-1">First Name</label>
			<input id="firstName" 
      type="text" placeholder="Charlie" 
      className="placeholder-gray-200 block w-full p-2 rounded focus:outline-none focus:ring" 
      {...register("First name", {required: true, maxLength: 100})} 
      />
		</div>

    <div>
			<label htmlFor="lastName" className="block mb-1 ml-1">Last Name</label>
			<input id="lastName" 
      type="text" placeholder="Parker" 
      className="placeholder-gray-200 block w-full p-2 rounded focus:outline-none focus:ring" 
      {...register("Last name", {required: true, maxLength: 100})} 
      />
		</div>
    </div>
    
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="charlie@birdland.com" 
      className="placeholder-gray-200 block w-full p-2 rounded focus:outline-none focus:ring" 
      {...register('email', {
        required: true,
        pattern:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      })}
      />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" placeholder="Message..." 
      className="placeholder-gray-200 block w-full p-2 rounded autoexpand focus:outline-none focus:ring">
      </textarea>
		</div>
		<div className="flex justify-center">
			<button type="submit" 
      className="justify-center w-1/3 mx-auto px-4 py-2 font-bold rounded shadow text-white bg-stone-500 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 ">
        Submit
        </button>
		</div>
	</form>

  <FormConfirmationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        message="Thank you for making contact."
        message_2 = "I'll be in touch soon."
      />

      <FormConfirmationModal 
        isOpen={isErrorOpen} 
        onClose={closeErrorModal} 
        message="Dang. Error."
        message_2 = "Please contact me directly: julian@nearfuturelaboratory.com"
      />



</section>

      );
    }