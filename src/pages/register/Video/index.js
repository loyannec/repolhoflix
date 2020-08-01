import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function RegisterVideo() {
    return (
        <PageDefault>
            <h1>Register Video</h1>

            <Link to="/register/category">
                Register category
            </Link>
        </PageDefault>
    );
}

export default RegisterVideo;
