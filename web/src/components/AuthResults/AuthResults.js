import { useAuth } from '@redwoodjs/auth'
import { useEffect, useState } from 'react'

// https://codemirror.net/doc/manual.html
import 'codemirror/theme/duotone-light.css';
import { Codemirror } from 'react-codemirror-ts';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/lib/codemirror.css';
import './codemirror.css';



export default () => {
  const { type, userMetadata, currentUser, isAuthenticated } = useAuth()
  const typeOk = type && type === currentUser?.type
  const emailOk = /^\w+@\w+.*\.\w\w+$/.test(userMetadata?.email)
  const tokenOk = currentUser?.token && currentUser?.token !== 'null'

  const [lastUpdate, setLastUpdate] = useState('lastUpdate')

  useEffect(() => {
    setLastUpdate(new Date().toLocaleTimeString())
  }, [currentUser, userMetadata, isAuthenticated])

  const authData = (userMetadata, currentUser) => {
    const metadata = 'userMetadata: ' + JSON.stringify(userMetadata, null, 2) + '\n'
    const user = 'currentUser: ' + JSON.stringify(currentUser, null, 2)
    return metadata + user
  }

  return (
    <div className="w-full text-sm">
      <p className="mt-2 text-sm text-gray-600 max-w"> Last update {lastUpdate}</p>
      <Codemirror
        value={authData(userMetadata, currentUser)}
        options={{
          theme: 'duotone-light',
          mode: 'javascript',
          lineNumbers: true,
          lineWrapping: true,
          matchBrackets: true,
        }}
      />
      {isAuthenticated ? (
        <>
          <h3 className="mt-2 text-sm text-gray-600 max-w">Basic sanity checks</h3>
          <ul>
            <li style={{ color: typeOk ? 'green' : 'red' }}>Correct type</li>
            <li style={{ color: emailOk ? 'green' : 'red' }}>Valid email</li>
            <li style={{ color: tokenOk ? 'green' : 'red' }}>Token !== null</li>
          </ul>
        </>
      ) : null}
    </div>
  )
}
