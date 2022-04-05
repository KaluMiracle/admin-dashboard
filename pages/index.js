/* eslint-disable @next/next/link-passhref */
import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'
import loginImage from '../assets/images/signin.svg'
import logo from '../assets/images/logo.svg'
import Link from 'next/link'
import google from '../assets/icons/google.svg'
import fb from '../assets/icons/fb.svg'


export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form className={styles.main}>
       <div><Image src={logo} alt=''/></div>
       <h3>Log in</h3>
       <div className={styles.box}>
          <Link href='https://www.google.com'>
            <div className={styles.btn_link}>
              <div><Image src={google} alt= '' /></div>
              Google
            </div>
          </Link>
          <Link href='https://www.google.com'>
            <div className={styles.btn_link}>
              <div><Image src={fb} alt= '' /></div>
              Facebook
            </div>
          </Link>
        </div>

        <div className={styles.box}>
            <div className={styles.line}></div>
            or
            <div className={styles.line}></div>
        </div>

        <label>
          Email Address
          <input placeholder='example@gmail.com' type='email'/>
        </label>

        <label>
          Password
          <input placeholder='*******' type='password'/>
        </label>

        <div className={styles.box} style={{
          justifyContent: 'space-between'
        }}>
          <div className={styles.box} style={{
            width: 'fit-content',
            ...styles
          }}>
            <input type='checkbox' style={{
            marginRight: '10px',
            ...styles
          }}/>
            Remember me
          </div>
          <Link href={'/recover_password'}>
            <p className={styles.link_inline}>Reset Password?</p>
          </Link>
        </div>
        <Link href={'/Dashboard'}>
          <button  formAction='submit'>
          Log in
        </button>
        </Link>
        
        <div className={styles.box} style={{
          width: '90%',
          ...styles
        }}>
          <p>Dont't have an account yet?
            <Link href={'/signUp'}>
                <span className={styles.link_inline}>Sign up</span>
           </Link>
          </p>

        </div>
      </form>

      <div className={styles.image_container}><Image src={loginImage} alt=''/></div>
      
    </div>
  )
}
