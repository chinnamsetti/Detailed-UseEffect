import React, { Component, PureComponent } from 'react'

export default class CCCounter extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         score:0,
         wickets:0,
      }
    }
    componentDidMount=()=>{
        console.log(`CCCounter-componentDidMount-Loaded`);
    }

    shouldComponentUpdate=(nextProps,nextState)=>{
        console.log(nextState);
        console.log(this.state);
        console.log(`shouldComponentUpdate`);
        return true;
    }

    componentDidUpdate=()=>{
     console.log(`componentDidUpdate`);
     return true;
    }

    componentWillUnmount=()=>{
       console.log(`CCCounter-componentWillUnmount-Unloaded`);
    }
   render() {
    console.log(`CCCounter-render`)
    return (
      <div className="counter">
        <h1>CC-Counter</h1>
        <h2>Score:{this.state.score}</h2>
        <h2>Wickets:{this.state.wickets}</h2>
        <button type="button" onClick={()=>{
            this.setState({score:this.state.score+1})
        }}>Increment Score</button>
        <button type="button"onClick={()=>{

        this.setState({score:this.state.score-1}) 

        }}>Decrement Score</button>
        <button type="bitton" onClick={()=>{

          this.setState({wickets:this.state.wickets+1}) 

        }}>Increment Wickets</button>
        <button type="bitton" onClick={()=>{

          this.setState({wickets:this.state.wickets-1})

        }}>Decrement Wickets</button>
        
      </div>
    )
  }
}
