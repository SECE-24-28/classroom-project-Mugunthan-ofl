import styled from "styled-components";
export const ImpactGlanceStyle = styled.div`

.total_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    justify-content: center;
    align-items: center;
}

.impactaglance {
    text-align: center;
    padding: 20px;
    grid-column: span 2;
    font-family: "Inter", sans-serif;
}

.glance {
    color: red;
}

.colleges,
.students,
.studeymaterials,
.professionaltrainers {
    width: 500px;          
    height: 100px;         
    background: #ffe1e7;
    border-radius: 20px;
    padding: 30px;
    margin-left: 60px;
    font-family: "Inter", sans-serif;
    color: grey;
    position: relative;
}

.students,
.studeymaterials {
    background: #e6f0fa;
}

.professionaltrainers {
    background: #ffe1e7;
}

/* IMAGE POSITION – EXACT LIKE FIRST SCREENSHOT */
.colleges img,
.students img,
.studeymaterials img,
.professionaltrainers img {
    width: 130px;
    height: 130px;
    position: absolute;
    right: 40px;
    bottom: 25px;
}

/* TEXT */
.colleges h3,
.students h3,
.studeymaterials h3,
.professionaltrainers h3 {
    font-weight: 500;
    margin-bottom: 10px;
}

.colleges h2,
.students h2,
.studeymaterials h2,
.professionaltrainers h2 {
    color: black;
    font-size: 32px;
    font-weight: 700;
}

`;
