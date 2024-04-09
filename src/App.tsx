import React from 'react';
import { Link } from 'react-router-dom';
import tictactoelogo from './assets/images/tic-tac-toe.png';
import profilelogo from './assets/images/profile-pic.png';
import dblogo from './assets/images/icons8-database-96.png';
import pythonlogo from './assets/images/Python-logo-notext.svg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const App: React.FC = () => {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-sm-3">
                    <div className="card mt-4">
                        <center>
                            <img className="card-img-top rounded-circle p-2 mt-1 mb-3 ml-1 mr-1" src={profilelogo} alt="Logo" style={{width:"150px", height:"150px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Joseph Bryan Dela Cruz</h5>
                                <p className="card-text">Software Developer</p>
                                <Link className="btn btn-primary" to="https://www.linkedin.com/in/josephbryandelacruz/" target="_blank" rel="noopener noreferrer">
                                    <span className="bi bi-linkedin p-1"></span>
                                    LinkedIn
                                </Link>
                            </div>
                        </center>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card mt-4">
                        <center>
                            <img className="card-img-top p-2 mt-1 mb-3 ml-1 mr-1" src={tictactoelogo} alt="Logo" style={{width:"150px", height:"150px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Tic Tac Toe</h5>
                                <p className="card-text">A Simple Tic Tac Toe Game</p>
                                <Link className="btn btn-success" to="/pages/TicTacToe" rel="noopener noreferrer">
                                    <span className="bi bi-controller p-1"></span>
                                    Play Game
                                </Link>
                            </div>
                        </center>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card mt-4">
                        <center>
                            <img className="card-img-top p-2 mt-1 mb-3 ml-1 mr-1" src={pythonlogo} alt="Logo" style={{width:"150px", height:"150px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Python Programming</h5>
                                <p className="card-text">S3 Uploader and File Converter</p>
                                <Link className="btn btn-secondary" to="/pages/PythonApp" rel="noopener noreferrer">
                                    <span className="bi bi-filetype-py p-1"></span>
                                    Python
                                </Link>
                            </div>
                        </center>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card mt-4">
                        <center>
                            <img className="card-img-top p-2 mt-1 mb-3 ml-1 mr-1" src={dblogo} alt="Logo" style={{width:"150px", height:"150px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Database Modeling</h5>
                                <p className="card-text">A Database Model Integration</p>
                                <Link className="btn btn-secondary" to="/pages/SQL" rel="noopener noreferrer">
                                    <span className="bi bi-database p-1"></span>
                                    Database
                                </Link>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
