// components/modules/Dropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dropdown.module.css';

const Dropdown = (props) => {
    return (
        <>
            <div className={styles.dropdown}>
                <button class={styles.dropbtn}>
                    {props.MainTitle}
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className={styles.dropdownContent}>
                    <Link to={props.link1}>{props.title1}</Link>
                    <Link to={props.link2}>{props.title2}</Link>
                    <Link to={props.link3}>{props.title3}</Link>
                    <Link to={props.link4}>{props.title4}</Link>
                    <Link to={props.link5}>{props.title5}</Link>
                </div>
            </div>
        </>
    );
};

export default Dropdown;
