import styled from 'styled-components'


export const Container = styled.div`
    display:flex;
    width: 400px;
    margin: 0 auto;
    

    h1{
        color: #717171;
        font-family: Helvetica, sans-serif;
    }
`

export const AddInput = styled.div`
    input{
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    margin-right: 100px;

    button{
        cursor: pointer;
        height: 30px;
        width: 60px;
        border: 1px solid #eaeaea;
        border-radius: 5px;
        margin-left: 5px;
        color: #717171;
        font-family: Helvetica, sans-serif;
    }
}
`
export const Body = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #eaeaea;
    border-radius: 10px; 
  

    .message{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: #717171;
        font-family: Helvetica, sans-serif;
        margin: 0px auto 0px 10px;
    }
   
    button{
        border: none;
        background: none;
    }

`
