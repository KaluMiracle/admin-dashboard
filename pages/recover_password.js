/* eslint-disable @next/next/link-passhref */
import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'
import logo from '../assets/images/logo.svg'

export default function RecoverPassword() {
  return (
    <div className={`${styles.container} ${styles.container_small}`}>
      <Head>
        <title>Recover Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${styles.large_box}`}>
        <div><Image src={logo} alt=''/></div>
        <h3>Recover</h3>
        <label>
            Email Address
            <input placeholder='example@gmail.com' type='email'/>
        </label>
        <button disabled={true} formAction='submit'>
            Reset your password
        </button>
      </main>

      
      
    </div>
  )
}
