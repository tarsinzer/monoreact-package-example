import React from 'react';
import { Box, Grommet, grommet, List } from 'grommet';

import { progress } from '../../shared/data';
import styles from './ProductsList.scss';

export const ProductsList: React.FC = () => (
    <Grommet className={styles.container} theme={grommet}>
      <Box align='center' className={styles.list} pad='medium'>
        <List
          data={progress}
          primaryKey={React.useCallback(
            (item: Product.Progress): React.ReactElement => (
              <span>{item.name}</span>
            ),
            []
          )}
          secondaryKey={React.useCallback(
            (item: Product.Progress): React.ReactElement => (
              <span>{`${item.percent}%`}</span>
            ),
            []
          )}
        />
      </Box>
    </Grommet>
);
