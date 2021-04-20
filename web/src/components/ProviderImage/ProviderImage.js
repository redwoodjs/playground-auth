import { useEffect, useState } from 'react'

const ProviderImage = ({ provider }) => {
  const [image, setImage] = useState()

  useEffect(() => {
    async function getMarkdown() {
      try {
        const file = await import(`../../lib/images/${provider.slug}.png`)
        setImage(file.default)
      } catch {
        setImage(null)
      }
    }
    getMarkdown()
  }, [provider.slug])

  return (
    <>
      {image ? (
        <img
          src={image}
          alt={provider.name}
          className="object-contain max-w-full max-h-full w-auto h-auto mx-auto"
        />
      ) : (
        <h2>{provider.name}</h2>
      )}
    </>
  )
}

export default ProviderImage
