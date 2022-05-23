import React from 'react'
import {Box,Grid,Typography,Button} from '@mui/material'
import { useHistory } from 'react-router'



const SelectOpt = () => {
    const history=useHistory();
    return (
        <Grid container style={{justifyContent:"center"}}>
           
                <Box style={{marginTop:"15rem"}}>
                <Typography variant="h3" textAlign="center" gutterBottom style={{fontFamily:"cursive",color:"cornflowerblue",marginTop:"2rem"}}>RMS</Typography>
                 <Typography variant="h6" textAlign="center" gutterBottom color="text.secondary">Sarmad Jamal(19k1116)</Typography>
                 <Typography variant="h6" textAlign="center" gutterBottom color="text.secondary">Khizer Jilani(19k1057)</Typography>
                 <Typography variant="h6" textAlign="center" gutterBottom color="text.secondary">Mansoor Butt(19k1114</Typography>

                 <Button style={{marginTop:"3rem"}}  variant="contained" onClick={()=>history.push('/admin/login')}>Login As Administrator</Button>
                 <Button style={{marginTop:"3rem",marginLeft:"3rem"}} color="error"  variant="contained"
                 onClick={()=>history.push('/customer/signup')}>
                 Login As User</Button>
                 </Box>
                    
                     
                     </Grid>
    )
}

export default SelectOpt
