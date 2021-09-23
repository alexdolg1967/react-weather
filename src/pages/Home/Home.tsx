import React from 'react'

import s from './Home.module.scss'

interface Props {

}

export const Home = (props: Props) => {
    return (
        <div className={s.home}>
            <h2>Home</h2>
        </div>
    )
}
