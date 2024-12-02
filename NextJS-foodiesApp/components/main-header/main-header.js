'use client';

import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from '@/components/main-header/main-header.module.css';
import Image from "next/image";
import MainHeaderBackGround from "./main-header-background";
import NavLink from "./nav-link";


export default function MainHeader() {


    return (
        <>
            <MainHeaderBackGround />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="A PLate with Food on it" priority />
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals"> Browse Meals </NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
