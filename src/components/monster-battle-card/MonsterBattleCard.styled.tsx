import styled from '@emotion/styled';
import {
  Card,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: '13px 11px',
  width: 'calc(307px - 22px)',
  height: '415px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'auto',
  flexDirection: 'column',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'flex-start',
}));

export const BattleMonsterTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'hasMonster',
})<{ hasMonster?: boolean }>(({ hasMonster }) => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: hasMonster ? '22px' : '36px',
  lineHeight: hasMonster ? '26px' : '42px',
  color: colors.black,
  margin: '14px 0 5px',
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 15,
  marginBottom: 11,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
}));

export const BattleMonsterImg = styled.img(() => ({
  width: '100%',
  maxWidth: 283,
  height: 178,
  borderRadius: 7,
}));

export const ContainerMonsterStats = styled.div(() => ({
  width: '100%',
  padding: '14px calc(29 - 11)px',
  borderTop: `1px solid ${colors.lightGray})`,
}));

export const BattleMonsterStats = styled.p(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '14px',
  color: colors.black,
  marginBottom: '5px',
}));
