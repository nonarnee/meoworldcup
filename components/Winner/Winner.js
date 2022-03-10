import * as S from './Winner.styled';

export default function Winner({ winner }) {
    return (
        <S.Winner>
            <h2>우승자가 탄생했어요!</h2>
            <img src={winner.thumbnail} />
            <div>{winner.content}</div>
        </S.Winner>
    );
}
