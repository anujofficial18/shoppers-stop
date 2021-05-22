import React, { Component } from 'react'
import axios from 'axios'
import config from '../config/config'
import { ToastContainer, toast } from 'react-toastify';


export default class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:"",
             password:""
        }
    }

    registerUser = ()=>{
        let {name, email, password} = this.state
        axios.post(`${config.API}/register`, {name, email, password}).then(res=>{
            let data = res.data
            if(data.status != "OK"){
                toast(data.msg)
            }else{
                toast(data.msg)
                window.location = '/login'

            }

        }).catch(err=>{
            console.log(err)
        })
    }
    
    render() {
        return (
             <div>
                <div className="container offset-md-1 ">
                    <div className="row" id="hero-row">
                        <div className="col-md-12 d-md-flex p-0 hero-body">
                            <div className="left-section rounded-right   col-md-6 " >
                                <div className="inner-form col-md-10 offset-md-1">
                                    <form className=" myForm p-4 ">
                                        <p className="text-white h2">signup here :)</p>
                                        <div className="name ">
                                            <label for="exampleInputEmail1" className="form-label "></label>
                                            <input type="name" className="form-control " placeholder="Full-Name"
                                                id="exampleInputEmail1"
                                                value={this.state.name}
                                                onChange={(e)=>this.setState({name:e.target.value})}
                                                aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="mobile-number ">
                                            <label for="exampleInputEmail1" className="form-label "></label>
                                            <input type="name" className="form-control " placeholder="Mobile-Number"
                                                id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="email ">
                                            <label for="exampleInputEmail1" className="form-label "></label>
                                            <input type="email" className="form-control " placeholder="Email"
                                                value={this.state.email}
                                                onChange={(e)=>this.setState({email:e.target.value})}
                                                id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>

                                        <div className="password-area ">
                                            <label for="exampleInputPassword1" className="form-label"></label>
                                            <input type="password" className="form-control"
                                                value={this.state.password}
                                                onChange={(e)=>this.setState({password:e.target.value})}
                                                placeholder="password" id="exampleInputPassword1" />
                                        </div>
                                        <div className="password-area ">
                                            <label for="exampleInputPassword1" className="form-label"></label>
                                            <input type="password" className="form-control"
                                                value={this.state.password}
                                                onChange={(e) => this.setState({ password: e.target.value })}
                                                placeholder="Confirm-password" id="exampleInputPassword1" />
                                        </div>

                                        <div className="remember third-row d-flex space-bt ">
                                            <button type="submit " className="btn  btn-primary  mt-2" id="sign-in">Next</button>
                                        </div>                            
                                    </form>
                                </div>
                            </div>
                            <div className="right-section col-md-6   rounded-left ">

                                <div className="shop-img">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            // <div className="container">
            //     <div className="col-md-6 offset-3 mt-5">
            //         <p className="display-4 text-center">Register yourself</p>
            //         <input 
            //         className="form-control mt-5" 
            //         placeholder="Name"
            //         
            //         />
            //     </div>


            //     <div className="col-md-6 offset-3 mt-5">
            //         <input 
            //         className="form-control" 
            //         placeholder="Email"
            //        
            //         />
            //     </div>

            //     <div className="col-md-6 offset-3 mt-5">
            //         <input 
            //         className="form-control" 
            //         placeholder="Password"
            //         type="password"
            //         
            //         />
            //     </div>



            //     <div className="col-md-6 offset-3 mt-5 text-center">
            //         <button 
            //         className="btn btn-success btn-block"
            //         onClick={this.registerUser}
            //         >Register</button>
            //     </div>

            //     <ToastContainer position="top-center"/>

            // </div>
        )
    }
}