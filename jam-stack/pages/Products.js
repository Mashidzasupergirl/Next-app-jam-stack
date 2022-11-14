import { React, useState, useEffect } from 'react'
const contentful = require('contentful')

const client = contentful.createClient({
    space: 'anxbcf8dhuzj',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'jBpJfzM4AjwUYNsRPRfp3p3p9S3jY0opgQRW2kdiAvA'
})

function Products() {

    const [data, setData] = useState([])
    // console.log('Hello, I am here')
    useEffect(() => {
        client.getEntries()
            .then((response) => setData(response.items))
            .catch(console.error)
    }, [])

    return (
        <div>{data.map((product, i) => <p key={i}>{product.title}</p>)}</div>
    )
}

export default Products