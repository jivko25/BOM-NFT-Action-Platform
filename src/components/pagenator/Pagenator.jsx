import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Grid } from '@mui/material';
import styles from './Pagenator.module.scss';

export default function Pagenator({onPrevious, onNext, isFirst, isLast}){
    return(
            <Grid container spacing={3} justifyContent={"center"} margin={3} className={styles.wrapper}>
                {isFirst ?
                    null
                    :
                <Grid item>
                    <ArrowBackIosNewIcon onClick={onPrevious}/>
                </Grid>
                }
                {isLast ?
                null
                :
                <Grid item>
                    <ArrowForwardIosIcon onClick={onNext}/>
                </Grid>
                }
            </Grid>
    )
}