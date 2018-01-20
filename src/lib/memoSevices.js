export const apiFetchMemos = (categoryFilter) => {
    const categoryFilterBy = categoryFilter ? `&category=${categoryFilter}` : '';
    return fetch(`http://localhost:8080/memos?_sort=id&_order=desc${categoryFilterBy}`)
        .then(res => res.json())
}

export const apiCreateMemo = (memo) => {
    return fetch('http://localhost:8080/memos', {
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
    return fetch(`http://localhost:8080/memos/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export const apiFetchCategories = () => {
    return fetch('http://localhost:8080/categories')
        .then(res => res.json())
}
