// components/modules/Project.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = (props) => {
    return (
        <>
            <button class="website-card">
                <div class="card-info">
                    <h2>{props.title}</h2>
                    <div class="outbound-cont">
                        <Link to={props.Linkto} class="outbound">
                            <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="29" rx="3" fill="transparent"></rect>
                                <path d="M10.454 7.36396H23.182V20.0919" stroke="beige"></path>
                                <path d="M23 7.54596L9 21.546" stroke="beige"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </button>
        </>
    );
};

export default Project;
