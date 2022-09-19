import React from "react";
import { useNavigate } from 'react-router-dom';
import { MainContainer } from "./components/MainContainer";
import { PButton } from "./components/PButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) =>({
    root: {
        margin: theme.spacing(3,0,2),
        fontFamily: "Alfa Slab One",
        textAlign: "center",
        fontSize: "75px",
        color: "Black",

    },
}));

export const Home = () => {

    const navigate = useNavigate();
    

    const styles = useStyles();

    return(
            <MainContainer>
            <img src="../../YakultProducto.png" alt='jyakult' />
            <Typography className={styles.root} component="h2">Registro Evento</Typography>
            <PButton onClick={()=>navigate("/forms")}>Registrarme</PButton>
            <Typography className={styles.root} component="h2">Rifa</Typography>
            <PButton onClick={()=>navigate("/clock")}>Ir a la Rifa</PButton>
            </MainContainer>
    );
};

