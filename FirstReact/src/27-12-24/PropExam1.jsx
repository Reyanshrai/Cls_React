import * as React from 'react'
import MyButton from './PropExam'


class PropExample extends React.Component{
    state = {
        text: 'My Button',
        disbaled:false,
        items : ['one','ice cream','popcorn','orange']
    }

    constructor(){
        super()
        setTimeout(()=>{
            this.setState({
                disbaled:false,
                text:'hello world',
                items:['apple','banana','cheery','date']
            })
        },2000)
    }

    render(){
        const {text,disbaled,items} = this.state
        return (
            <div>
                <MyButton text={text} disbaled={disbaled}></MyButton>
            </div>
        )
    }
}

export default PropExample