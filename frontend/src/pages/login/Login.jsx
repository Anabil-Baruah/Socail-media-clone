import "./login.css";
import { useContext ,useRef } from "react";
import {loginCall} from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core";

export default function Login(){
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you LamaSocial
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
                        <input placeholder="password" type="password" required minLength="6" className="loginInput" ref={password} />

                        <button className="loginButton" type="submit" disabled ={isFetching}> 
                        {isFetching ? (
                            <CircularProcess color = "white" size = "20px" />

                        ) : ("Log In")
                        }
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
                    </form>
                </div>
            </div>
        </div>
    );
}