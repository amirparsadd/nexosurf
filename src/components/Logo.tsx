function Logo() {
  return (
    <div className="flex gap-3 items-center">
      <img src="/logo.webp" alt="NexoSurf Logo" width={64} className="rounded-md" />
      <h1 className="font-bold text-3xl text-dark dark:text-light">
        NexoSurf
      </h1>
    </div>
  )
}

export default Logo