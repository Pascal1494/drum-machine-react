import styled from 'styled-components';



export default function GridButton({
    isPlayed = false,
    soundPlay,
    id,
    handleSampleChange,
}) {
    return <Wrapper isPlayed={isPlayed} onClick={soundPlay}>
        <label onClick={(e) => e.stopPropagation()} htmlFor={id}>🎶</label>
        <input onClick={(e) => e.stopPropagation()}
            id={id}
            type="file"
            onChange={handleSampleChange}
        />

    </Wrapper>
}

const Wrapper = styled.div`

    // border: solid 1px;
    border-radius: 12px;
    background-color: #D9AFD9;
    background-image: radial-gradient(
        circle, 
        #D9AFD9 0%, 
        #FC00FF 100%
        );
        position: relative;
        overflow: hidden;
    &::before {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;
      background-color: #FC00FF;
      background-image: radial-gradient(
          circle, 
          #FC00FF ${(props) => (props.isPlayed ? "20%" : "0%")}, 
          #D9AFD9 100%
          );
          opacity: ${(props) => (props.isPlayed ? "1" : "0")};
          transition: linear 0.2s
    }
    
    &:hover::before {
        opacity: 1;
        background color: lightblue;
    }
    &:active::before {
        opacity: 1;
        background-color: #FC00FF;
      background-image: radial-gradient(
          circle, 
          #FC00FF 35%, 
          #D9AFD9 100%
          );
    }
    & input {
        display: none;
    }
    & label {
        position: absolute;
        right: 12px;
        top: 12px;
        font-size: 24px;
    }
`;