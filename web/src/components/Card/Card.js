const Card = ({ children }) => {
  return (
    <li className="bg-white shadow-lg overflow-hidden rounded-md px-6 py-4">
      {children}
    </li>
  )
}

export default Card
