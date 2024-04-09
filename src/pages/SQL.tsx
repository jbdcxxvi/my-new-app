import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import {API_BASE_URL, USER_NAME, PASSWORD, DATABASE, PORT} from '../config';

const SQL: React.FC = () => {

    // const { Client } = require('pg');
    // let Connected = '';

    // const client = new Client({
    //     user: USER_NAME,
    //     host: API_BASE_URL,
    //     database: DATABASE,
    //     password: PASSWORD,
    //     port: PORT,
    // });

    // client.connect()
    // .then(() => {console.log('Connected to PostgreSQL database'); Connected = 'Connected';})
    // .catch((err: any) => {console.error('Connection error', err); Connected = 'Not Connected'})
    // .finally(() => client.end());

    return(
        <div className="container text-center"></div>
    );

};

export default SQL;

