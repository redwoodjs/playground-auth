import { useEffect, useState } from 'react'

const ProviderImage = ({ slug, name }) => {
  const [image, setImage] = useState()

  useEffect(() => {
    async function getMarkdown() {
      try {
        const file = await import(`../../lib/images/${slug.toLowerCase()}.png`)
        setImage(file.default)
      } catch {
        setImage(null)
      }
    }
    getMarkdown()
  }, [slug])

  return (
    <>
      {image ? (
        <img
          src={image}
          alt={name}
          className="object-scale-down max-w-full max-h-full w-auto h-10 mx-auto"
        />
      ) : (
        <h2>{name}</h2>
      )}
    </>
  )
}

export default ProviderImage
