function BaseHeader({ title }: { title: string }): JSX.Element {
  return (
    <div className="py-6">
      <h1 className="text-2xl tracking-widest uppercase flex flex-col font-medium">
        <span className="pb-2">{title.slice(0, 4)}</span>
        <span>{title.slice(4, 8)}</span>
      </h1>
    </div>
  )
}

export default BaseHeader

