import React from "react";

type PathParamsType = {
    status: string
}


export class ProfileStatus extends React.Component<PathParamsType> {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    pressKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.setState({
                editMode: false
            })
        }
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onKeyPress={this.pressKeyHandler}
                           onBlur={this.deactivateEditMode}
                           value={this.props.status}
                           autoFocus/>
                </div>}
            </div>
        )
    }
}