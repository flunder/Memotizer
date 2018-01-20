export const apiFetchMemos = () => {
    return fetch('http://localhost:8080/memos?_sort=id&_order=desc')
        .then(res => res.json())
}

export const apiCreateMemo = (memo) => {
    return fetch('http://localhost:8080/memos', {
        method: "POST",
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
