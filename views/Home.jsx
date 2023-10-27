import { useState } from "react"

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

    return (
        <>
            <h2>Buford County Adoption Centers</h2>
            {
                allCenters.map(center => <section className="border border-fuchsia-900 p-8 mt-4 mb-4 bg-yellow-400"
                                            key={`center-${center.id}`}>
                    {center.name}
                </section>)
            }
        </>
    )
}