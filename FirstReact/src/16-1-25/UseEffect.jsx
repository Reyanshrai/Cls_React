import {useEffect, useState} from 'react'

function ApiCallSimulation(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id:1,
                name:"RKU Students"
            })
        },5000)
    })
}

function ApiTesting(){
    const [id,setId] = useState("Loading...")
    const [name , setName] = useState("Loading...")

    useEffect(() =>{
        ApiCallSimulation().then((user =>{
            setId(user.id)
            setName(user.name)
        }))
    },[])

    return(
        <div>
            <h1>ID : {id}</h1>
            <h1>Name : {name}</h1>
        </div>
    )
}

export default ApiTesting