export const apiFetchMemos = () => {
    return fetch('http://localhost:8080/memos')
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
