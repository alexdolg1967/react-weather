import React, { useEffect, useState } from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import s from './Header.module.scss'
import Select from 'react-select'
import { useTheme } from '../../hooks/useTheme'

interface Props {

}


export const Header = (props: Props) => {

	const theme = useTheme();

	const options = [
		{ value: 'city-1', label: 'Урюпинск' },
		{ value: 'city-2', label: 'Брянск' },
		{ value: 'city-3', label: 'Воркута' }
	]

	const colourStyles = {
		control: (styles: any) => ({
			...styles,
			background: theme.theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
			width: '140px',
			height: '37px',
			border: 'none',
			borderRadius: '10px'
		}),
		singleValue: (styles: any) => ({
			...styles,
			color: theme.theme === 'dark' ? '#fff' : '#000'
		})
	}

	function changeTheme() {
		theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light')
	}


    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo" />
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
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
