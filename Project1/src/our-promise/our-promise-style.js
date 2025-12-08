import styled from 'styled-components';
export const OurPromiseStyle = styled.div`

.total_component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.ourpromise h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
}

.ourpromise h5 {
    font-size: 16px;
    color: #636363;
    font-weight: 400;
}

.grid {
    width: 85%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    margin-top: 60px;
}

/* ----------- BOX DESIGN ----------- */
.grid > div {
    padding: 20px 10px;
    border-top: 4px solid;
    border-radius: 5px;
}

/* Colors for each top border */
.topcodequality { border-color: #57C3C2; }
.responsive { border-color: #F4B731; }
.Rockstarteam { border-color: #38A1DB; }
.fastTurn { border-color: #A16EFF; }
.lifetimesupport { border-color: #E04355; }
.securedagreement { border-color: #3AB54A; }

/* ----------- ICONS ----------- */
.grid svg {
    font-size: 35px;
    margin-bottom: 15px;
}

/* Icon colors matching border colors */
.topcodequality svg { color: #57C3C2; }
.responsive svg { color: #F4B731; }
.Rockstarteam svg { color: #38A1DB; }
.fastTurn svg { color: #A16EFF; }
.lifetimesupport svg { color: #E04355; }
.securedagreement svg { color: #3AB54A; }

/* Heading inside cards */
.grid h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}

/* H4 colors matching border colors */
.topcodequality h4 { color: #57C3C2; }
.responsive h4 { color: #F4B731; }
.Rockstarteam h4 { color: #38A1DB; }
.fastTurn h4 { color: #A16EFF; }
.lifetimesupport h4 { color: #E04355; }
.securedagreement h4 { color: #3AB54A; }

/* Paragraph inside cards */
.grid h5 {
    font-size: 15px;
    color: #777;
    font-weight: 400;
    line-height: 23px;
}
`;



