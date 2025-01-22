import {useState,useEffect} from 'react'
import Promise from 'bluebirds';
Promise.config({cancellation: true});

function FetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id:1,
                name:"RKU Students"
            })
        },5000)
    })
}

function CancelRequest(){
    const [user,setUser] = useState("Loading...")
    const [id,setId] = useState("Loading...")

    useEffect(()=>{
        const promise = FetchUser().then((var1) =>{
            setUser(var1.name)
            setId(var1.id)
        })
        return () => promise.cancel()
    })

    return (
        <div>
            <h1>ID : {id}</h1>
            <h1>Name : {user}</h1>
        </div>
    )
}

export default CancelRequest