import ContactForm from './ContactForm.jsx'
import ContactDetails from './ContactDetails.jsx'

export default function ContactContent() {
  return <main className="w-full py-12"><section className="max-w-6xl mx-auto px-4"><div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"><ContactForm /><ContactDetails /></div></section></main>
}
