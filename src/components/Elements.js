import React, { Component } from 'react'
import List from './List'

 class Elements extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
                hashContainers: [
                        {key: 1, hash: "llldld"},
                        {key: 2, hash: "555555"},
                        {key: 3, hash: "5ioieo5"},
                ]
         }
     }

    generateHash = () => {
        console.log('jjjj')
        const newHash = {
            key: Math.random() + "",
            hash: Math.random().toString(16)
        }

        this.setState({
            hashContainers: [ ...this.state.hashContainers, newHash]
        })
    }

    deleteHash = (id) => {
        const hashContainers = Object.assign([], this.state.hashContainers)
        hashContainers.splice(id, 1)
        this.setState(
            { hashContainers: hashContainers }
        )
    }
     
    render() {

        const {hashContainers} = this.state

        return (
            <div className="mt-6" style={{ display: "flex", justifyContent: "space-around"}}>
            <div>
                <button className="btn btn-primary" onClick={this.generateHash} >Generate hash</button>
            </div>
                <div>
                    <ul className="list-group">
                        {
                            hashContainers.map((hashContainer, index) =>
                            
                                <List key={index} id={hashContainer.key} hash={hashContainer.hash} 
                                deleteHash={() => this.deleteHash(index)} />
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Elements
