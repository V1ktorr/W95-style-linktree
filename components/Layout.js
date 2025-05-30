import styled from 'styled-components'
import ReactDOM from 'react-dom';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Layout({ children }) {
    const [time, setTime] = useState(new Date());
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('cs-CZ', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Europe/Prague'
        });
    };

    return (
        <Main>
            {children}
            <BottomBarContainer>
                <LeftBottomContainer>
                    <StartButton>
                        <img src="/WINDOWS.svg" alt="Start" />
                        <span>Start</span>
                    </StartButton>
                    <Divider />
                    <RunningApps>
                        <AppButton>
                            <img src="/BOOK.svg" alt="App" />
                            <span>porokhcreative.space</span>
                        </AppButton>
                    </RunningApps>
                </LeftBottomContainer>
                <TimeBar>
                    <ThemeToggle onClick={toggleDarkMode}>
                        <img src={isDarkMode ? "/SUN.svg" : "/MOON.svg"} alt="Theme" />
                    </ThemeToggle>
                    <img src="/SOUND.svg" alt="Speaker" />
                    <time>{formatTime(time)}</time>
                </TimeBar>
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
   height: 40px;
   background: ${({ theme }) => theme.win95.colors.barGrey};
   border-top: 2px solid var(--ms-border-light);
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2px 4px;

   @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       height: 32px;
       padding: 2px;
   }
`

const LeftBottomContainer = styled.div`
   display: flex;
   align-items: center;
   height: 100%;
   gap: 2px;
`

const StartButton = styled.button`
   height: 34px;
   padding: 0 8px;
   margin: auto 0;
   display: flex;
   align-items: center;
   gap: 4px;
   border: none;
   background: ${({ theme }) => theme.win95.colors.barGrey};
   box-shadow: inset -1px -1px var(--ms-gray-shadow), inset 1px 1px var(--ms-border-light), 
               inset -2px -2px var(--ms-gray-shadow), inset 2px 2px var(--ms-border-light);
   cursor: pointer;

   @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       height: 28px;
       padding: 0 6px;
       
       img {
           height: 20px;
           width: 20px;
       }
       
       span {
           font-size: 12px;
       }
   }

   &:active {
     box-shadow: inset -1px -1px var(--ms-border-light), inset 1px 1px var(--ms-gray-shadow),
     inset -2px -2px var(--ms-border-light), inset 2px 2px var(--ms-gray-shadow);
   }

   img {
     height: 28px;
     width: 28px;
   }

   span {
     font-family: 'W95FA', sans-serif;
     font-size: 14px;
     color: ${({ theme }) => theme.text.primary};
   }
`

const Divider = styled.div`
   width: 1px;
   height: 34px;
   background: var(--ms-gray-shadow);
   border-right: 1px solid var(--ms-border-light);
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       height: 20px;
   }
`

const RunningApps = styled.div`
   display: flex;
   height: 100%;
   gap: 2px;
`

const AppButton = styled.button`
   height: 34px;
   padding: 0 12px;
   margin: auto 0;
   display: flex;
   align-items: center;
   gap: 4px;
   border: none;
   background: ${({ theme }) => theme.win95.colors.barGrey};
   box-shadow: inset -1px -1px var(--ms-border-light), inset 1px 1px var(--ms-gray-shadow),
   inset -2px -2px var(--ms-border-light), inset 2px 2px var(--ms-gray-shadow);
   cursor: pointer;

   @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       height: 28px;
       padding: 0 8px;
       
       img {
           height: 20px;
           width: 20px;
       }
       
       span {
           font-size: 12px;
       }
   }

   img {
     height: 28px;
     width: 28px;
   }

   span {
     font-family: 'W95FA', sans-serif;
     font-size: 14px;
     color: ${({ theme }) => theme.text.primary};
   }
`

const TimeBar = styled.div`
   height: 34px;
   padding: 0 8px;
   display: flex;
   align-items: center;
   gap: 4px;
   border: 1px solid var(--ms-gray-shadow);
   border-right: 1px solid var(--ms-border-light);
   border-bottom: 1px solid var(--ms-border-light);
   background: ${({ theme }) => theme.win95.colors.barGrey};

   @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       height: 28px;
       padding: 0 6px;
       
       img {
           height: 20px;
           width: 20px;
       }
       
       time {
           font-size: 12px;
       }
   }

   img {
     height: 28px;
     width: 28px;
   }

   time {
     font-family: 'W95FA', sans-serif;
     font-size: 14px;
     color: ${({ theme }) => theme.text.primary};
   }
`

const ThemeToggle = styled.button`
   height: 28px;
   width: 28px;
   display: flex;
   align-items: center;
   justify-content: center;
   background: ${({ theme }) => theme.win95.colors.barGrey};
   border: none;
   box-shadow: inset -1px -1px var(--ms-gray-shadow), inset 1px 1px var(--ms-border-light), 
               inset -2px -2px var(--ms-gray-shadow), inset 2px 2px var(--ms-border-light);
   cursor: pointer;
   margin-right: 4px;
   
   &:active {
     box-shadow: inset -1px -1px var(--ms-border-light), inset 1px 1px var(--ms-gray-shadow),
     inset -2px -2px var(--ms-border-light), inset 2px 2px var(--ms-gray-shadow);
   }
   
   img {
     height: 20px;
     width: 20px;
   }
   
   @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       height: 24px;
       width: 24px;
       
       img {
           height: 16px;
           width: 16px;
       }
   }
`