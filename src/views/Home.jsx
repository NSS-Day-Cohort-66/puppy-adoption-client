import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const HomeView = () => {
    const [allCenters, setCentersArray] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchAgencies = async () => {
        const { requestFailed, data } = await robustFetch("http://localhost:8000/agencies")
        if (!requestFailed) {
            setCentersArray(data)
        }
        else {
            setError(true)
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchAgencies()
    }, [])

    return (
        <>
            <h2>Buford County Adoption Centers</h2>
            {
                loading
                    ? <div className="p-5 bg-yellow-500 text-black text-lg">Loading data. Please wait...</div>
                    : error
                        ? <div className="p-5 bg-red-700 text-white text-lg">Error loading data. Please try again.</div>
                        : allCenters.map(center => <section className="flex justify-around border border-fuchsia-900 p-8 mt-4 mb-4 bg-yellow-400"
                            key={`center-${center.id}`}>
                            <div className="flex-1">
                                <Link to={`/centers/${center.id}`}
                                    className="text-blue-600 underline hover:text-blue-900"
                                >
                                    {center.name}
                                </Link>
                            </div>
                            <div className="flex-1">
                                {center.address}
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                                {center.number_of_puppies}
                            </div>
                        </section>
                        )

            }
        </>
    )
}