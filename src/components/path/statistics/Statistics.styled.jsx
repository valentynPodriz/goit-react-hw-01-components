import styled from '@emotion/styled'

export const StatisticsSection = styled.section`
  margin-right: auto;
  margin-left: auto;
  width: 300px;
  background-color: rgba(255, 255, 255);
  padding-top: 30px;
`;

export const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const StatListItem = styled.li`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  &:nth-of-type(2n) {
    background-color: #baacc7;
  }
  &:nth-of-type(2n + 1) {
    background-color: #c6df90;
  }
`;
export const Label = styled.span`
  font-size: 20px;
  font-weight: 500;
`;