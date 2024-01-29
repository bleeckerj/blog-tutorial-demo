import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    alert(JSON.stringify(data));
  }
  console.log(errors);
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  };
  return (
    <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
     <label>
        First Name
      <input defaultValue={initialValues.firstName} 
            type="text" 
            placeholder="Ari" 
            {...register("First name", {required: true, maxLength: 80})} />
            {errors.firstName && <p>Please enter your first name</p>}
     </label>
     <label>Last Name
      <input type="text" placeholder="Birnbaum" {...register("Last name", 
      {required: true, 
      validate: (value) => value !== '',
      maxLength: 100})} />
     </label>
     <label>Email Address
     <input
          id="email"
          type="text"
          placeholder="ari@nearfuturelaboratory.com"
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
     </label>
     <label>Subject
      <input type="text" placeholder="I'd like to talk about..." {...register} />
     </label>
     <label>Message

      <textarea placeholder="This is what I'm thinking about..." {...register("Message", {})} />
      </label>
      <div className="text-xl mb-5">I'm interested in learning more about...</div>

      <div className="checkbox-group">
      <div className="checkbox-row">
      <input type="checkbox" placeholder="workshop" {...register("workshop", {})} />
      <label>Having you facilitate a team workshop</label>
      </div>
      <div className="checkbox-row">
      <input type="checkbox" placeholder="consultation-call" {...register("consultation-call", {})} />
      <label>Consultation Call</label>
      </div>
      <div className="checkbox-row">
      <input type="checkbox" placeholder="keynote" {...register("mentoring", {})} />
      <label>Present a keynote to our organization</label>
      </div>
      <div className="checkbox-row">
      <input type="checkbox" placeholder="capabilities" {...register("capabilities", {})} />
      <label>Learning more about what you do</label>
      </div>
      <div className="checkbox-row">
      <input type="checkbox" placeholder="podcast-request" {...register("podcast-request", {})} />
      <label>Having you on my podcast</label>
      </div>
      </div>
      <button  type="submit">Submit</button>
    </form>
  );
}