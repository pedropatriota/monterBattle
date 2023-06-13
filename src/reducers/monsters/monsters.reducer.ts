import { createReducer } from '@reduxjs/toolkit';
import { Monster, MonsterWinner } from '../../models/interfaces/monster.interface';
import { fetchMonstersData, setSelectedMonster, fetchMonsterWinner } from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  winner: MonsterWinner | null
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  winner: null
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  // winner
  builder.addCase(fetchMonsterWinner.pending, (state) => ({
    ...state,
    winner: null,
  }));

  builder.addCase(fetchMonsterWinner.rejected, (state) => ({
    ...state,
    winner: null,
  }));

  builder.addCase(fetchMonsterWinner.fulfilled, (state, action) => ({
    ...state,
    winner: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));
});
