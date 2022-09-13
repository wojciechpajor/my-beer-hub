import React from 'react';
import {Button, Modal} from "react-bootstrap";

const Login = (props) => {

    return (
        <Modal id="loginModal"
               show={true}
               onHide={() => props.setShowModal(false)}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
        >
            <Modal.Header style={{backgroundColor: "var(--black)", color: "var(--light-yellow)"}}>
                <h5>Login to your Beer-hub account </h5>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password" />
                    </div>
{/*                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Stay logged</label>
                    </div>*/}
                </form>
            </Modal.Body>
            <Modal.Footer className = "pt-0">
                <div className="w-100">
                    <p className="pt-0 mt-0 small">Dont have account ? Create one <span onClick={() => props.setModalType("Signup")} className="signupLink">here</span> </p>
                    <Button className="btn btn-warning px-5 mx-auto" style={{color: "white"}} onClick={(_) => props.setShowModal(false)}>Login</Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default Login;
