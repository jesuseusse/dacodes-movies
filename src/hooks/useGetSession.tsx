import { useState } from 'react'
import { getGuestSession } from '../api/api'

export const useGetSession = () => {
  const [loading, setLoading] = useState(false)
  const [sessionId, setSessionId] = useState('')
  const [error, setError] = useState<string | undefined>()

  const getSession = async () => {
    setLoading(true)
    const res = await getGuestSession()
    setLoading(false)
    if (res?.data?.success) {
      setSessionId(res?.data.guest_session_id)
      localStorage.setItem('guest_session_id', res?.data.guest_session_id)
    } else {
      setError('No se pudo crear session')
    }
  }

  return { loading, getSession, sessionId, error }
}
