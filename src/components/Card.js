import React, {Component} from 'react';
import Types from './Types'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({      
            isToggleOn: !prevState.isToggleOn
        }));
        
    }

    render() {
        const { id, name, sprite, types } = this.props;
        const { isToggleOn } = this.state;

        return (
            <div onClick={this.handleClick} className={"card " + (isToggleOn ? "selected" : "") }>
                <div className="flex justify-between items-center">
                    <p className="ml-2 ">{name.charAt(0).toUpperCase() + name.slice(1)}</p> {/*capitalized name*/}
                    <p className="mr-2 text-base">{id}</p>
                </div>   
                <div className="spriteContainer">
                    <img className="sprite" width="144px" alt="robots bg-white" src={`${sprite}`} />
                </div>
                <Types types = {types} id = {id} />
            </div>
        )
    }
}
    
export default Card;