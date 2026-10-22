import ContactItem from './ContactItem.jsx'
import PhoneIcon from './icons/PhoneIcon.jsx'
import EmailIcon from './icons/EmailIcon.jsx'
import LocationIcon from './icons/LocationIcon.jsx'

export default function ContactDetails() {
  return <div className="w-full"><div className="max-w-md mx-auto lg:mx-0 space-y-6"><ContactItem icon={<PhoneIcon />} label="Phone" value="+123456789" /><ContactItem icon={<EmailIcon />} label="Email" value="info@example.com" /><ContactItem icon={<LocationIcon />} label="Location" value="12 Example Street" /></div></div>
}
