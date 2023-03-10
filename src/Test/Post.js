import axios from "axios"

import { useState } from "react"



function Post() {
    const [input, setInput] = useState({
        title: '',
        author: '',
        store: '',
        Genre: '',
        Description: '',
        price: ''
    })
    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const baseUrl = 'http://127.0.0.1:8000/api/v1//books'
    const fetchPost = (e) => {
    
        e.preventDefault()
        const data = {
            title: input.title,
            Genre: input.Genre,
            Description: input.Description,
            Price: input.price,
            store: input.store,
            author:input.author
        }
        axios.post(baseUrl, data).then((response) =>{
            if (response.data.status === 200) {
                console.log('data created')
            }
        }).catch((err)=>console.log(err.message))

    }

    return (
        <>

            <form onSubmit={fetchPost}>
                <input type="text" name="title" value={input.title} onChange={handleInput} />
                <input type="text" name="store" value={input.store} onChange={handleInput} />

                <input type="text" name="Description" value={input.Description} onChange={handleInput} />

                <input type="text" name="Genre" value={input.Genre} onChange={handleInput} />
                <input type="text" name="author" value={input.author} onChange={handleInput} />
                <button type="submit">register  book</button>

            </form>

        </>
    )
}

export default Post;