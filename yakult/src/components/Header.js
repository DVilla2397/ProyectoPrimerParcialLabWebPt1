import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>({
    root: {
        margin: theme.spacing(3,0,2),
        fontFamily: "Titan One",
        textAlign: "center",
        fontSize: "100px",
        backgroundColor: "red",
        color: "white",
        textShadow: "2.5px 2.5px darkmagenta",
        boxShadow: "5px 5px 5px rgba(0, 0, 0, .5)",

    },
}));

export const Header = () => {
    const styles = useStyles();

   return (
    <Typography className={styles.root} component="h1">
        Yakult
    </Typography>
   );
};