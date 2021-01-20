import { css } from '@emotion/core';

import montserratEot from './assets/fonts/montserrat-webfont.eot';
import montserratSvg from './assets/fonts/montserrat-webfont.svg';
import montserratTtf from './assets/fonts/montserrat-webfont.ttf';
import montserratWoff from './assets/fonts/montserrat-webfont.woff';

import varelaRoundEot from './assets/fonts/varela_round-webfont.eot';
import varelaRoundSvg from './assets/fonts/varela_round-webfont.svg';
import varelaRoundTtf from './assets/fonts/varela_round-webfont.ttf';
import varelaRoundWoff from './assets/fonts/varela_round-webfont.woff';

export default css`
  @font-face {
    font-family: varela_roundregular;
    src: url(${varelaRoundEot}) format('embedded-opentype'),url(${varelaRoundWoff}) format('woff'),url(${varelaRoundTtf}) format('truetype'),url(${varelaRoundSvg}#varela_roundregular) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: montserratregular;
    src: url(${montserratEot}) format('embedded-opentype'),url(${montserratWoff}) format('woff'),url(${montserratTtf}) format('truetype'),url(${montserratSvg}#montserratregular) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    background-color: #f1f1f1;
  }
  body, h1, h2, h3, p, input {
    margin: 0;
    font-weight: 400;
    font-family: varela_roundregular, sans-serif;
    color: #34302d;
  }
  a {
    color: #5fa134;
    text-decoration: none;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 10px;
    font-family: montserratregular, sans-serif;
  }
`;
/*
export default css({
  '@font-face': {
    fontFamily: 'varela_roundregular',
    src: `url(${varelaRoundEot}) format('embedded-opentype'),` +
         `url(${varelaRoundWoff}) format('woff'),` +
         `url(${varelaRoundTtf}) format('truetype'),` +
         `url(${varelaRoundSvg}#varela_roundregular) format('svg')`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    fontSize: '14px',
    backgroundColor: '#f1f1f1',
  },
  'body, h1, h2, h3, p, input': {
    margin: 0,
    fontWeight: 400,
    fontFamily: '"varela_roundregular", sans-serif',
    color: '#34302d',
  }
});
*/
