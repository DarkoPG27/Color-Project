import React, { Component } from 'react';
import { withStyles } from '@mui/styles';

const styles = {
    main: {
        backgroundColor: "purple",
        border: "3px solid teal",


    },

    secondary: {
        backgroundColor: "pink",
        "& h1": {
            color: "white",
            "& span": {
                backgroundColor: "red"
            }
        }
    }
}


function MiniPalette(props) {
    const { classes } = props;
    console.log(classes)
    return (
        <div className={classes.main}>
            <h1>Mini Palette</h1>
            <section className={classes.secondary}>
                <h1>Secondary <span>classes</span></h1>
            </section>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);
