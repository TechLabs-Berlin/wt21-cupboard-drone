import React from 'react';
import {FaShareAlt, FaCalendarDay} from 'react-icons/fa';
import {
    Container,
    TheCard,
    Background,
    ShareIcon,
    ShareIconLink,
    ShareIconLinkCalendar,
    ProductImg,
    Info, 
    Name,
    BigH1,
    BigH3,
    BigH4,
    CardButton,
    QuantityContainer,
    Quantity,
    Size
} from './CardElements';




const Cards = () => {
  return (
    <Container>
        <TheCard>
            <Background>
                <ShareIcon>
                <ShareIconLink src="/" target="_blank" aria-label="Share">
                    <FaShareAlt />
                </ShareIconLink>
                </ShareIcon >
                <ProductImg img src={require('../../images/avocado.png')} />
            </Background>
            <Info>
                <Name>
                    
                    <BigH1>AVOCADO</BigH1>
                    
                    <BigH4>(Product info)</BigH4>
                </Name>
                
                    <BigH3>Classification:</BigH3>
                    <BigH4>Category - FRUIT</BigH4>
                    <BigH4>Location - Cupboard</BigH4>
                
                    
                    <BigH3>Date</BigH3>
                    
                    <BigH4>Purchase date: January 29.
                    
                        <ShareIconLinkCalendar src="/" target="_blank" aria-label="Calendar">
                            <FaCalendarDay />
                        </ShareIconLinkCalendar>
                
                    </BigH4>
                    <BigH4>Best before: February 6.

                        <ShareIconLinkCalendar src="/" target="_blank" aria-label="Calendar">
                                <FaCalendarDay />
                        </ShareIconLinkCalendar>
                    </BigH4>
                    
                
                <QuantityContainer>
                    <BigH3>Quantity</BigH3>
                    <Quantity>
                        <Size>2</Size>
                        
                    </Quantity>
                </QuantityContainer>
                <CardButton type="submit">Cancel</CardButton>
                <CardButton type="submit">Use this</CardButton>
            </Info>
        </TheCard>
    </Container>
  );
};


export default Cards;
