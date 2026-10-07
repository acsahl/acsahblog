import { site } from '../site.config.js'

export default function Avatar() {
  const { name, photo } = site.author
  if (photo) return <img className="avatar" src={photo} alt={name} />
  return (
    <div className="avatar" aria-hidden="true">
      {name.charAt(0).toLowerCase()}
    </div>
  )
}
