import styled from 'styled-components';

export const StyledAvatarGroup = styled.div`
    width: 100%;
    display: grid;
    row-gap: 1rem;
    margin-top: 2.2rem;
    grid-template-columns: repeat(6, 1fr);

    .ctn-avatar {
        width: 60%;
        margin: auto;
        cursor: pointer;
        border-radius: 32px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 100%;
        }
    }
`;