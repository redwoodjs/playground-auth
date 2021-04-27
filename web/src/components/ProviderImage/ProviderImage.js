import { useEffect, useState } from 'react'

const ProviderImage = ({ provider }) => {
  const [image, setImage] = useState()

  useEffect(() => {
    async function getMarkdown() {
      try {
        const file = await import(
          `../../lib/images/${provider.slug.toLowerCase()}.png`
        )
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
          className="object-scale-down max-w-full max-h-full w-auto h-10 mx-auto"
        />
      ) : (
        <h2>{provider.name}</h2>
      )}
    </>
  )
}

export default ProviderImage
