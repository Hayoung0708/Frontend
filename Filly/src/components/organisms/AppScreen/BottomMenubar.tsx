import { type FC } from 'react';
import { useActivity } from '@stackflow/react';
import { Box, Grid, Stack } from '@mui/material';
import { useFlow } from '../../../stackflow';
import { Icon } from '../../atoms/Icon';
import { Text } from '../../atoms/Text';

interface Props {
    writeButton?: boolean;
}

const style = {
    container: {
        width: 1,
        height: '60px',
        position: 'sticky',
        bottom: '0',
        backgroundColor: 'blue',
    },

    button: {
        color: 'gray',
        '& .MuiBottomNavigationAction-label': {
            fontSize: '0.7rem',
        },
    },
};

export const BottomMenubar: FC<Props> = () => {
    const activity = useActivity();
    const { replace } = useFlow();

    const handleClick = (iconName: 'Main' | 'MyPage') => {
        replace(iconName, {}, { animate: false });
    };

    return (
        <Box sx={style.container}>
            <Grid container textAlign="center" pt={1}>
                <Grid item xs={6} onClick={() => handleClick('Main')}>
                    <Stack alignItems="center">
                        <Icon gray src={activity.name === 'Main' ? '/icons/Home2.png' : '/icons/Home.png'} />
                        <Text type="smallGray">홈</Text>
                    </Stack>
                </Grid>
                <Grid item xs={6} onClick={() => handleClick('MyPage')}>
                    <Stack alignItems="center">
                        <Icon
                            gray
                            src={activity.name === 'Kategorie' ? '/icons/Kategorie2.png' : '/icons/Kategorie.png'}
                        />
                        <Text type="smallGray">카테고리</Text>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BottomMenubar;