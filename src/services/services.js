export const robustFetch = async (url) => {
    let requestFailed = false
    let data = null

    try {
        const response = await fetch(url)
        if (!response.ok) {
            requestFailed = true
        }
        data = await response.json()

    } catch (error) {
        requestFailed = true
    }

    return { requestFailed, data }
}

