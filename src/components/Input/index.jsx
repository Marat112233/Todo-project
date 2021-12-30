import React from 'react'


class Input extends React.Component {

    constructor() {
        super();
        this.state = {
            textValue: '',
        }
    this.commonChange = this.commonChange.bind(this);
    }
    commonChange(event) {
        this.setState({
            [event.target.text]: event.target.value
        });
    }
    
    
    
    render() {
        return (
            <div>
            
            <form>
                <label>Text:
                    <input type="text" name='textValue' onChange={this.commonChange}/>
                </label>
            </form>
            <p>Text:{this.state.textValue} </p>
            </div>
            

        );
    }
}
export default Input;