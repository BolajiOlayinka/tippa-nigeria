import React from 'react';
import styled from 'styled-components'

export default function WhyUs() {
    return (
        <React.Fragment>
            <Wrapper>
        <h1>Why People Choose Us</h1>
        <p>Lorem Lorem Lorem Lorem Lorem Lorem</p>
      </Wrapper>
      </React.Fragment>
    )
}

const Wrapper = styled.div `
background-color:var(--lightBack);
background-image: url('img/mark.png');
background-repeat:no-repeat;
background-size:contain;
height:500px;
margin-bottom:50px;

h1{
    text-align:center;
    padding-top:250px;
    font-weight:bold;
}
p{
    margin-top:1em;
    text-align:center;
}

`