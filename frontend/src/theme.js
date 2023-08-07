import {createTheme} from '@mui/material/styles';
import {blue, lightBlue, red} from '@mui/material/colors';

export const theme = createTheme({
    palette :{
        primary:{
            main:red[500]     //blue
        },
        secondary :{
            main: lightBlue[800],
            midNightBlue : '#003366'
        }
    }
})