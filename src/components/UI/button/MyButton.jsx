import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        
        // добавляем стиль как свойство объекта {classes.myBtn}
        <button {...props} className={classes.myBtn}> 
            {children}
                         
        
        </button>
    );


}

export default MyButton;