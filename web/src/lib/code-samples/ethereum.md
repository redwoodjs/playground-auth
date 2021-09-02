```js
import { useAuth } from '@redwoodjs/auth'

const Ethereum = () => {
  const { logIn, logOut, isAuthenticated } = useAuth()

  const onLogin = async (walletType) => {
    try {
      await logIn(walletType)
      navigate(redirectTo || routes.home())
    } catch (e) {
      console.log(e)
    }
  }

  const Button = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
    >
      {children}
    </button>
  )

  return (
    <>
      {isAuthenticated ? (
        <Button onClick={logOut}>Log Out</Button>
      ) : (
        <>
          <Button onClick={() => onLogin()}>
            Log In with Ethereum Browser
          </Button>
          <Button onClick={() => onLogin('walletConnect')}>
            Log In with Wallet Connect
          </Button>
        </>
      )}
    </>
  )
}

export default Ethereum
```
