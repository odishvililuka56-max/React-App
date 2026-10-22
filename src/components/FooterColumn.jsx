import FooterLink from './FooterLink.jsx'

export default function FooterColumn({ title, links }) {
  return <div><h4 className="font-bold mb-4">{title}</h4><nav className="flex flex-col text-gray-500 space-y-2">{links.map((link) => <FooterLink key={link} label={link} />)}</nav></div>
}
