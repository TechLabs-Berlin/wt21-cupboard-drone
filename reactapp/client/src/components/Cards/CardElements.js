import styled from 'styled-components';


export const Container = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    overflow: hidden;

    @media screen and (max-width: 400px){
        padding: 20px;
    };
`;

export const TheCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 860px;
    background-color: #efefef;
    

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
        box-shadow: 0 0 35px 1px rgba(0, 0, 0, 0.2);
    };
`;

export const Background = styled.div`
    position: relative;
    width: 50%;
    height: 540px;
    box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1),
    0 -15px 35px rgba(0, 0, 0, 0.1),
    0 15px 35px rgba(0, 0, 0, 0.1);
    transition: .5s;
`;

export const ShareIcon = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 3px;
    background-color: #01bf71;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    font-size: 1.3rem;
    text-decoration: none;
    transition: .5s;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 600px){
        width: 40px;
        height: 40px;
    };

    @media screen and (max-width: 490px) {
        width: 35px;
        height: 35px;
        top: 10px;
        right: 10px;
    };
`;

export const ShareIconLink = styled.a`
    line-height: 50px;
    text-align: center;

    @media screen and (max-width: 600px) {
        font-size: 1rem;
        line-height: 40px;
    };

    @media screen and (max-width: 490px) {
        font-size: .8rem;
        line-height: 35px;
    };
`;


export const ShareIconLinkCalendar = styled.a`
position: flex;
margin-left: 217px;
top: 15px;
right: 15px;
padding: 4px;
color: #000;
background-color: #01bf71;
width: 50px;
height: 50px;
border-radius: 20%;
text-align: center;
font-size: 0.9rem;
text-decoration: none;
transition: .5s;

&:hover {
    transform: scale(1.1);
}

    @media screen and (max-width: 600px) {
        font-size: 1rem;
        line-height: 40px;
    };

    @media screen and (max-width: 490px) {
        font-size: .8rem;
        line-height: 35px;
    };
`;

export const ProductImg = styled.img`
    height: auto;
    max-width: 100%;
    


    @media screen and (max-width: 1070px) {
        width: 135%;
    };

    @media screen and (max-width: 1000px) {
        width: 100%;
        transform: rotate(-5deg) translateY(-50%);
        top: 55%;
        right: 2%;
    };
`;

export const Info = styled.div`
    width: 50%;
    background-color: #fff;
    z-index: 1;
    padding: 35px 40px;
    box-shadow: 15px 0 35px rgba(0, 0, 0, 0.1),
    0 -15px 35px rgba(0, 0, 0, 0.1),
    0 15px 35px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 490px) {
        padding: 20px;
    };
`;

export const Name = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0 10px 0;
    border-bottom: 1px solid #dadada;

    @media screen and (max-width: 600px) {
        
    };
`;

export const BigH1 = styled.h1`
    margin-right: 10px;
    padding: 3px;
    font-size: 2rem;
    color: #333;
    line-height: 1;

    @media screen and (max-width: 490px) {
        font-size: 1.3rem;
    };
`;

export const BigH3 = styled.h3`
    color: #3a3a3a;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 5px;
    border-bottom: 1px solid #dadada;

    @media screen and (max-width: 490px) {
        font-size: 9rem;
    };
`;


export const BigH4 = styled.h4`
    font-weight: 500;
    padding: 2px;
    color: #444;
    margin-top: 3px;
    margin-bottom: 2px;
    text-transform: capitalize;

    @media screen and (max-width: 490px) {
        font-size: 1rem;
    };
    
`;

export const QuantityContainer = styled.div`
    padding: 10px 0;
    margin-bottom: 10px;
`;

export const Quantity = styled.div`
    padding: 8px 0;
    display: flex;
    align-items: center;
`;

export const Size = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 6px;
    background-color: #eee;
    margin: 0 10px;
    text-align: center;
    line-height: 40px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: .3s;
    border-bottom: 1px solid #dadada;

    @media screen and (max-width: 490px) {
        width: 30px;
        height: 30px;
        margin: 0 8px;
        font-size: .9rem;
        line-height: 30px;
    };
`;

export const CardButton = styled.button`
    background: #01bf71;
    margin: 10px;
    padding: 16px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: .5s;
    font-weight: bold;

    &:hover {
        transform: scale(1.1);
    }
`;