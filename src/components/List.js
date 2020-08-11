import React, { Component } from 'react'

class List extends Component {
    

    render() {
        console.log(this.props)
        const { hash, id, deleteHash } = this.props
        return (
            <div>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="badge badge-info badge-pill">{id} </span>
                    <span>{hash}</span>
                    <button className="btn btn-danger" 
                        onClick={deleteHash} >
                        DELETE
                    </button>
                </li>
            </div>
        )
    }
}

export default List
