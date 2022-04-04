/* eslint-disable @next/next/link-passhref */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'
import successImage from '../assets/images/success.svg'
import thumbsUp from '../assets/images/thumbsup.svg'


export default function RecoverPassword() {
  return (
    <div className={`${styles.container} ${styles.container_small}`}>
      <Head>
        <title>success</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${styles.large_box}`}>
        <div className={styles.success}>
            <div className={styles.success_img}><Image src={successImage} alt=''/></div>
            <div><Image src={thumbsUp} alt=''/></div>
        </div>
          
        <h3>Your account was successfully created</h3>
        <Link href={'/'}>
            <button className={styles.btn_short} formAction='submit'>
                Go to Home
            </button>
        </Link>
        
      </main>

      
      
    </div>
  )
}
