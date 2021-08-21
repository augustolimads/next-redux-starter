import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	/* http://meyerweb.com/eric/tools/css/reset/v2.0 | 20110126License: none (public domain)*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
    min-height: 100vh;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
        "Helvetica Neue", sans-serif;
}

ol,
ul {
    list-style: none;
}

* {
    box-sizing: border-box;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    background: none;
    border: 0;
    padding: 0;
}

img {
    display: block;
    height: auto;
    max-width: 100%;
}

svg {
    fill: currentColor;
}

html {
    font-size: 16px;
    -moz-osx-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
}

b,
strong {
    font-weight: 600;
}

i,
em {
    font-style: italic;
}

input[type="search"] {
    -webkit-appearance: textfield;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation: none;
        transition: none;
    }
}

header {
    z-index: 20;
}

html,
body,
#__next {
    height: 100%;
}

html {
    font-size: 62.5%;
}

html {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
}

::selection {
    ${({ theme }) => css`
      color: ${theme.colors.background};
      background: ${theme.colors.primary};
    `}
}

.icon {
    height: 1rem;
    width: 1rem;
}

.icon-tiny {
    height: 0.5rem;
    width: 0.5rem;
}

.icon-large {
    height: 1.5rem;
    width: 1.5rem;
}

`
export default GlobalStyles