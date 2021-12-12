import React, {ChangeEvent} from "react";

type PathParamsType = {
    status: string
    updateStatus: (status: string) => void
}

type prevStateType = {
    editMode: boolean
    status: string
}
export class ProfileStatus extends React.Component<PathParamsType> {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }
    pressKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.setState({
                editMode: false
            })
            this.props.updateStatus(this.state.status)
        }
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            status:e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps:PathParamsType,prevState:prevStateType) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'set status!'}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           onKeyPress={this.pressKeyHandler}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}
                           autoFocus/>
                </div>}
            </div>
        )
    }
}