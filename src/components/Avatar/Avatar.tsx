import { AvatarProps } from './AvatarTypes'

export const Avatar = ({ uri }: AvatarProps) => {
  return (
    <img
      src={uri}
      style={{
        height: '68px',
        width: '68px',
        borderRadius: '35px',
        marginRight: '10px',
      }}
    />
  )
}

export default Avatar
