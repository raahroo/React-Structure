import React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName,

        };
        setTimeout(() => {
                this.setState({
                    status: this.state.status + 1
                })
            }, 3000
        );
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        })
    }

    render(){
        return (
            <div className="container">
                <p>New component</p> 
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr />
                <button onClick={() => this.onMakeOlder()} 
                    className="btn btn-primary">Make me older!
                </button> 
                <hr />
                <button onClick={this.props.greet} 
                    className="btn btn-primary">Greet
                </button> 
                <hr />
                <input 
                    onChange={(event) => this.onHandleChange(event)}
                    type="text" 
                    value={this.state.homeLink}/>
                 <button onClick={this.onChangeLink.bind(this)}
                    className="btn btn-primary">Change Header Link
                </button> 
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string,
};