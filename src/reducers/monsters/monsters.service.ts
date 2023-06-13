import { API_URL } from '../../constants/env';
import { Monster, WinnerBody, MonsterWinner } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

  const getWinner = async (data: WinnerBody): Promise<MonsterWinner> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());

export const MonsterService = {
  getAll, getWinner
};
