import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import { Item } from '../ThisDayInfo/ThisDayInfo'
import { ThisDayItem } from '../ThisDayItem/ThisDayItem'
import s from './Popup.module.scss'

interface Props {

}

export const Popup = (props: Props) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: '20° - ощущается как 17°'
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное'
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков'
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер'
        },

    ];
    return (
        <div className={s.popup}>
            <div className={s.popup__info}>
                <div className={s.day}>
                    <div className={s.day__temp}>20°</div>
                    <div className={s.day__name}>Суббота</div>
                    <div className={s.img}>
                        <GlobalSvgSelector id="sun" />
                    </div>
                    <div className={s.day__time}>23:45</div>
                    <div className={s.day__city}>Урюпинск</div>
                </div>
                <div className={s.items}>
                    {
                        items.map((item: Item) => (
                            <ThisDayItem key={item.icon_id} item={item} />
                        ))
                    }
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </div>
    )
}
