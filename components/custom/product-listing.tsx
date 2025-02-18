import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { MultipleProductDisplay } from '../../models/global-fields/multiple-product-display';


export default function ProductListing({ productsListProp }: { productsListProp: MultipleProductDisplay }) {
    return (
        <>
            <Paper elevation={2} variant='elevation'>
                <Grid container spacing={2} direction="row"
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Grid size={12}>
                        <Paper elevation={4} variant='elevation'>
                            <h2>{productsListProp.headline}</h2>
                            {productsListProp.sub_header &&
                                <h3>{productsListProp.sub_header}</h3>
                            }
                        </Paper>
                    </Grid>
                    {productsListProp.products_for_display && productsListProp.products_for_display.map((p, index) => (
                        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                            {(() => {
                                const general = p.product_details.find((g) => g.general !== null && g.general !== undefined);
                                return general && <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={general.general.default_product_image.url}
                                            alt={general.general.default_product_image.filename}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {p.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {general.general.product_tagline}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" href={p.url}>
                                            Check It Out
                                        </Button>
                                    </CardActions>
                                </Card>;
                            })()}
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </>
    );
}