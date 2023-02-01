<<<<<<< HEAD
import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css';

import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
  item: Level
=======
import { Level } from "../resultImc/ResultImc";
import styles from './GridItem.module.css'

type Props = {
    item: Level
>>>>>>> 417dc35877a070cfcffe970f3f12a567f84681b1
}

export const GridItem = ({ item }: Props) => {
    return (
<<<<<<< HEAD
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
               <img src={item.icon === 'up' ? upImage : downImage} alt="" width="30" />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
             
             {item.yourImc &&
                <div className={styles.yourImc}> Seu IMC é de: {item.yourImc} Kg/m² </div>

             }

            <div className={styles.gridInfo}>
                <>
                    O IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>

=======
        <div>
            <div>
                
            </div>
>>>>>>> 417dc35877a070cfcffe970f3f12a567f84681b1
        </div>
    )
}