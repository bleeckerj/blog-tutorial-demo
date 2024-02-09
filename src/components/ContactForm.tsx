import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import axios from 'axios';
import type { APIRoute } from "astro";
import FormConfirmationModal  from '../components/FormConfirmationModal';



// export const POST: APIRoute = async ({ request }) => {
//   const data = await request.formData();
//   console.log('Hello APIRoute')
//   console.log(data);
//   console.log(JSON.stringify(data));
//   var object = {};
//   data.forEach((value, key) => object[key] = value);
//   var json = {"content": JSON.stringify(object)}; //JSON.stringify(object);
//   console.log(json);
//   const webhookURL = "https://discord.com/api/webhooks/967241010449088592/kOtdCCfpWtpkDBHwnQUzzDa6vJOhLePyDHifQzEUDSnDSgj78WmqERisGJ4Ygd16XGMp"
//   //const webhookURL = "https://webhook.site/168b0c8a-2a74-40bd-9129-3b42c868c4a4"
//   const options = {
//     method: 'post',
//     baseURL: webhookURL,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: json
//   };
//   //let response = await axios.request(options);
//   axios.request(options)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   return new Response( 
//     "{'hey' : 'there'}"
//   );
// };

/* My Generic Contact Form Component  */
/* Pings me in Discord in #notes-to-self when someone fills this in */
/* Add an email ping too at some point, eh? */
export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isErrorOpen, setErrorOpen] = useState(false);

  const onSubmit = data => {
    // console.log('Hello App()');
    // console.log(data);
    
//    console.log(JSON.stringify(data));
    var object = {};
    //data.forEach((value, key) => object[key] = value);
    var json = {"content": JSON.stringify(data)}; //JSON.stringify(object);
//    console.log(json);
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
      // console.log(response);
      // console.log('Good Message!')
    })
    .catch(function (error) {
      setErrorOpen(true);
      setModalOpen(false);
      // console.log(error);
      // console.log('Error!')
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
  
    <div className="flex flex-col items-center justify-center my-20 max-w-2xl">
    <form  action="/" method="POST" style={{fontSize : '1rem', fontFamily: 'FormaDJRDeck'}} 
    className="space-y-3 md:space-y-4 max-w-5/6 min-w-[340px]" onSubmit={handleSubmit(onSubmit)}>
    
    <div className="grid grid-cols-2 gap-2 mb-[-1rem]">
  <div>

    <label htmlFor="firstName" className="block mb-1 text-lg font-medium">
      First Name
    </label>
    <input id="firstName" 
    className="mb-3 bg-gray-50 focus:outline-stone-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
    style={{fontSize : '1rem'}} 
    type="text" 
    placeholder="Chester" 
    {...register("First name", {required: true, maxLength: 40})} 
    />
  </div>

  <div>
    <label htmlFor="lastName" className="block mb-1 text-lg font-medium">
      Last Name
    </label>
    <input id="lastName" 
    className="mb-3 bg-gray-50 focus:outline-stone-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
    style={{fontSize : '1rem'}} 
    type="text" placeholder="Fields" 
    {...register("Last name", {required: true, maxLength: 40})}
    />
  </div>
</div>


      <div>
      <label htmlFor="email" className="block mb-1 text-lg font-medium">Email Address</label>
      
      <input id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" style={{fontSize : '1rem'}} 
      type="text"
      placeholder="chester@nearfuturelaboratory.com"
      {...register('email', {
        required: true,
        pattern:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      })}
      />
      </div>
      
      <div>
      <label htmlFor="tty" className="block mb-1 text-lg font-medium">
      Subject
      </label>
      <input id="tty" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" style={{fontSize : '1rem'}} type="text" placeholder="I'd like to talk about..." {...register} />
      </div>
      
      <div>
      <label htmlFor="message" className="block mb-1 text-lg font-medium">
      Message
      </label>
      <textarea id="message" className=" rounded-lg block w-full p-2.5" 
      style={{fontSize : '1rem'}} 
      placeholder="This is what I'm thinking about..." 
      {...register("Message", {})} />
      </div>  
      
      <div>
      <div className="block mb-1 text-lg font-medium">I'm interested in..</div>
      </div>
      
      <div className="flex flex-center items-center mb-4">
      <input id="cbWorkshop" className="w-4 h-4 rounded accent-stone-500" type="checkbox" placeholder="workshop" {...register("workshop", {})} />
      <label htmlFor="cbWorkshop" className="ms-2 font-medium text-gray-900" >Having you facilitate a team workshop</label>
      </div>
      
      <div className="flex items-center mb-4">
      <input id="cbConsult" className="w-4 h-4 rounded accent-stone-500" type="checkbox" placeholder="consultation-call" {...register("consultation-call", {})} />
      <label htmlFor="cbConsult" className="ms-2 font-medium text-gray-900">Having a 20 minute consultation chat</label>
      </div>
      
      <div className="flex items-center mb-4">
      <input id="cbKeynote" className="w-4 h-4 rounded accent-stone-500" type="checkbox" placeholder="keynote" {...register("mentoring", {})} />
      <label htmlFor="cbKeynote" className="ms-2 font-medium text-gray-900">Arranging a presentation or keynote for my organization</label>
      </div>
      
      <div className="flex items-center mb-4">
      <input id="cbLearn" className="w-4 h-4 ring-stone-500 accent-stone-500 bg-gray-100 border-gray-300 rounded" type="checkbox" placeholder="capabilities" {...register("capabilities", {})} />
      <label htmlFor="cbLearn" className="ms-2 font-medium text-gray-900">Learning more about how to engage or commission you for my organization</label>
      </div>
      
      {/* <div className="flex items-center mb-4">
      <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
      <label className="ms-2 text-sm font-medium text-gray-900">Default checkbox</label>
      </div> */}

      <div className="flex items-center mb-4">
      <input id="cbPodcast" type="checkbox" className="w-4 h-4 accent-stone-500 bg-gray-100 border-gray-300 rounded" placeholder="podcast-request" {...register("podcast-request", {})} />
      <label htmlFor="cbPodcast" className="ms-2 font-medium text-gray-900" style={{fontSize : '1rem', fontFamily: 'FormaDJRDeck'}}>Having you as a guest on my podcast</label>
      </div>
      

      <div className="flex justify-center">
      <button 
      className="text-white bg-stone-500 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm w-1/4 sm:w-1/4 px-5 py-2.5 text-center" type="submit">
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


      </div>
      );
    }