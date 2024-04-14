// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xgegpqqq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='border rounded-xl text-slate-700 font-extrabold flex flex-col p-10 w-full'>
      <label htmlFor="email" className=''>
        Email Address : 
      </label>
      <input className='mt-3 rounded-xl px-3 text-black w-1/2'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label className='mt-5'>
        Your message : 
      </label>
      <textarea className='mt-3 rounded-xl px-3 text-black h-full'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='mt-5 text-xl text-slate-700 bg-white rounded-2xl w-1/6 m-auto'>
        Submit
      </button>
    </form>
  );
}
export default ContactForm;