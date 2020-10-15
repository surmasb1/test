import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return ( <div className={s.main}>
                <div className={s.activity}>
                    <div>
                        <p className={s.head}>Activity</p>

                    </div>


                </div>
                <div className={s.vehicles}>
                    <div>
                        <p className={s.head} >Vehicles</p>
                    </div>
                </div >
        </div>

    )
}
export default Main;