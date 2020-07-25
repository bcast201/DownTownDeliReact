import React, { Component } from 'react';
import { Modal } from 'reactstrap';



class Footer extends Component {
    constructor(props) {
        super(props)


        this.state = {
            isModalOpen: false,
        }

        

        this.toggleModal = this.toggleModal.bind(this);
    };
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <footer className="page-footer font-small footer-color pt-4">
                    <div className="container">
                        <ul className="list-unstyled list-inline text-center py-2">
                            <li className="list-inline-item">
                                <h5 className="mb-1 text-white">Looking for special deals? Join our Mailing list!</h5>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!" type="cutton" className="btn btn-info" onClick={this.toggleModal} data-target="#signup">Sign up!</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-copyright text-center py-3">
                        <a role="button" className="text-info" href="tel:+14024389410"><i className="fa fa-phone"></i> 402-438-9410</a>
                        <a href="https://www.google.com/maps/place/O+St+%26+S+10th+St,+Lincoln,+NE+68508/@40.8136265,-96.7091892,17z/data=!3m1!4b1!4m5!3m4!1s0x8796bf02a4351921:0x3f84503a1f5b7389!8m2!3d40.8136265!4d-96.7070005" className="text-info pl-5" target="_blank"> 10th & O St Lincoln, NE 68508</a>
                    </div>

                </footer>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title modal-special-text">Delicious Deals Right to Your Inbox</h3>
                                <button type="button" className="close" data-dismiss="modal" onClick={this.toggleModal}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-12">
                                                <label className="sr-only" for="loginEmail">Email address here</label>
                                                <input type="email" className="form-control form-control-sm" id="loginEmail" placeholder="Enter email" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <button type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal" onClick={this.toggleModal}>Cancel</button>
                                            <button type="submit" className="btn btn-info btn-sm ml-1">OK</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Footer;