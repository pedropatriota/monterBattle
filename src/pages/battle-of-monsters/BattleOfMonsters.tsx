import { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { Title } from '../../components/title/Title';
import {
  fetchMonstersData,
  fetchMonsterWinner,
} from '../../reducers/monsters/monsters.actions';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  selectMonsters,
  selectSelectedMonster,
  selectMonsterWinner,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.styled';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const getWinner = useSelector(selectMonsterWinner);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, [dispatch]);

  const handleSelectComputerMonster = useCallback((): Monster | undefined => {
    if (selectedMonster) {
      const randomMonster = Math.floor(Math.random() * (monsters.length - 1));
      if (monsters[randomMonster].id === selectedMonster.id) {
        return handleSelectComputerMonster();
      }
      return monsters[randomMonster];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonster]);

  const handleStartBattleClick = useCallback(() => {    
      const data = {
        monster1Id: selectedMonster?.id,
        monster2Id: handleSelectComputerMonster()?.id,
      };

      dispatch(fetchMonsterWinner(data));    
  
  },[dispatch, handleSelectComputerMonster, selectedMonster?.id]);

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />

      {getWinner?.winner?.name && <WinnerDisplay text={getWinner.winner.name} />}

      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}
        />

        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title="Computer"
          monster={handleSelectComputerMonster()}
        />
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
