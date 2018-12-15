import styled from 'styled-components';

export default styled.section `
            background: linear-gradient(to bottom right, #8422D5 30% ,#982EBE 60%,#EA6060);
        color:white;
        width: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

.error{
    color:#fb8c8c;
}
    .title{
        font-size: 50px;
    line-height: 4;

    span{
        font-weight:100;
    }
    }
        .field{
                margin-bottom:25px;

                .input{
                    background: #8B26CC;
    border: none;
    border-bottom: solid #dad4d4 2px;
    color: white;
    padding: 5px;
    width: 15rem;
    -webkit-transition: 1s all;
    transition: 1s all;
    &:focus{
    outline:none;
    }
    &::placeholder{
            color:white;
    }
        }

             .control{
        display: flex;
    flex-direction: column;
    align-items:center;

    .button{
        margin-bottom: 50px;
    width: 8em;
    border: none;
    padding: 6px;
    border-radius: 4px;
    color: #8b26cc;
    font-size: 15px;
    font-family: serif;
    font-weight: bold;
    box-shadow: 2px 10px 28px rgba(0,0,0,0.4);

    }
    } 
    }
`;