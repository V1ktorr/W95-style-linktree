import Image from "next/image";
import styled from "styled-components";
import { Button, ButtonLink, Container, StyledLink } from "./ReusableStyles";
import Link from "next/link";
import { ChevronRightIcon, HexIcon, HomeIcon, TwitterIcon, OvalIcon } from './icons';
import allLinks from "../data/LinksData";
import bioData from "../data/BioData";



const Links = () => {

  // all user info from bioData
  const name = bioData[0].name;
  const url = bioData[0].url;
  const username = bioData[0].username;
  const titleImg = bioData[0].titleImg;
  const avatarImg = bioData[0].avatar;
  const description = bioData[0].description;
  const descShow = bioData[0].descShow;
  const subdesc = bioData[0].subdesc;
  const subdescShow = bioData[0].subdescShow;
  const footerText = bioData[0].footerText;
  const author = bioData[0].author;
  const authorURL = bioData[0].authorURL;
  const titleImage = "/title.svg";

  // Check what class to use oval or hex for avatar
  const avatarShape = bioData[0].nftAvatar ? `nft-clipped` : `oval-clipped`


  // Description and subdescription goes here
  const descriptionText = descShow ? description : ``
  const subdescText = subdescShow ? subdesc : ``


  const newProduct = bioData[0].newProduct; // checking for newProduct flag true false
  const newProductUrl = bioData[0].newProductUrl; // get product url if available



  // Collect all links filter by type - social, project, nft and other etc=
  // get data for social section
  const social = allLinks.filter((el) => {
    return el.type === "social" && el.on
  });

  // Get data for install section
  const install = allLinks.filter((el) => {
    return el.type === "install" && el.on
  });

  // Get data for other section
  const others = allLinks.filter((el) => {
    return el.type === "other" && el.on
  });

  return (
      <LinkWrapper>
        <LinkContainer>
        <TopBarContainer>
        <div className="left-container">
        <img className='windowIcon' src={'/P-solo.svg'} />
          <h3>porokhcreative.space</h3>
        </div>
        <div className="right-container">
       <div className="utilityContainer"> <img className='windowIcon' src={'/minimize.svg'} /></div>
       <div className="utilityContainer"><img className='windowIcon' src={'/maximize.svg'} /></div>
       <div className="utilityContainer"><img className='windowIcon' src={'/cross.svg'} /></div>
        </div>
        </TopBarContainer>
        <ScrollableContainer>
          <TopPart>
            <LinkHeader>
              <Avatar>
                <AvatarWrap>
                  {/* Avatar svg  hex or oval if nftAvatar=true will convert to hex */}
                  <HexIcon />
                  <OvalIcon />
                  <img
                      src={avatarImg}
                      className={avatarShape}
                  />
                </AvatarWrap>
              </Avatar>
              <Title>
                {/* Using titleimg flag to use image as title or text */}
                {titleImg ?
                    <img src={titleImage} className="handle" /> :
                    <h1>{name}</h1>
                }
                {/* if your remove username from data it will not appear */}
                {
                  username ? <h3><a href={`${url}`}>{username}</a></h3> : ''
                }
              </Title>
            </LinkHeader>

            {/* Bio Section */}
            <LinkBio>
              {description && <h1>{descriptionText} </h1>}
              {subdesc && <h4>{subdescText}</h4>}
            </LinkBio>
            {/* End Bio Section */}

            {/* Weblinks started */}
            <WebLinkWrap>
              {/* Social Icon */}
              <LinkSection className="social">
                <div className="iconsonly">
                  {
                    social.map((i) => {
                      return (
                          <a href={i.url} key={i.title} target="_blank" rel="noreferrer">
                            <LinkBox className="socialIcon">
                              <img src={i.icon} />
                            </LinkBox>
                          </a>
                      )
                    })
                  }
                </div>
              </LinkSection>
              {/* Social Icon */}

              {/* Install Section */}
              {
                install.length > 0 ?
                    <LinkSection>
                      <h3>{install[0].type}</h3>
                      {
                        install.map((i) => {
                          return (
                              <a href={i.url} key={i.title} target="_blank" rel="noreferrer">
                                <LinkBox>
                                  <LinkTitle>
                                    <img src={i.icon} />
                                    <span>{i.title}</span>
                                  </LinkTitle>
                                  <img src="/ARROW_WIN.png" style={{ width: "20px", height: "20px" }} />
                                </LinkBox>
                              </a>
                          )
                        })
                      }
                    </LinkSection> : ''
              }
              {/* End Install Section */}

              {/* Other Section */}
              {
                others.length > 0 ?
                    <LinkSection>
                      <h3>{others[0].type}</h3>
                      {/* BioData.js > newProduct == true */}
                      {/* New Section will render once newProduct == true */}
                      {(newProduct) ? <NewSection>
                        <div className="windowBar">
                          <div className="left-container">
                            <img className='windowIcon' src={'/FIGMA.svg'} />
                            <h3>banner.exe</h3>
                          </div>
                          <div className="right-container">
                            <div className="utilityContainer">
                              <img className='windowIcon' src={'/minimize.svg'} />
                            </div>
                            <div className="utilityContainer">
                              <img className='windowIcon' src={'/maximize.svg'} />
                            </div>
                            <div className="utilityContainer">
                              <img className='windowIcon' src={'/cross.svg'} />
                            </div>
                          </div>
                        </div>
                        <div className="content-wrapper">
                          <a href={newProductUrl} target="_blank" rel="noreferrer">
                            <img
                              src={'/newproduct.png'}
                              className="newproduct"
                            />
                          </a>
                        </div>
                      </NewSection> : ''}
                      {/* End Biodata.js, You can move this section anywhere */}
                      {
                        others.map((i) => {
                          return (
                              <a href={i.url} key={i.title} target="_blank" rel="noreferrer">
                                <LinkBox>
                                  <LinkTitle>
                                    <img src={i.icon} />
                                    <span>{i.title}</span>
                                  </LinkTitle>
                                  <img src="/ARROW_WIN.png" style={{ width: "20px", height: "20px" }} />
                                </LinkBox>
                              </a>
                          )
                        })
                      }
                    </LinkSection> : ''
              }
              {/* End Other Section */}

            </WebLinkWrap>
            {/* End Weblinks */}
          </TopPart>
          <BottomPart>
            <LinkFoot>
              <h4>{footerText} <a href={authorURL}>{author}</a></h4>
            </LinkFoot>
          </BottomPart>
          </ScrollableContainer>
        </LinkContainer>
      </LinkWrapper>
  )
};

export default Links;

const ScrollableContainer = styled.div`
    background: ${({ theme }) => theme.win95.colors.windowBg};
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: scroll;
    overflow-x: hidden;
    padding: 24px;

           @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
           padding: 0px;
    }

    /* Windows 95 scrollbar styling */
    &::-webkit-scrollbar {
        width: 16px;
        background: var(--ms-bar-grey);
    }

    &::-webkit-scrollbar-track {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC');
        background-repeat: repeat;
        box-shadow: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a,
                   inset -2px -2px #dfdfdf, inset 2px 2px #808080;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--ms-bar-grey);
        border: none;
        box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, 
                   inset -2px -2px grey, inset 2px 2px #dfdfdf;
    }

    &::-webkit-scrollbar-button:single-button {
        background-color: var(--ms-bar-grey);
        display: block;
        height: 16px;
        width: 16px;
        box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, 
                   inset -2px -2px grey, inset 2px 2px #dfdfdf;
    }

    /* Up arrow */
    &::-webkit-scrollbar-button:single-button:vertical:decrement {
        background-image: url('/ARROW_WIN_TOP.png');
        background-size: 10px;
        background-repeat: no-repeat;
        background-position: center;
        transform: none;
    }

    /* Down arrow */
    &::-webkit-scrollbar-button:single-button:vertical:increment {
        background-image: url('/ARROW_WIN_BOT.png');
        background-size: 10px;
        background-repeat: no-repeat;
        background-position: center;
        transform: none;
    }
`

const TopBarContainer = styled.div`
  background: ${({ theme }) => theme.win95.colors.blue};
  padding: 3px 3px 3px 6px;
  color: ${({ theme }) => theme.text.onPrimary};
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;

  .windowIcon {
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }

  h3 {
    color: white;
    font-size: 14px;
    text-transform: none;
    line-height: 24px;
  }

  .left-container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .right-container {
    display: flex;
    gap: 2px;
    height: 100%;
    align-items: center;
  }

  .utilityContainer {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--ms-bar-grey);
    box-shadow: inset -1px -1px #0a0a0a, 
                inset 1px 1px #fff, 
                inset -2px -2px grey, 
                inset 2px 2px #dfdfdf;

    img {
      height: 12px;
      width: 12px;
    }
  }
`

const LinkWrapper = styled(Container)`
`

const LinkContainer = styled.div`
    width: 1000px;
    height: 90vh;
    position: absolute;
    left: 50%;
    top: 40px;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.win95.colors.barGrey};
    display: flex;
    flex-direction: column;
    padding: 3px;
    ${({ theme }) => theme.win95.borders.raised};

    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        width: calc(100% - 32px);
        height: calc(100vh - 80px);
        top: 20px;
    }
`

const LinkHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 12px; 
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       margin-top: 20px;
    }
`

const Avatar = styled.div`
    height: 90px;
    width: 90px;
    position: relative;
    margin-bottom: 12px;
`

const AvatarWrap = styled.div`
   height: 100%;
   width: 100%;
   filter: drop-shadow(0px 1px 2px var(--avatar-shadow));
   img{
    height: calc(100% - 6px);
    width: calc(100% - 6px);
   }
   .avatar-border{
        height: 100%;
        width: 100%;
        position: absolute;
        background: ${({ theme }) => theme.bg.primary};
   }
   .avatar-fill{
        height: calc(100% - 6px);
        width: calc(100% - 6px);
        position: absolute;
        background: ${({ theme }) => theme.bg.primary};
   }
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 38px;
      color: ${({ theme }) => theme.text.primary};
      -webkit-background-clip: initial;
      -webkit-text-fill-color: initial;
      background-clip: initial;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 32px;
      }
    }
    h3 {
      margin-top: 6px;
      font-size: 18px;
      color: ${({ theme }) => theme.text.secondary};
      opacity: .5;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 15px;
        margin-top: 2px;
      }
      
      a {
        color: ${({ theme }) => theme.text.secondary};
        text-decoration: none;
      }
    }
`

const LinkBio = styled.div`
    display: flex;
    flex-direction: column;
    h1{
      font-size: 22px;
      line-height: 30px;
      font-weight: 500;
      letter-spacing: -0.6px;
      padding: 0 20px;
      color: ${({ theme }) => theme.text.primary};
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 18px;
        line-height: 26px;
        padding: 0 8px;
      }
      vertical-align: middle;
      span{
        font-size: 12px;
        vertical-align: bottom;
        line-height: 30px;
        color: ${({ theme }) => theme.text.secondary};
        margin: 0 2px;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          font-size: 10px;
          line-height: 20px;
        }
      }
    }
    h4{
      font-size: 18px;
      letter-spacing: -.5px;
      margin: 10px 0;
      color: ${({ theme }) => theme.text.secondary};
      font-weight: 500;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          font-size: 15px;
          padding: 0 20px;
          line-height: 24px;
        }
      a{
         font-weight: 700;
         opacity: .7;
         color: ${({ theme }) => theme.text.secondary};
         &:hover{
          opacity: 1;
         }
      }
    }
`

const TopPart = styled.div`
`
const BottomPart = styled.div`
    margin-bottom: 40px;
    
`

const LinkFoot = styled.div`
    h4{
      color: ${({ theme }) => theme.text.secondary};
      line-height: 32px;
      letter-spacing: -.2px;
      font-size: 16px;
      font-weight: 500;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 12px;
      }
      span{
        font-size: 10px;
        vertical-align: bottom;
        line-height: 32px;
        margin: 0 2px;
        opacity: .6;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          font-size: 8px;
        }
      }
      a {
        color: ${({ theme }) => theme.text.secondary};
        font-weight: 700;
        opacity: .7;
        &:hover{
          opacity: 1;
        }
      }
    }
`

const WebLinkWrap = styled.div`
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       padding: 0 12px;
    }
`

const LinkSection = styled.div`
    padding: 12px 0;
    display: flex;
    margin: 0 auto;
    max-width: 400px;
    flex-direction: column;
    &.social {
      max-width: max-content;
      padding: 0;
      margin-bottom: 18px;
    }
    .iconsonly {
      display: flex;
      justify-content: center;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        flex-wrap: wrap;
      }
    }
    h3 {
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 4px;
      color: ${({ theme }) => theme.text.secondary};
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 11px;
      }
    }
`

const LinkBox = styled.div`
    padding: 18px 20px;
    background: ${({ theme }) => theme.bg.secondary};
    color: ${({ theme }) => theme.text.primary};
    margin: 8px 18px;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px var(--ms-border-light), inset -2px -2px grey, inset 2px 2px #dfdfdf;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 16px;
    position: relative;
    text-align: center;

    &:active {
      box-shadow: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a,
      inset -2px -2px #dfdfdf, inset 2px 2px #808080;
      
    }
        &:hover{
    outline: 2px dotted #000000;
    outline-offset: -7px;
    }
    &::before{
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      inset: -2px;
      opacity: 0;
      transform: scale(0.8);
    }

    .new-up {
      width: 20px;
      height: 20px;
    }
    
    &.socialIcon{
      padding: 16px;
      border-radius: 50%;
      border: none;
      margin: 4px;
      img{
        height: 24px;
      }
     
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        padding: 10px;
        margin: 2px;
        img{
          height: 20px;
        }
      }
    }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      padding: 12px 16px;
      font-size: 16px;
    }
`
const LinkTitle = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
  color: ${({ theme }) => theme.text.primary};
  
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    font-size: 14px;
  }
  img {
    height: 20px;
    margin-right: 10px;
  }
  
  span::first-letter {
    text-decoration: underline;
  }
`

const NewSection = styled.div`
  margin: 20px;
  padding: 3px;
  aspect-ratio: 1/1;
  background: ${({ theme }) => theme.win95.colors.barGrey};
  /* Vnější okraj okna - světlý vlevo a nahoře, tmavý vpravo a dole */
  border-top: 2px solid var(--ms-border-light);
  border-left: 2px solid var(--ms-border-light);
  border-bottom: 2px solid var(--ms-gray-shadow);
  border-right: 2px solid var(--ms-gray-shadow);

  .windowBar {
    background: ${({ theme }) => theme.win95.colors.blue};
    padding: 3px 3px 3px 6px;
    height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-container {
      display: flex;
      align-items: center;
      height: 100%;
      
      .windowIcon {
        height: 16px;
        width: 16px;
        margin-right: 4px;
      }

      h3 {
        color: white;
        font-size: 14px;
        text-transform: none;
        line-height: 24px;
      }
    }

    .right-container {
      display: flex;
      gap: 2px;
      height: 100%;
      align-items: center;

      .utilityContainer {
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.win95.colors.barGrey};
        box-shadow: inset -1px -1px #0a0a0a, 
                    inset 1px 1px #fff, 
                    inset -2px -2px grey, 
                    inset 2px 2px #dfdfdf;

        img {
          height: 12px;
          width: 12px;
        }
      }
    }
  }

  .content-wrapper {
    margin-top: 3px;
    background: ${({ theme }) => theme.win95.colors.barGrey};
  }

  .newproduct {
    width: 100%;
    display: block;
  }
`
