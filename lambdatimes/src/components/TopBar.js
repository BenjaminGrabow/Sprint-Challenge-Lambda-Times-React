import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Div = styled.div`
 width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;

  section {
    width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
@media (min-width: 1280px) {
    width: 1280px; 
  }
}

figure {
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  span {
    cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
  }
}

article {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  span {
    cursor: pointer;
  margin-right: 5%;

  &:hover {
    text-decoration: underline;
  }
  
  span:last-child {
    margin-right: 0;
  }
  }
}


`;

const TopBar = () => {
  return (
    <Div>
      <section>
        <figure>
          <span>TOPICS</span><span>SEARCH</span>
        </figure>
        <article className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </article>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </section>
    </Div>
  )
}

export default TopBar;