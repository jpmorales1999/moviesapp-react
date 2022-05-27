import { useState, useEffect } from 'react'

export default function useFetch(url, options) {
    const [ loading, setLoading ] = useState(true)
    const [ result, setResult ] = useState(null)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url, options)
                const json = await res.json()
                setResult(json)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        })()
    }, [url, options]) // Variables que al modificarse ejecutaran el useEffect

    return { loading, result, error }
}