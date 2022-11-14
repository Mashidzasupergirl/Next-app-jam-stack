import React, { useState } from 'react'
const contentful = require('contentful')

const client = contentful.createClient({
    space: 'anxbcf8dhuzj',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'jBpJfzM4AjwUYNsRPRfp3p3p9S3jY0opgQRW2kdiAvA'
})

function products() {
    // const [data, setData] = useState([])
    console.log('Hello, I am here')
    client.getEntries()
        .then((response) => console.log(response.items))
        .catch(console.error)
        
    return (
        <div>products</div>
    )
}

export default products