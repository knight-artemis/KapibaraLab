import React from 'react'
import style from './Header.module.scss'

export default function Header(): JSX.Element {
  return (
    <Header>
      <div className={style.logo}></div>
      <div className={style.menu}></div>
      <div className={style.feedback}></div>
    </Header>
  );
}
