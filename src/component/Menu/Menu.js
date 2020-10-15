import React, {useState} from 'react';
import s from './Menu.module.css'



function Menu ()  {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return ( <div>
            {sidebar ?
                <div>
                <div className={s.menuSmall}>
                    <div className={s.logo }>
                        <img alt='df' src='https://thesafety.us/images/articles/javascript-logo.png' width='50%' height='50%' />
                        <span className={s.spanX} onClick={showSidebar}/>
                    </div>
                    <ul className={s.widgetListSmall}>
                        <li>
                            <a href="/">
                                <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-amy-wong.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-bender.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-zapp-brannigan.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-amy-wong.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-amy-wong.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-amy-wong.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-amy-wong.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img alt='df' src="https://img.icons8.com/wired/64/fa314a/futurama-amy-wong.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-amy-wong.png"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> :
                <div className={ s.menu}>
                    <div >
                        <div className={s.logo }>
                            <img alt='df' src='https://thesafety.us/images/articles/javascript-logo.png' width='50%' height='50%' />
                            <span className={s.spanX} onClick={showSidebar}/>
                        </div>
                        <ul className={s.widgetList}>
                            <li>
                                <a href="/">
                                    <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-amy-wong.png"/>
                                    <p> Link A </p>
                                </a>
                            </li>

                            <li>
                                <a href="/">
                                    <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-bender.png"/>
                                    <p> Link B </p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-zapp-brannigan.png"/>
                                    <p> Link C </p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-amy-wong.png"/>
                                    <p> Link D </p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-amy-wong.png"/>
                                    <p> Link E </p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-amy-wong.png"/>
                                    <p> Link F </p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-amy-wong.png"/>
                                    <p> Link Y </p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-amy-wong.png"/>
                                    <p> Link X </p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img alt='df' src="https://img.icons8.com/wired/32/fa314a/futurama-amy-wong.png"/>
                                    <p> Link Z </p>
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>}
         </div>
    )
}
export default Menu;