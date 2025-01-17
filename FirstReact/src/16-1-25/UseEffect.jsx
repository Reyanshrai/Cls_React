import {useEffect, useState} from 'react'

// function ApiCallSimulation(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 id:1,
//                 name:"RKU Students"
//             })
//         },5000)
//     })
// }

// function ApiTesting(){
//     const [id,setId] = useState("Loading...")
//     const [name , setName] = useState("Loading...")

//     useEffect(() =>{
//         ApiCallSimulation().then((user =>{
//             setId(user.id)
//             setName(user.name)
//         }))
//     },[])

//     return(
//         <div>
//             <h1>ID : {id}</h1>
//             <h1>Name : {name}</h1>
//         </div>
//     )
// }



// const [flower , setFlower] = useState([
//     "Rose",
//     "Tulip",
//     "Sunflower",
//     "Daisy",
//     "Lily",
//     "Orchid",
//     "Marigold",
//     "Chrysanthemum",
//     "Jasmine",
//     "Lotus",
//     "Daffodil",
//     "Carnation",
//     "Hibiscus",
//     "Lavender",
//     "Peony",
//     "Magnolia",
//     "Poppy",
//     "Iris",
//     "Geranium",
//     "Begonia"
// ])

function ApiCallFlower(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "Rose",
                "Tulip",
                "Sunflower",
                "Daisy",
                "Lily",
                "Orchid",
                "Marigold",
                "Chrysanthemum",
                "Jasmine",
                "Lotus",
                "Daffodil",
                "Carnation",
                "Hibiscus",
                "Lavender",
                "Peony",
                "Magnolia",
                "Poppy",
                "Iris",
                "Geranium",
                "Begonia"
            ]);
        }, 5000);
    });
}

function ApiTesting(){
    const [flowers, setFlowers] = useState(["Loading..."]);

    useEffect(() =>{
        ApiCallFlower().then((flowerList) =>{
            setFlowers(flowerList);
        });
    }, []);

    return(
        <div>
            <ul>
                {flowers.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ApiTesting;