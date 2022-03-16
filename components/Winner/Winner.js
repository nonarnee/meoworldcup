import Image from 'next/image';
import * as S from './Winner.styled';

export default function Winner({ winner }) {
    return (
        <S.Winner>
            <h2>🎉 우승자가 탄생했어요! 🎉</h2>
            <div>
                <Image
                    src={winner.thumbnail}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                />
                <p>{winner.content}</p>
            </div>
        </S.Winner>
    );
}
