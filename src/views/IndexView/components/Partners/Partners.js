import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid , Button} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  promoLogo: {
    maxWidth: 120,
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Partners = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} >
          <SectionHeader
            title="Welcome to the Riverside Pokémon Go Community!"
            subtitle={
              <>
              <p>Nestled along the scenic riverbanks, our dedicated group of Pokémon trainers are passionate about uniting local enthusiasts for thrilling raid battles, memorable meetups, and exciting events.</p>

              </>
            }
            fadeUp
            disableGutter

            

            ctaGroup={[
              <Button
                variant="contained"
                //color="FF0202" 9347FF
                color="primary"
               // style={{ background: 'primary', color: '#FFFFFF' }}
                size={isMd ? 'large' : 'medium'}
                href="https://youtu.be/KgNZu1IFip8?si=j0CJ41MgajaX6aM9"
              >
                First Video
              </Button>,
                    <Button
                    variant="contained"
                    //color="FF0202" 9347FF
                   // color="secondary"
                    style={{ background: '#1F9CEF', color: '#FFFFFF' }}
                    size={isMd ? 'large' : 'medium'}
                    href="https://twitter.com/ChuckFresco"
                  >
                    Twitter     <TwitterIcon style={{ marginLeft: 5 }}></TwitterIcon>
                  </Button>

            ]}

            align={isMd ? 'left' : 'center'}
            titleProps={{
              className: classes.title,
            }}
          />
{/*          <Grid container item xs={12} spacing={2} style={{ marginTop: 20 }} >
        {data.map((partner, index) => (
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={4}
              
              key={index}
              data-aos="fade-up"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                className={classes.promoLogo}
                lazy={false}
              />
            </Grid>
          ))}

  </Grid> */}

        </Grid>
        <Grid item container xs={12} md={6}>
 
          <Grid
            item
            container
            justify={isMd ? 'flex-end' : 'flex-start'}
            alignItems="center"
            xs={12}
            md={12}
            data-aos={'fade-up'}
          >
            <Image
              src="/assets/riverside-sign-1.webp"
              alt="Pokemon Go Riverside"
              className={classes.image}
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
         


        </Grid>
      </Grid>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Partners;
