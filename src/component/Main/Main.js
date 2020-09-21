import React from 'react';
import s from './Main.module.css'
import some from './15465856831547464152.svg'

const Main = () => {
    return ( <div className={s.main}>
                <div className={s.activity}>

                        <span>Activity</span>
                        <img height='10%' width='10%' src={some} alt="dd"/>

                </div>
                <div className={s.vehicles}>
                    <div>
                        <p>Vehicles</p>
                    </div>
                </div >
        </div>

    )
}
export default Main;