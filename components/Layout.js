import styled from 'styled-components'
import ReactDOM from 'react-dom';



export default function Layout({ children }) {
    return (
        <Main >
            {children}
            <BottomBarContainer>
            <LeftBottomContainer>
            <StartButton></StartButton>
            <ProgramButton></ProgramButton>
            </LeftBottomContainer>
            <TimeBar></TimeBar>
            </BottomBarContainer>
        </Main>
    )
}

const Main = styled.main`
  height: 100vh;
  overflow: hidden;
  background-size: 100%;
  background-position: -50vh 10%;
  background-attachment: fixed;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    background-size: 250%;
    background-position: -50vh 30vh;
   }
`;

const BottomBarContainer = styled.div`
   width: 100%;
   position: absolute;
   bottom: 0;
   left: 0;
   height 30px;
   background: blue;
`

const StartButton = styled.div`
`

const ProgramButton = styled.div`
`

const TimeBar = styled.div`
`

const LeftBottomContainer = styled.div`
`
