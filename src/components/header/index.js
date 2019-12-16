  
import React from 'react';
import './styles.scss'


export const Header = ({title = 'default Title'}) => (
    <header>
        <h1>{title}</h1>
    </header>
)