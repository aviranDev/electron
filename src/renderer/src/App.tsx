import { useEffect, useState } from 'react'
import { api, Collection } from './services/http'

function App(): JSX.Element {
  const [message, setMessage] = useState<Collection | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchMessage = async (): Promise<void> => {
    setLoading(true)
    setError(null)
    try {
      const response = await api() // Adjust endpoint as necessary.
      setMessage(response.data) // Assuming the API returns { message: "..." }
    } catch (err: unknown) {
      setError('Failed to fetch message from API')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMessage()
  }, [])
  console.log(message)

  return (
    <div>
      <h2>REST API Response:</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && message.testName ? (
        <div>
          <p>Name: {message.testName}</p>
          <p>Name: {message.testName2}</p>
          {/* <p>description: {message.description}</p> */}
        </div>
      ) : (
        !loading && <p>No data available</p>
      )}
    </div>
  )
}

export default App
