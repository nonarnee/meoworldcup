import Image from 'next/image';

import * as S from './Card.styled';

export default function Card({ player, onPick }) {
    return (
      <S.Card>
          <Image
              src={player.thumbnail}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
          />
          <p>{player.content}</p>
          <button onClick={onPick}>선택</button>
      </S.Card>
    );
}
