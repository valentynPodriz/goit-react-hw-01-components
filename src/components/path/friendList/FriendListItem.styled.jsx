import styled from '@emotion/styled'
export const FriendItem = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 10px;
  background-color: rgba(255, 255, 255);
  box-shadow: 10px 5px 5px #7B68EE;
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Status = styled.span`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  
  background: ${props => props.status ? 'green' : 'red'};
`;
