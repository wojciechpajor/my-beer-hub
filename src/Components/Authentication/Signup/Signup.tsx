import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {useAuth} from "../../../Context/AuthContext";

const Signup = (props) => {
    const [email, setEmail] = useState<string>()
    const [password1, setPassword1] = useState<string>()
    const [password2, setPassword2] = useState<string>()

    const context = useAuth()

    const handleSignup = () => {
        if(password1 === password2){
            context.fireSignup(email, password1).then(() => console.log("succesfully registered account"))
            props.setShowModal(false)
        } else {
            alert("provided passwords are not the same")
        }
    }

    const handleModal = () => {
        props.setModalType("Login")
        props.setShowModal(false)
    }

    return (
        <Modal
            id="loginModal"
            show={true}
            onHide={() => handleModal()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{backgroundColor: "var(--black)", color: "var(--light-yellow)"}}>
                <h5>Create your Beer Hub account !</h5>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                            anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password" onChange={(e) => setPassword1(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Confirm password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password" onChange={(e) => setPassword2(e.target.value)}/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Accepted terms of use</label>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer className="pt-0">
                <div className="w-100">
                    <p className="pt-0 mt-0 small">Have account already ? <span
                        onClick={() => props.setModalType("Login")} className="signupLink">Login</span></p>
                    <Button className="btn btn-warning px-5 mx-auto" style={{color: "white"}}
                            onClick={(_) => handleSignup()}>Signup</Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default Signup;
