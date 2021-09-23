import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import s from './ThisDay.module.scss'

interface Props {

}

export const ThisDay = (props: Props) => {
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.temp}>20°</div>
                <div className={s.day}>Сегодня</div>
            </div>
            <div className={s.bottom__block}>
                <div className={s.time}>Время: <span>21:54</span></div>
                <div className={s.city}>Урюпинск</div>
            </div>
        </div>
    )
}
