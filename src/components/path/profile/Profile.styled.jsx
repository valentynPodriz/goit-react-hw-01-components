
import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 300px;
  padding-top: 20px;
  border-radius: 20px;
  background-color: #E6E6FA;
  margin-bottom: 50px;
`;


export const Description = styled.div`
  width: 150px;
  margin-right: auto;
  margin-left: auto;
  font-size: 14px;
`;

export const Avatar = styled.img`
  display: inline-block;
  border-radius: 50%;
  width: 150px;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  text-align: center;
  color: black;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  `;

export const Info = styled.p`
  text-align: center;
  color: #708090;
  margin-bottom: 10px;
`;
export const Stats = styled.ul`
  display: flex;
  font-size: 14px;
  width: 100%;
  height: 100%;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #D3D3D3;
  padding: 15px;
  align-items: center;
  gap: 5px;
  color: black;
  border: 1px solid #A9A9A9;
  font-weight: 500;
`;
export const Label = styled.span`
  color: #708090;
  font-size: 14px;
  font-weight: 400;
`;