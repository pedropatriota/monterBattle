import { useCallback, memo } from 'react';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterImg,
  BattleMonsterTitle,
  ContainerMonsterStats,
  ProgressBar,
  BattleMonsterStats
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = memo(({ title, monster }) => {
  
   const renderMonsterStats = useCallback((stat: string, value: number) => {
    return (
      <ContainerMonsterStats>
        <BattleMonsterStats>{stat}</BattleMonsterStats>
        <ProgressBar value={value} variant="determinate" />
      </ContainerMonsterStats>
    );
  }, []);

  return (
    <BattleMonsterCard centralized={!monster?.id}>
      {monster?.id && (
        <BattleMonsterImg src={monster?.imageUrl} alt={monster?.name} />
      )}
      <BattleMonsterTitle hasMonster={!!monster?.id}>
        {title!}
      </BattleMonsterTitle>
      {monster?.id && (
        <div>
          {renderMonsterStats('HP', monster.hp)}
          {renderMonsterStats('Attack', monster.attack)}
          {renderMonsterStats('Defense', monster.defense)}
          {renderMonsterStats('Speed', monster.speed)}
        </div>
      )}
    </BattleMonsterCard>
  );
});

export { MonsterBattleCard };
