import { Link } from "react-router-dom"

export const Agency = ({ center }) => {
    return (
        <section className="flex justify-around border border-fuchsia-900 p-8 mt-4 mb-4 bg-yellow-400"
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