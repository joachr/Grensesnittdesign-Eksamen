import {BottomNavigation, useMediaQuery, useTheme} from '@material-ui/core';
import {Box} from '@mui/system';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer() {
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<div>
			{isMatch ?
				<BottomNavigation style={{
					position: 'fixed',
					bottom: 0,
					left: 0,
					width: '100%',
					height: '120px',
					backgroundColor: '#FFD148',
				}}>
					<Box style={{
						position: 'relative',
						height: '100%',
						backgroundColor: '#006357',
					}}>
						<div style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							width: '180px',
						}}>
							<ul style={{
								listStyle: 'none',
								color: 'white',
								marginLeft: '1rem',
								marginRight: '1rem'
							}}>
								<li style={{
									marginTop: '0.5rem'
								}}>Tlf: 90 34 34 34
								</li>
								<li style={{
									marginTop: '0.5rem'
								}}>E-post: barcapizza@gmail.com
								</li>
								<li style={{
									marginTop: '0.5rem'
								}}>Adresse: Strandveien 4, 0000, Strand
								</li>
							</ul>
						</div>
					</Box>

					<div style={{
						display: 'flex',
						flexDirection: 'column'
					}}>
						<FacebookIcon style={{marginLeft: '10px', fontSize: '40px', color: '#4267B2'}}/>
						<InstagramIcon style={{marginLeft: '10px', fontSize: '40px', color: '#E1306C'}}/>
						<TwitterIcon style={{marginLeft: '10px', fontSize: '40px', color: '#1DA1F2'}}/>
					</div>
				</BottomNavigation> : (
					<BottomNavigation style={{
						position: 'fixed',
						bottom: 0,
						left: 0,
						width: '100%',
						height: '120px',
						backgroundColor: '#FFD148',
						marginTop: '150px'
					}}>
						<Box style={{
							position: 'relative',
							height: '100%',
							backgroundColor: '#006357',
							left: '30px'
						}}>
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								marginTop: '1rem',
								width: '280px',
							}}>
								<ul style={{
									listStyle: 'none',
									color: 'white',
								}}>
									<li style={{
										marginTop: '0.5rem'
									}}>Tlf: 90 34 34 34
									</li>
									<li style={{
										marginTop: '0.5rem'
									}}>E-post: barcapizza@gmail.com
									</li>
									<li style={{
										marginTop: '0.5rem'
									}}>Adresse: Strandveien 4, 0000, Strand
									</li>
								</ul>

							</div>
						</Box>

						<FacebookIcon style={{marginTop: '20px', marginLeft: '30px', fontSize: '70px', color: '#4267B2'}}/>
						<InstagramIcon style={{marginTop: '20px', fontSize: '70px', color: '#E1306C'}}/>
						<TwitterIcon style={{marginTop: '20px', fontSize: '70px', color: '#1DA1F2'}}/>
					</BottomNavigation>)}
		</div>
	)
}

export default Footer;
