import { useEffect, useState } from 'react'

interface Props {
  name: string
}

const ProviderImage: React.VFC<Props> = ({ name }) => {
  const [image, setImage] = useState()
  const slug = name.toLowerCase()

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
