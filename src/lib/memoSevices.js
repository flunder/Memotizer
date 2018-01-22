const baseUrl = process.env.REACT_APP_BASE_URL;

console.log(baseUrl);

export const apiFetchMemos = (categoryFilter) => {
    const categoryFilterBy = categoryFilter ? `&category=${categoryFilter}` : '';
    return fetch(`${baseUrl}/memos?_sort=id&_order=desc${categoryFilterBy}`)
        .then(res => res.json())
}

export const apiCreateMemo = (memo) => {
    return fetch(`${baseUrl}/memos`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(memo)
    })
        .then(res => res.json())
}

export const apiDeleteMemo = (id) => {
    return fetch(`${baseUrl}/memos/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export const apiFetchCategories = () => {
    return fetch(`${baseUrl}/categories`)
        .then(res => res.json())
}

export const apiUpdateMemo = (id, memo) => {
    return fetch(`${baseUrl}/memos/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(memo)
    })
        .then(res => res.json())
}
