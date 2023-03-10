import axios from "axios";
import { useEffect, useState } from "react";



function ShowInfo() {
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = (e) => {
        axios('http://127.0.0.1:8000/api/v1//books').then((res) => {
            if (res.data.status === 200) {
                console.log(res)
                setData(res.data.data)
            }
            setIsloading(false)
        }).catch((err) => {
            console.log(err.message)
            setError(true)

        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    let content = '';
    if (error) {
        content = <div>
            <h1 style={{ fontSize: '40px', fontWeight: 'bolder', color: 'red' }}>SERVER ERROR...</h1>
        </div>
    } else {
        if (isLoading) {
            content = <div>
                <h1 style={{ fontSize: '40px', fontWeight: 'bolder' }}>LOADING .........</h1>
            </div>
        } else {
            content = <div>
                <table class="table" >
                    <thead>
                        <tr>
                            <th scope="col">author</th>
                            <th scope="col">title</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    {data.map((item) => {
                        return (
                            <tbody key={item._id}>
                                <tr>
                                    <td>{item.author}</td>
                                    <td>{item.title}</td>
                                    <td>{item.Description}</td>
                                </tr>

                            </tbody>

                        )
                    })}
                </table>
            </div>
        }
    }

    return (
        <>
            <div>

                {content}
            </div>


        </>
    )
}

export default ShowInfo;