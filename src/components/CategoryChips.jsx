import { categories } from '../posts.js'

// The row of filter buttons. `active` is a category name, or 'All'.
export default function CategoryChips({ active, onChange }) {
  return (
    <div className="chips" role="group" aria-label="Filter posts by category">
      {['All', ...categories].map((name) => (
        <button
          key={name}
          type="button"
          className="chip"
          aria-pressed={active === name}
          onClick={() => onChange(name)}
        >
          {name}
        </button>
      ))}
    </div>
  )
}
