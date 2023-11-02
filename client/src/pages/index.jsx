import Image from 'next/image';
<<<<<<< HEAD
import styles from '../styles/Home.module.css'
import acmlogopng from '../assets/acmlogo.png'
=======
import styles from '../styles/Home.module.css';
import acmLogo from '../assets/acmlogo.png';
>>>>>>> upstream/part4


function Home() {
  return (
<<<<<<< HEAD
    
    /* Each function in JSX can only return ONE DOM element, so we have one top-level div */
    <div className={styles.main}>
        <div className={styles.welcome}>
          <h1> Welcome! </h1>
          <h2>Are you ready to play?</h2>
          <p>This was made by a student who has no idea what they are doing so be prepared for any inevitable bugs. I really did
            try my best but it is what it is.
          </p>
        </div>
      <div className={styles.image}>
        {/* Put the ACM logo here! */}
        <Image
        src = {acmlogopng}
        width ={500}
        height={500}
        alt="acm logo"
        />
        {/* Keep in mind that any images you want to use must be imported from the /assets folder */}
=======
    <div className={styles.main}>
        <div className={styles.welcome}>
          <h2>Welcome to HackRacer!</h2>
          <p>You can navigate to <i>Add Sentence</i> button at the top to add a new sentence. 
              Then you can go over to <i>Play Game</i> to start playing the game. 
          </p>
      </div>
      <div className={styles.image}><Image src={acmLogo} width={200} height={200} alt="acmlogo"/>
>>>>>>> upstream/part4
      </div>
    </div>
  );
}

export default Home;
