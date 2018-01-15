export const apiFetchMemos = () => {
    return fetch('http://localhost:8080/memos')
        .then(res => res.json())
}
