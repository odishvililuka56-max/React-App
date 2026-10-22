import Logo from './Logo.jsx'
import NavigationLinks from './NavigationLinks.jsx'
import AuthButton from './AuthButton.jsx'

export default function HeaderNavigation() {
  return <nav className="flex flex-wrap flex-col md:flex-row items-center justify-between gap-6" aria-label="Main navigation"><Logo /><NavigationLinks /><AuthButton /></nav>
}
