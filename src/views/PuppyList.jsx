import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { robustFetch } from "../services/services.js"

export const PuppyList = () => {
    const [agency, setAgency] = useState({ puppies:[] })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const { centerId } = useParams()

    const fetchAgency = async () => {
        const { requestFailed, data } = await robustFetch(`http://localhost:8000/agencies/${centerId}`)
        if (!requestFailed) {
            setAgency(data)
        }
        else {
            setError(true)
        }
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