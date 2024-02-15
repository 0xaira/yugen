import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';

const PriceSlider = () => {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const valueLabelFormat = (value) => {
        return `${value * 1000}`;
    };

    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <Slider
                    aria-label="Price range"
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={60}
                    valueLabelFormat={valueLabelFormat}
                    components={{
                        ValueLabel: CustomValueLabel,
                    }}
                />
            </Stack>
        </Box>
    );
};

const CustomValueLabel = ({ children, open, value }) => {
    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
};

export default PriceSlider;
