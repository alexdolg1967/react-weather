import React from 'react'
import { Card } from './Card'
import s from './Days.module.scss'
import { Tabs } from './Tabs'


interface Props { }

export interface Day {
    key: number,
    day_name: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
}

export const Days = (props: Props) => {
    const days: Day[] = [
        {
            key: 1,
            day_name: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            key: 2,
            day_name: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь и солнце',
        },
        {
            key: 3,
            day_name: 'Среда',
            day_info: '30 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь',
        },
        {
            key: 4,
            day_name: 'Четверг',
            day_info: '1 сент',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            key: 5,
            day_name: 'Пятница',
            day_info: '2 сент',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            key: 6,
            day_name: 'Суббота',
            day_info: '3 сент',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            key: 7,
            day_name: 'Воскресенье',
            day_info: '4 сент',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
    ]
    return (
        <>
            <Tabs />
            <div className={s.days}>
                {
                    days.map((day: Day) => (
                        <Card key={day.key} day={day} />
                    ))
                }
            </div>
        </>
    )
}
