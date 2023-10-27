export const fetchIt = async (url, method="GET", body=null) => {
    let options = {
        method
    }

    switch (method) {
        case "PUT":
        case "POST":
            options.headers = {
                "Content-Type": "application/json"
            }
            options.body = JSON.stringify(body)
            break;

        default:
            break;
    }

    let data = null
    let success = true

    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            success = false
        }

        data = await response.json()

    } catch (error) {
        success = false
    }

    return { data, success }
}