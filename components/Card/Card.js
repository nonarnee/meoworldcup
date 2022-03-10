import Image from 'next/image';

import * as S from './Card.styled';

export default function Card({ player, onPick }) {
    return (
      <S.Card>
          <Image
              src={player.thumbnail}
              width={300}
              height={200}
              placeholder="blur"
              blurDataURL="/loading.gif"
          />
          <p>{player.content}</p>
          <button onClick={onPick}>선택</button>
      </S.Card>
    );
}
