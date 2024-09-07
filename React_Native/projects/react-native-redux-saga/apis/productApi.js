export async function fetchProductAPI(page = 1, limit = 10) {

    const response = await fetch(`https://fake-api1.vercel.app/api/products?page=${page}&limit=${limit}`);
    const data = await response.json()
    return data;
}