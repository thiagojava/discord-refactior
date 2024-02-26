import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

interface UserAvatarProps {
    src?: string
    classname?: string
}

const UserAvatar = ({src,classname}: UserAvatarProps) => {
  return (
    <Avatar className={cn("h-7 w-7 md:w-10", classname)}>
        <AvatarImage src={src} />
    </Avatar>
  )
}

export default UserAvatar