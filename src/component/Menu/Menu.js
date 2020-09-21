import React, {useState} from 'react';
import s from './Menu.module.css'

let show = () =>{
    console.log('sdfsdfsdf')
}



function Menu ()  {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return ( <div className={sidebar ? s.menu: s.none}>
                <div >
                    <div className={s.logo}>
                        <img src='https://www.magetic.com/img/logo.png' width='50%' height='50%' className={s.widgetTitle}/>
                        <span onClick={showSidebar} > close X</span>
                    </div>
                    <ul className={s.widgetList}>
                        <li><a href="/">Link a</a></li>
                        <li><a href="/">Link b</a></li>
                        <li><a href="/">Link c</a></li>
                        <li><a href="/">Link d</a></li>
                        <li><a href="/">Link h</a></li>
                        <li><a href="/">Link y</a></li>
                        <li><a href="/">Link x</a></li>

                    </ul>
                </div>
        </div>

    )
}
export default Menu;