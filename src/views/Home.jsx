import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Agency } from "../components/Agency.jsx"
import { fetchIt } from "../utils/fetchIt.js"

export const HomeView = () => {
    const [allCenters, setCentersArray] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchAgencies = async () => {
        const fetchInfo = await fetchIt("http://localhost:8000/agencies")

        if (fetchInfo.success) {
            setCentersArray(fetchInfo.data)
        }

        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        fetchAgencies()
    }, [])

    const displayAgenciesOrError = () => {
        if (error) {
            return <div className="p-5 bg-red-700 text-white text-lg">Error loading data. Please try again.</div>
        }

        return allCenters.map(center => <Agency center={center} /> )
    }

    const showLoadingOrData = () => {
        if (loading) {
            return <div className="p-5 bg-yellow-500 text-black text-lg">Loading data. Please wait...</div>
        }

        return displayAgenciesOrError()
    }

    return (
        <>
            <h2>Buford County Adoption Centers</h2>
            { showLoadingOrData() }
        </>
    )
}
