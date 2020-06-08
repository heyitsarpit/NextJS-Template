import styled from '@emotion/styled';

import Meta from './Meta';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Page: React.FC = ({ children }) => {
    return (
        <>
            <Meta />
            <Container>{children}</Container>
        </>
    );
};

export default Page;
