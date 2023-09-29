import { useForm, ValidationError } from '@formspree/react';
import { Input } from '../Input';


export const FormspreeForm = ({formId}) => {
    
        const [state, handleSubmit] = useForm(formId);
        if (state.succeeded) {
            return <p className="max-w-5xl mx-auto my-5 text-center">We'll get in touch!<br/> Thank you!</p>
        }


    return (
            <form onSubmit={handleSubmit} className="max-w-5xl mx-auto my-5 flex flex-col w-96 justify-center align-middle">
                <label htmlFor="name" className='flex justify-center'>
                    Name
                </label>
                <Input
                    id="name"
                    type="name" 
                    name="name"
                />
                <label htmlFor="email" className='flex justify-center'>
                    Email Address
                </label>
                <Input
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="subject" className='flex justify-center'>
                Subject
                </label>
                <Input
                    id="subject"
                    type="subject" 
                    name="subject"
                />
                <label htmlFor="body" className='flex justify-center'>
                    Body
                </label>
                <textarea
                    className='border-2 border-slate-400 p-1 hover:border-slate-500'
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <div className='flex justify-center'>
                    <button className='btn' type="submit" disabled={state.submitting} >
                        Submit
                    </button>
                </div>

            </form>
    )
}