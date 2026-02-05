import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
        return storageTheme
    });

    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>
    }

    useEffect(() => {
       document.documentElement.setAttribute('data-theme', theme)
       localStorage.setItem('theme', theme)
    }, [theme]);


    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();
        
        setTheme(prevTheme => {
            const nextTheme = prevTheme == 'dark' ? 'light' : 'dark';
            return nextTheme;
        })
    }
   
    return (
        <nav className={styles.menu}>
           <a href="#" className={styles.menuLink}> <HouseIcon/> </a>
           <a href="#" className={styles.menuLink}> <HistoryIcon/> </a>
           <a href="#" className={styles.menuLink}> <SettingsIcon/> </a>
           <a href="#" className={styles.menuLink} onClick = {handleThemeChange}> {nextThemeIcon[theme]} </a>
        </nav>
    );
}