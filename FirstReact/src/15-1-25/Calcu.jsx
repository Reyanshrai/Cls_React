import { useState } from "react"

const Calcu = () => {
  const [firstNum, setFirstNum] = useState("")
  const [secondNum, setSecondNum] = useState("")
  const [email, setEmail] = useState("")
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleFirstNum = (e) => {
    setFirstNum(e.target.value)
  }

  const handleSecondNum = (e) => {
    setSecondNum(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)

    if(emailPattern.test(email)) {
      console.log("Valid Email")
    } else {
      console.log("Invalid Email")
    }
  }

  const showText = () => {
    const text = document.querySelector('.showTxt')
    text.style.display = 'block'
  }

  const hideText = () => {
    const text = document.querySelector('.showTxt')
    text.style.display = 'none'
  }


  const num1 = Number(firstNum) || 0
  const num2 = Number(secondNum) || 0
    
  return (
    <>
      <h1 className="text-2xl text-center font-bold">Simple Calculation</h1> 
      <div className="">
        <input 
          className="m-1" 
          type="number" 
          placeholder='Enter First Number' 
          value={firstNum} 
          onChange={handleFirstNum}
        />
        <input 
          className="m-1" 
          type="number" 
          placeholder='Enter Second Number' 
          value={secondNum} 
          onChange={handleSecondNum}
        />
      </div>

      <div>
        <p>Addition: {num1 + num2}</p>
        <p>Subtraction: {num1 - num2}</p>
        <p>Multiplication: {num1 * num2}</p>
        <p>Division: {num2 !== 0 ? num1 / num2 : "Cannot divide by zero"}</p>
      </div>


      <div className=" bg-red-700">
        <h1>Check Valid Email</h1>
        <input type="email" placeholder='Enter Email' value={email} onChange={handleEmail}/>
        <button onClick={handleEmail}>Submit</button>
      </div>

      <div>

        <button onClick={showText } className="bg-green-700 p-2 m-2" >Show Text</button>
        <button onClick={hideText} className="bg-red-700 p-2 m-2" >Hide Text</button>
        <h1 className="hidden showTxt">Hello World</h1>
      </div>

    </>
  )
}

export default Calcu