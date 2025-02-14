import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions, Typography, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import { Image } from "../../typescript/action";
import { CTAProps } from '../../models/component-models/cta-model';


//img_split
export function ImageSplit({ cta }:{cta: CTAProps}) {

    return (
        <Card variant="outlined" sx={{ maxWidth: 345 }}>
           <CardMedia
                sx={{ height: 140 }}
                image={cta.image.url}
                title={cta.image.filename}
            />
            <CardContent>
                <Typography variant="h4" component="div">
                    {cta.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }} component="div" >
                    <p>{cta.headline}</p>
                    <p>{cta.sub_title}</p>
                    <div dangerouslySetInnerHTML={{__html:cta.copy}}/>
                </Typography>
            </CardContent>
            {cta.action_links?.map((link, index) => (
                <CardActions key={index}>
                    {link.external && (
                        <Button size="small" href={link.external.target.href}>{link.external.display_label}</Button>)}
                    {link.internal && (
                        <Button size="small" href={link.internal.target.url}>{link.internal.display_label}</Button>)}                    
                </CardActions>
            ))}
        </Card>
    );

}

//txt_only
export function TextOnly({ cta }: { cta: CTAProps }) {

    return (
        <Card variant="outlined" sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography variant="h4" component="div">
                    {cta.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }} component="div" >
                    <p>{cta.headline}</p>
                    <p>{cta.sub_title}</p>
                    <div dangerouslySetInnerHTML={{__html:cta.copy}}/>
                </Typography>
            </CardContent>
            {cta.action_links?.map((link, index) => (
                <CardActions key={index}>
                    {link.external && (
                        <Button size="small" href={link.external.target.href}>{link.external.display_label}</Button>)}
                    {link.internal && (
                        <Button size="small" href={link.internal.target.url}>{link.internal.display_label}</Button>)}                    
                </CardActions>
            ))}
        </Card>
    );
}

//img_only
export function ImageOnly({ cta }:{cta: CTAProps}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={cta.image.url}
                title={cta.image.filename}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {cta.title}
                </Typography>
            </CardContent>
            {cta.action_links?.map((link, index) => (
                <CardActions key={index}>
                    {link.external && (
                        <Button size="small" href={link.external.target.href}>{link.external.display_label}</Button>)}
                    {link.internal && (
                        <Button size="small" href={link.internal.target.url}>{link.internal.display_label}</Button>)}                    
                </CardActions>
            ))}
        </Card>
    );
}

export default function Cta({ cta }: { cta: CTAProps }) {    
    switch (cta.cta_variant) {
        case 'img_split':
            return <ImageSplit cta={cta} />;
        case 'txt_only':
            return <TextOnly cta={cta} />;
        case 'img_only':
            return <ImageOnly cta={cta} />;
        default:
            return <TextOnly cta={cta} />;
    }
}