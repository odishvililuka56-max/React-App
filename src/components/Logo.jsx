import logo from '../../assets/img/icons/logo.svg'

export default function Logo({ footer = false }) {
  return <a className={footer ? 'flex items-center gap-2 mb-4' : 'brand flex gap-[20px] shrink-0'} href="#top" aria-label="Brand home"><span className={footer ? 'bg-blue-500 p-1.5 rounded-md' : 'text-white w-[40px] bg-blue-500 p-1.5 rounded-md'}><img src={logo} alt="Brand logo" className={footer ? 'w-5 h-5' : 'w-[40px] h-[40px]'} /></span><span className={footer ? 'font-bold text-base text-gray-800' : 'text-3xl font-bold text-gray-800'}>Brand</span></a>
}
