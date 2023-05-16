import styled from 'styled-components';
import {Grid} from 'grommet';
import {Typography, Space, Button, Input} from 'antd';

export const UserGrid = styled(Grid) `
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #2B2B2D;
  padding: 5%;
  margin: 5%;
  position: absolute;
  bottom: 0;
`

export const ChannelSelect = styled(Typography ) `
  font-size: 15px;
  font-weight: bold;
  color: #88888D;
`

export const MenuTab = styled.div`
  position: absolute;
  padding: 5%;
  margin-top: 5%;

  background-color: #2B2B2D;
  margin: 5%;
  min-height: 63%;
  min-width: 90%;

`
export const LogoDiv = styled.div`
  padding-left: 5%;
  padding-top: 5%;
`

export const ServerDiv = styled(Space.Compact)`
  width: 100%;
  padding: 5%;
  padding-bottom: 0%;
  padding-top: 0%;
  align: center;
`

export const ServerButton = styled(Button)`
  type: primary;
  border-radius: 0px;
  background-color: #3A7EFF;
  color: #FFFFFF;
  border: none;
`

export const AliasButton = styled(Button)`
  type: primary;
  border-radius: 0px;
  background-color: #3A7EFF;
  color: #FFFFFF;
  border: none;
`

export const AliasInput = styled(Input)`
  background: #38383A;
  color: #3A7EFF;
  border: none;
  border-radius: 0px;
`


export const ServerInput = styled(Input)`
  background: #2B2B2D;
  color: #88888D;
  border: none;
  border-radius: 0px;
`
