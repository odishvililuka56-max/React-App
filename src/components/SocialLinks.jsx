import facebook from '../../assets/img/icons/fb.svg'
import twitter from '../../assets/img/icons/twitter.svg'
import instagram from '../../assets/img/icons/instagrram.svg'
import SocialLink from './SocialLink.jsx'

export default function SocialLinks() {
  return <div className="flex gap-4"><SocialLink label="Facebook" image={facebook} /><SocialLink label="Twitter" image={twitter} /><SocialLink label="Instagram" image={instagram} /></div>
}
