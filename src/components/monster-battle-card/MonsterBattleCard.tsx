import { BattleMonsterCard, BattleMonsterTitle } from "./MonsterBattleCard.styled"

type MonsterCardProps = {
    title: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title }) => {
    return (
        <BattleMonsterCard>
            <BattleMonsterTitle>{title}</BattleMonsterTitle>
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }