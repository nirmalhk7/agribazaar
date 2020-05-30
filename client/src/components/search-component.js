import React, { Component } from "react";
import Axios from "axios";
import { serverUrl } from "../shared/baseUrl";

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }
    componentDidMount(){
        Axios.get(serverUrl+`search?squery=${this.props.location.search.split('=').slice(1).join('=')}`)
        .then(res =>{
            this.setState({
                data: res.data
            })
        })
        .catch(err=>{
            console.log("Error ",err)
        });
    }
    render(){
        return (
            <p style={{paddingTop:"50px"}}>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Seller Count</th>
                </tr>
                {this.state.data.map(el=>
                    <tr key={el.id}>
                        <td>{el.name}</td>
                        <td>{el.description}</td>
                        <td>{el.category}</td>
                        <td>{el.sellerCount}</td>
                        <td><a href={"item/"+el.name}>See Sellers</a></td>
                    </tr>
                )}
             </table>
            </p>
          );
    }
}
