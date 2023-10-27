import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const HomeView = () => {
    const [allCenters, setCentersArray] = useState([{
        "id": 1,
        "name": "Whatever Center",
        "address": "100 Nowhere Avenue",
        "phone_number": "111-2222",
        "email_address": "me@me.com",
        "number_of_puppies": 4
    }, {
        "id": 2,
        "name": "Forever Center",
        "address": "100 Infinity Way",
        "phone_number": "111-2222",
        "email_address": "me@me.com",
        "number_of_puppies": 4
    }])

    const fetchAgencies = async () => {
        const agencies = await fetch("http://localhost:8000/agencies")
        const data = await agencies.json()
        setCentersArray(data)
    }

    useEffect(() => {
        fetchAgencies()
    }, [])

    return (
        <>
            <h2>Buford County Adoption Centers</h2>
            {
                allCenters.map(center => <section className="flex justify-around border border-fuchsia-900 p-8 mt-4 mb-4 bg-yellow-400"
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