import ProfileImage from '../ui/ProfileImage'
import { photos } from '../../config/photos'

export default function AuthorBlock() {
  return (
    <div className="flex items-center gap-4 py-6 border-t border-light-grey">
      <ProfileImage
        src={photos.blog_author}
        alt="Victor C. Odii"
        width={56}
        height={56}
        shape="circle"
        className="flex-shrink-0"
      />
      <div>
        <p className="font-semibold text-navy text-sm">Victor C. Odii</p>
        <p className="text-mid-grey text-xs leading-relaxed">
          Programme management professional · MA EU Studies, FH Burgenland · Austria
        </p>
      </div>
    </div>
  )
}
