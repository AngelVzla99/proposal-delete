'use client'
import Image from 'next/image'
import Button from '@mui/material/Button';
import { useState } from 'react';
import Proposal from './Proposal';

export default function MainSection() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {
        !open ? (
          <Button 
        onClick={() => setOpen(!open)}
        variant="contained"
        sx={{ 
          height: 50, 
          width: 200 ,
          marginLeft: 'auto',
          marginRight: 'auto',
          margin: 'auto'
        }}
      >
        Dame click
      </Button>      
        ) : (
          <Proposal />
        )
      }
    </>
  )
}
