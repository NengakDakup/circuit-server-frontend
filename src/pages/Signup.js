import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Signup extends Component {
    render(){
        return (
            <div className="login-wrap">

                <div className="login-right signup-left">
                    <div className="login-content">
                        <h1>Welcome Back</h1>
                        <p>To keep connected with us please log in with your personal info</p>
                        <Link to="/login">SIGN IN</Link>
                    </div>
                </div>

                <div className="login-left">
                    <div className="login-content">
                        <h1>Create Account</h1>
                        <div></div>
                        <div className="input-details">
                            <input type="text" placeholder="*First Name" /><br />
                            <input type="text" placeholder="*Last Name" /><br />
                            <input type="number" placeholder="Phone Number" /><br />
                            <input type="email" placeholder="*Email Address" /><br />
                            <input type="text" placeholder="*Identification Number" /><br />
                            <input type="password" placeholder="*Password" /><br />
                            <input type="password" placeholder="*Verify Password" /><br />
                        </div>
                        
                        <button>SIGN UP</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Signup