import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@mui/material/Button';
import MainSection from '@/components/main';

export default function Home() {

  return (
    <main className={styles.main}>
      <MainSection />
    </main>
  )
}
