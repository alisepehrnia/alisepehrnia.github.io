// Tiny inline markup so JSON text can contain emphasis:
//   **bold text**       -> <strong>
//   ==highlighted text==  -> <span class="text-special">
export default function RichText({ text = '' }) {
  const parts = text.split(/(\*\*.+?\*\*|==.+?==)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4)
      return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('==') && part.endsWith('==') && part.length > 4)
      return (
        <span key={i} className="text-special">
          {part.slice(2, -2)}
        </span>
      )
    return part
  })
}
