import Link from 'next/link';
import Image from 'next/image';

import * as S from './PageWrapper.styled';

export default function PageWrapper({ children }) {
    return (
        <S.Container>
            <S.GlobalNavigation>
                <Link href="/">
                    <S.NavButton>
                        <Image src="/cat.svg" width={25} height={25} />
                        <span>MeoWorldcup</span>
                    </S.NavButton>
                </Link>
            </S.GlobalNavigation>
            <S.Main>
                {children}
            </S.Main>
        </S.Container>
    )
}
