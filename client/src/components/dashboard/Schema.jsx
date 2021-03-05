import React from 'react';
import { Link } from 'react-router-dom';

const Schema = () => {
    return (
        <div className="schema-plant">
            <div className="schema-plant__container">
                {/* <img className=" schema-plant__image-bg img-fluid for-light" src={require("../../assets/images/plants/ptar.jpg")} alt="home" /> */}
                <img className=" schema-plant__image-bg img-fluid" src={require("../../assets/images/home/home.jpg")} alt="home" />
            </div>
            {/* TODO: mejorar codigo, que sea dinamico */}
            <div className="schema-plant__container-buttons">
                <div className="schema-plant__item-button">
                    <Link to="/node1"> Nodo 1</Link>
                </div>
                <div className="schema-plant__item-button">
                    <Link to="/node2"> Nodo 2</Link>
                </div>
                <div className="schema-plant__item-button">
                    <Link to="/node3"> Nodo 3</Link>
                </div>
                <div className="schema-plant__item-button">
                    <Link to="/node4"> Nodo 4</Link>
                </div>
                <div className="schema-plant__item-button">
                    <Link to="/node5"> Nodo 5</Link>
                </div>
                <div className="schema-plant__item-button">
                    <Link to="/node6"> Nodo 6</Link>
                </div>
                <div className="schema-plant__item-button">
                    <Link to="/node7"> Nodo 7</Link>
                </div>
            </div>
        </div>
    )
}

export default Schema
