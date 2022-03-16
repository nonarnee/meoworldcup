import {useEffect, useRef, useState} from "react";

import Winner from "../Winner";
import Card from "../Card";
import * as S from './Tournament.styled'

export default function Tournament({ data }) {
    const [players, setPlayers] = useState(data);
    const fighters = players.filter(player => player.status === 'wait').slice(0, 2);
    const round = useRef(1);
    const step = useRef(data.length);
    const stepName = {
        16: 'Round of 16',
        8: 'Quarterfinals',
        4: 'Semifinals',
        2: 'Final',
    }

    useEffect(() => {
      if (fighters.length === 0) {
        setPlayers(
          players.map((player) => {
            if (player.status === 'pick') {
              return ({
                ...player,
                status: 'wait',
              });
            }

            return player;
          })
        );

        step.current = step.current / 2;
        round.current = 1;
      }
    }, [players, fighters.length]);

    const onPick = (pickedId, bannedId) => {
        setPlayers(players.map((player) => {
            if (pickedId === player.id) {
                return ({
                    ...player,
                    status: 'pick',
                });
            } else if (bannedId === player.id) {
                return ({
                    ...player,
                    status: 'ban',
                });
            } else {
                return player;
            }
        }));

        round.current = round.current += 1;
    }

    if (fighters.length === 1) {
      return <Winner winner={fighters[0]} />;
    }

    return (
      <S.Tournament>
        <h2>{stepName[step.current]}
          {step.current !== 2 && (
            <span> - Game {round.current}</span>
          )}
        </h2>
        <S.Content>
          {fighters.length > 0 && (
            <>
              <Card
                player={fighters[0]}
                onPick={() => onPick(fighters[0].id, fighters[1].id)}
              />
              <Card
                player={fighters[1]}
                onPick={() => onPick(fighters[1].id, fighters[0].id)}
              />
            </>
          )}
        </S.Content>
      </S.Tournament>
    );
}
