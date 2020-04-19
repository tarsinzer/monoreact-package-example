import React from 'react';
import { Box, CheckBox, Meter } from 'grommet';

export const renderColumnPercent = (datum: Product.Progress) => (
  <Box pad={{ vertical: 'small' }}>
    <Meter size='small' thickness='small' values={[{ value: datum.percent }]} />
  </Box>
);

export const renderColumnCheck = (
  checked: string[],
  onCheck: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void
) => (datum: Product.Progress) => (
  <CheckBox
    key={datum.name}
    checked={checked.includes(datum.name)}
    // eslint-disable-next-line react/jsx-no-bind
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      onCheck(e, datum.name)
    }
  />
);
