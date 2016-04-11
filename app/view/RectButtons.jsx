import React from 'react';
import Paper from '../base/Paper';
import Content from '../base/Content';
import ButtonChangeX from '../container/ButtonChangeX';

export default ({
    color,
    changeColor
}) => (
    <Paper title = 'Axis'>
        <Content title = 'color:'>
          <ButtonChangeX/>
        </Content>
    </Paper>
)
