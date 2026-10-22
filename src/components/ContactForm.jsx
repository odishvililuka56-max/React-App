import ContactInput from './ContactInput.jsx'
import ContactMessage from './ContactMessage.jsx'
import SubmitButton from './SubmitButton.jsx'

export default function ContactForm() {
  return <div className="w-full"><form className="max-w-md mx-auto"><div className="space-y-5"><ContactInput type="text" placeholder="Name" /><ContactInput type="email" placeholder="Email" /><ContactMessage /><SubmitButton /></div></form></div>
}
