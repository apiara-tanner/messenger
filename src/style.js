import styled from 'styled-components';
import {Header, Button, Card, Box, Text, Grommet, Heading, TextArea, Grid} from 'grommet';
import {Typography} from 'antd';

export const UserGrid = styled(Grid) `
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #2B2B2D;
  padding: 5%;
  margin: 5%;

`


export const ChannelSelect = styled(Typography ) `
  font-size: 15px;
  font-weight: bold;
  color: #88888D;
`

export const MenuTab = styled.div`
  padding: 5%;
  background-color: #2B2B2D;
  margin: 5%;
`
