import React, { Component } from 'react'
import { connect } from 'react-redux'

// import action to add a new timer
import { addTimer } from '../actions'

class NewTimer extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "" }
    }

    render() {
        // build a component that takes in "name" and a save button to save the timer
        return (
            <div>
                <input
                    type="text"
                    placeholder="New Timer Name"
                    name="name"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}/>
                <button
                    onClick={(e) => {
                        this.props.addTimer(this.state.name)
                    }}>Save</button>
            </div>
        )
    }
}

// not needed for component
const mapStateToProps = (state) => {
    return {}
}

// use 'mapDispatchToProps' to connect the 'newTimer' action creator to this component
const mapDispatchToProps = () => {
    return { addTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(NewTimer)