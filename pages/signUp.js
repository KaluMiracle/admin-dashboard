/* eslint-disable @next/next/link-passhref */
import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'
import signUpImage from '../assets/images/signup.svg'
import logo from '../assets/images/logo.svg'
import Link from 'next/link'
import google from '../assets/icons/google.svg'
import fb from '../assets/icons/fb.svg'


export default function SignUp() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form className={styles.main}>
       <div><Image src={logo} alt=''/></div>
       <h3>Sign Up</h3>
       <div className={styles.box}>
          <Link href='https://www.google.com'>
            <div className={styles.btn_link}>
              <div><Image src={google} alt= '' /></div>
              Google
            </div>
          </Link>
          <Link href='https://www.facebook.com'>
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
          Full Name
          <input placeholder='Jiangyu' type='text'/>
        </label>

        <label>
          Email Address
          <input placeholder='example@gmail.com' type='email'/>
        </label>

        <label>
          Username
          <input placeholder='johnkevine4362' type='text'/>
        </label>

        <label>
          Password
          <input placeholder='*******' type='password'/>
        </label>

        <div className={styles.box}>
          <input type='checkbox' style={{
            marginRight: '10px',
            ...styles
          }}/>
          <span>
            By creating an account you agree to the
            <Link href={'/'}>
                <span className={styles.link_inline}>terms of use</span>
            </Link>
            and our 
            <Link href={'/'}>
                <span className={styles.link_inline}>privacy policy</span>
            </Link>
          </span>
        </div>


        <Link href={'/confirm'}>
            <button formAction='submit'>
             Sign up
            </button>
        </Link>
        
        <div className={styles.box} style={{
          width: '90%',
          ...styles
        }}>
          <p>Already have an account?
            <Link href={'/'}>
                <span className={styles.link_inline}>Log in</span>
           </Link>
          </p>
          

        </div>
      </form>

      <div className={styles.image_container}><Image src={signUpImage} alt=''/></div>
      
    </div>
  )
}
