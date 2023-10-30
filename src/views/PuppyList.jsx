import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const PuppyList = () => {
    const [agency, setAgency] = useState({ puppies:[] })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const { centerId } = useParams()

    const fetchAgency = async () => {
        try {
            const agency = await fetch(`http://localhost:8000/agencies/${centerId}`)
            if (!agency.ok) {
                setLoading(false)
                return setError(true)
            }
            const data = await agency.json()
            setAgency(data)

        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchAgency()
    }, [])

    return (
        <>
            <h1 className="text-xl mb-10">This is a list of puppies for {agency.name}</h1>

            {
                agency.puppies.map(puppy => <div key={`puppy-${puppy.id}`}>
                    {puppy.name} age {puppy.age} months
                    <button className="button rounded bg-blue-300 hover:bg-blue-700 p-2 border border-blue-950">Adopt</button>
                </div>)
            }
        </>
    )
}