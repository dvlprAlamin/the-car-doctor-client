import { Container, Grid } from '@material-ui/core';
import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import OurExpertSingle from './OurExpertSingle';
import ourExpertIcon from '../../../image/icon/mechanic.png'
import mechanic1 from '../../../image/mechanic/mechanic-1.jpg'
import mechanic2 from '../../../image/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../image/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../image/mechanic/mechanic-4.jpg'
const OurExpert = () => {

    const ourExpertsData = [
        {
            img: mechanic1,
            name: 'Andrew Smith',
            expertize: '-Engine Expert-'
        },
        {
            img: mechanic2,
            name: 'John Anderson',
            expertize: '-Polish Expert-'
        },
        {
            img: mechanic3,
            name: 'Zakaria Smith',
            expertize: '-Coloring Expert-'
        },
        {
            img: mechanic4,
            name: 'Sakib Anderson',
            expertize: '-Alrounder Expert-'
        },
    ]
    return (
        <Container>
            <SectionTitle icon={ourExpertIcon} text={'Our Experts'} />
            <Grid container spacing={3}>
                {
                    ourExpertsData.map((expert, i) => <Grid key={i} item md={3} sm={6} xs={12}>
                        <OurExpertSingle expert={expert} />
                    </Grid>)
                }

            </Grid>
        </Container>
    );
};

export default OurExpert;