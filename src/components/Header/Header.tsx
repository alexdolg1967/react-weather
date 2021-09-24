import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import s from './Header.module.scss'
import Select from 'react-select'

interface Props {

}

const options = [
    { value: 'city-1', label: 'Урюпинск' },
    { value: 'city-2', label: 'Брянск' },
    { value: 'city-3', label: 'Воркута' }
]

const colourStyles = {
    control: (styles: any) => ({
        ...styles,
        background: 'rgba(71, 147, 255, 0.2)',
        width: '140px',
        height: '37px',
        border: 'none',
        borderRadius: '10px'
    })
}

export const Header = (props: Props) => {
    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo" />
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                <Select
                    defaultValue={options[0]}
                    styles={colourStyles}
                    options={options}
                />
            </div>
        </div>
    )
}
