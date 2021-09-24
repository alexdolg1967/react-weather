import React from 'react'
import s from './Days.module.scss'

interface Props {

}

export const Tabs = (props: Props) => {
    const tabs = [
        {
            key: 1,
            value: 'На неделю'
        },
        {
            key: 2,
            value: 'На 10 дней'
        },
        {
            key: 3,
            value: 'На месяц'
        },
    ]
    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {
                    tabs.map((tab) => (
                        <div key={tab.key} className={s.tab}>
                            {tab.value}
                        </div>
                    ))
                }
            </div>
            <div className={s.cansel}>Отменить</div>
        </div>
    )
}
