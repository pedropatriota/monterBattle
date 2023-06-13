import {
  AsyncThunkPayloadCreator,
  createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { Monster, WinnerBody, MonsterWinner } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const fetchMonsterWinner = createAsyncThunk<MonsterWinner, WinnerBody>(
  'monster/setMonsterWinner',
  (data) => MonsterService.getWinner(data),
);
