import React from 'react'
import Icon1 from '../../images/svg-7.svg';
import Icon2 from '../../images/svg-6.svg';
import Icon3 from '../../images/svg-5.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our features</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Daily reports</ServicesH2>
                    <ServicesP>Be up to date with your food wasting</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Food banks</ServicesH2>
                    <ServicesP>Donate the food to the nearest Food Bank</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Recipes Collection</ServicesH2>
                    <ServicesP>For the food which is about to expire</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
