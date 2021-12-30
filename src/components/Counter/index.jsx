import React from 'react'
import "./styles.css";
class Counter extends React.Component{
state = {
    counter: "",
}
handleCounterPlus = (e) => {
      this.setState({
          counter: this.state.counter + 1
      })
}
handleCounterMinus = (e) => {
    this.setState({
        counter: this.state.counter - 1
    })
}
 render() {
    return (
        <div>
            <p>
                {this.state.counter}
            </p>
            <div className='buttons'>
                <button
                onClick={this.handleCounterPlus}
                >+</button>
                <button
                onClick={this.handleCounterMinus}
                >-</button>
                </div>
        </div>
    )
}
}

export default Counter;


// import React from 'react'
// import "./styles.css";
// class Counter extends React.Component{
// state = {
//     counter: 0,
// }
// handleCounterPlus  ()  {
//       this.setState({
//           counter: this.state.counter + 1
//       })
// }
// handleCounterMinus  ()  {
//     this.setState({
//         counter: this.state.counter - 1
//     })
// }
//  render() {
//     return (
//         <div>
//             <p>
//                 {this.state.counter}
//             </p>
//             <div className='buttons'>
//                 <button
//                 onClick={() => {
//                     this.handleCounterPlus()
//                 }}
//                 >+</button>
//                 <button
//                 onClick={ () => {
//                     this.handleCounterMinus()
//                 }}
//                 >-</button>
//                 </div>
//         </div>
//     )
// }
// }

// export default Counter;