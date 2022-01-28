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
                </ShareIcon>
                <ProductImg href='https://cdn.pixabay.com/photo/2020/11/22/12/35/potato-5766477_1280.png' alt=""/>
            </Background>
            <Info>
                <Name>
                    
                    <BigH1>Product name</BigH1>
                    
                    <BigH4>Product info</BigH4>
                </Name>
                
                    <BigH3>Classification</BigH3>
                    <BigH4>Category (Dairy)</BigH4>
                    <BigH4>Location (Fridge)</BigH4>
                
                    
                    <BigH3>Date</BigH3>
                    <BigH4>Purchase date:
                    
                        <ShareIconLinkCalendar src="/" target="_blank" aria-label="Calendar">
                            <FaCalendarDay />
                        </ShareIconLinkCalendar>
                
                    </BigH4>
                    <BigH4>Best before:

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
                <CardButton type="submit">Add</CardButton>
            </Info>
        </TheCard>
    </Container>
  );
};


export default Cards;
