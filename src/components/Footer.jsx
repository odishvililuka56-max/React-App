import FooterColumn from './FooterColumn.jsx'
import FooterBrand from './FooterBrand.jsx'
import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
  return <footer className="bg-gray-50 pt-16 pb-8 text-[14px] font-semibold"><div className="container mx-auto px-4 max-w-[1200px]"><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16 text-center sm:text-left"><FooterColumn title="Services" links={['Web design', 'Development', 'Hosting']} /><FooterColumn title="About" links={['Company', 'Team', 'Legacy']} /><FooterColumn title="Careers" links={['Job openings', 'Employee success', 'Benefits']} /><FooterBrand /></div><div className="border-b border-gray-200 mb-[30px]" /><div className="flex flex-col md:flex-row justify-between items-center gap-4"><p className="text-gray-500">Copyright © 2026 Brand</p><SocialLinks /></div></div></footer>
}
