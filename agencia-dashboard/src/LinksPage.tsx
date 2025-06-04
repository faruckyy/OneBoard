import { useEffect, useState } from 'react'

interface LinkItem {
  label: string
  url: string
  category: string
}

export default function LinksPage() {
  const [links, setLinks] = useState<LinkItem[]>(() => {
    const stored = localStorage.getItem('links')
    return stored ? JSON.parse(stored) : []
  })
  const [label, setLabel] = useState('')
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('Geral')

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links))
  }, [links])

  const add = () => {
    setLinks([...links, { label, url, category }])
    setLabel(''); setUrl('')
  }

  const grouped = links.reduce<Record<string, LinkItem[]>>((acc, link) => {
    acc[link.category] = acc[link.category] || []
    acc[link.category].push(link)
    return acc
  }, {})

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input value={label} onChange={e=>setLabel(e.target.value)} placeholder="Label" className="border px-2" />
        <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="URL" className="border px-2" />
        <input value={category} onChange={e=>setCategory(e.target.value)} placeholder="Categoria" className="border px-2" />
        <button onClick={add} className="border px-3">Salvar</button>
      </div>
      {Object.entries(grouped).map(([cat, items]) => (
        <details key={cat} open className="border p-2">
          <summary className="font-semibold">{cat}</summary>
          <ul className="pl-4 list-disc">
            {items.map((l, i) => (
              <li key={i} className="flex items-center gap-2">
                <span>{l.label}</span>
                <button onClick={() => navigator.clipboard.writeText(l.url)} className="text-xs underline">copiar</button>
                <a href={l.url} target="_blank" className="text-xs underline">abrir</a>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  )
}
