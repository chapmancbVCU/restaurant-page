/******************************************************************************
 *         Name: index.js
 *       Author: Chad Chapman
 * Date Created: December 4, 2022
 *  Description: Functions that support implementation of Restaurant website
******************************************************************************/
import _ from 'lodash';
import './styles.css';
console.log("hi hi");

const container = document.querySelector('#content');

function component() {
    const element = document.createElement('div');
    element.classList.add('main');
    
    return element;
}

container.appendChild(component());