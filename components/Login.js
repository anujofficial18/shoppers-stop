import React, { Component } from 'react'
import { BrowserRouter, Link } from "react-router-dom";
import axios from 'axios';
import './login.css';
import config from "../config/config";
import { ToastContainer, toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';




export default class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }
    loginUser = () => {
        let { email, password } = this.state
        axios.post(`${config.API}/Login`, { email, password }).then(async (res) => {
            let data = res.data
            if (data.status != "OK") {
                toast(data.msg)
            } else {
                let token = data.data.token
                await localStorage.setItem("lgntkn", token)
                toast(data.msg)
                window.location = '/'
            }
        }).catch(err => {
            console.log(err)
        })

    }

    render() {
        return (
            <div>
                {/* <Grid justify="center">
                    <Grid item md={6}>
                        <Paper>
                            <h1>login</h1>

                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </Paper>

                    </Grid>
                </Grid> */}
                 <div className="container offset-md-1 ">
                    <div className="row" id="hero-row">
                        <div className="col-md-12 d-md-flex p-0 hero-body">
                            <div className="left-section rounded-right   col-md-6 " >
                                <div className="inner-form col-md-10 offset-md-1">
                                    <form className=" myForm p-4 ">
                                        <div className="email ">
                                            <label for="exampleInputEmail1" className="form-label "></label>
                                            <input type="email" className="form-control " placeholder="Email or phone-number "
                                                value={this.state.email}
                                                onChange={(e) => this.setState({ email: e.target.value })}
                                                id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                                        </div>

                                        <div className="password-area ">
                                            <label for="exampleInputPassword1" className="form-label"></label>
                                            <input type="password" className="form-control"
                                                value={this.state.password}
                                                onChange={(e) => this.setState({ password: e.target.value })}
                                                placeholder="password" id="exampleInputPassword1" />
                                        </div>
                                        <div className="remember third-row d-flex space-bt ">
                                            <p className="m-0 p-0 mt-3 text-white">remember me</p>
                                            <button type="submit" className="btn  btn-primary  mt-2" id="sign-in">Log in</button>
                                        </div>
                                        <div className="forth-row d-flex space-bt">

                                            {/* <Link to="/Signup"> signup now</Link> */}
                                            <a className="text-white">Forgotten password?</a>

                                        </div>


                                        <div className="fb-gg text-center mt-3">
                                            <h6 className="text-white">or login with :</h6>
                                            <hr></hr>
                                            <button className="btn btn-light login-by d-block px-4  "><i className="fab fa-google fa-2x "></i> login with google</button>
                                            <button className="btn btn-light login-by d-block px-3  "> <i className="fab fa-facebook-square fa-2x "></i>login with facebook</button>
                                            <a href="www.facebook.com/"></a>
                                            <a href="www.google.com"></a>
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
        )
    }
}