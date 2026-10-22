import NavigationLink from './NavigationLink.jsx'

export default function NavigationLinks() {
  return <div className="nav-links"><div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-black font-bold"><NavigationLink href="#top" label="Home" /><NavigationLink href="#services" label="Services" /><NavigationLink href="#projects" label="Projects" /><NavigationLink href="#pricing" label="Pricing" /><NavigationLink href="#products" label="Products" /><NavigationLink href="#contact" label="Contacts" /></div></div>
}
