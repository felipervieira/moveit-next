import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://mir-s3-cdn-cf.behance.net/user/230/bbec92506456819.602da8ab1b83d.jpg" alt="Felipe Vieira" />
            <div>
                <strong>Felipe Vieira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}

                </p>
            </div>
        </div>

    );
}