import React from 'react'
import {Typography} from '@mui/material'

const MUITypography = () => {
  return (
      <>
    <Typography variant='h1'>MUITypography Heading 1</Typography>
    <Typography variant='h2'>MUITypography Heading 2</Typography>
    <Typography variant='h3'>MUITypography Heading 3</Typography>
    <Typography variant='h4' component='h1' gutterBottom>MUITypography Heading 4</Typography>
    <Typography variant='h5'>MUITypography Heading 5</Typography>
    <Typography variant='h6'>MUITypography Heading 6</Typography>
    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cumque praesentium in qui magnam facere ad fuga. Fugit ipsam veniam dolorem, repellat dolorum quas eius deleniti perspiciatis excepturi voluptas porro?</Typography>
    <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus cupiditate ullam, animi eveniet esse eos veritatis placeat modi eius amet. Numquam harum culpa sunt omnis itaque nostrum assumenda fuga excepturi?</Typography>
    </>
  )
}

export default MUITypography