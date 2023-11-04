'use client'
import Image from 'next/image'
import Button from '@mui/material/Button';
import { useState } from 'react';
import TryAgain from './TryAgain';
import TermsAndConditions from './TermsAndConsitions';

export default function Proposal() {
  const [openTryAgain, setOpenTryAgain] = useState(false)
  const [openTermsAndConditions, setOpenTermsAndConditions] = useState(false)

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        Quieres ser mi novia ?
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50, gap: 50 }}>
          <Button variant="contained" onClick={() => setOpenTermsAndConditions(!openTermsAndConditions)}>
            Si
          </Button>
          <Button variant="contained" onClick={() => setOpenTryAgain(!openTryAgain)}>
            No
          </Button>
        </div>
      </h1>

      <TryAgain open={openTryAgain} setOpen={setOpenTryAgain} />
      <TermsAndConditions open={openTermsAndConditions} setOpen={setOpenTermsAndConditions} />
    </>
  )
}
