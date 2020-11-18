import { themeStyle } from '@joplin/lib/theme';
import * as React from 'react';
const ReactToggleButton = require('react-toggle-button');
const Color = require('color');

interface Props {
	value: boolean;
	onToggle: Function;
	themeId: number;
}

export default function(props:Props) {
	const theme = themeStyle(props.themeId);

	return (
		<ReactToggleButton
			value={props.value}
			onToggle={props.onToggle}
			colors={{
				activeThumb: {
				  base: Color(theme.color5).rgb().string(),
				},
				active: {
				  base: Color(theme.backgroundColor5).alpha(0.7).rgb().string(),
				},
			}}
			trackStyle={{
				opacity: props.value ? 1 : 0.5,
			}}
			thumbStyle={{
				opacity: props.value ? 1 : 0.8,
			}}
			inactiveLabel=""
			activeLabel=""
		/>
	);
}