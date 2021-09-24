import React from 'react'
import s from './Days.module.scss'
import Card from './Card'

interface Props {}

export interface Day{
	day_name: 'Сегодня',
	day_info: string,
	icon_id: string,
	temp_day: string,
	temp_night: string,
	info: string,
}

export const Days = (props: Props) => {
	const days : Day = [
		{
			day_name: 'Сегодня',
			day_info: '28 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_hight: '+15',
			info: 'Облачно',
		},
		{
			day_name: 'Завтра',
			day_info: '29 авг',
			icon_id: 'small_rain_sun',
			temp_day: '+18',
			temp_hight: '+15',
			info: 'небольшой дождь и солнце',
		},
		{
			day_name: 'Среда',
			day_info: '30 авг',
			icon_id: 'small_rain',
			temp_day: '+18',
			temp_hight: '+15',
			info: 'небольшой дождь',
		},
		{
			day_name: 'Четверг',
			day_info: '1 сент',
			icon_id: 'mainly_cloudy',
			temp_day: '+18',
			temp_hight: '+15',
			info: 'Облачно',
		},
		{
			day: 'Пятница',
			day_info: '2 сент',
			icon_id: 'sun',
			temp_day: '+18',
			temp_hight: '+15',
			info: 'Облачно',
		},
		{
			day_name: 'Суббота',
			day_info: '3 сент',
			icon_id: 'sun',
			temp_day: '+18',
			temp_hight: '+15',
			info: 'Облачно',
		},
	]
	return (
		<div className={s.days}>
			{
				days.map((day: Day) => <Card day={day}/>)
			}
		</div>
	)
}
