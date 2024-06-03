const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IUser {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const getData = async (url: string)   => {
    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw  Error('res was not work')
        }
        return res.json()
    } catch (err: any) {
        console.error(err.message)
    }
}

getData(COMMENTS_URL)
.then(data  => {
    data.slice(0,6).map((item: IUser) => {
        console.log({
            ID: item.id,
            Email: item.email
        })
    })
})