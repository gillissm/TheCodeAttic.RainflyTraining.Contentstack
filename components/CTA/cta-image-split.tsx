'use client';
import { CTAProps } from '@/types/component-models';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

//img_split
export function ImageSplit({ cta }: { cta: CTAProps }) {
    // console.log(cta)
    return (
        <>
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
                        <div dangerouslySetInnerHTML={{ __html: cta.copy }} />
                    </Typography>
                </CardContent>
                {cta.action_links?.map((link, index) => (
                    <CardActions key={index}>
                        {link.external && (
                            <Button size="small" href={link.external.target.href}>{link.external.display_label}</Button>)}
                        {link.internal && link.internal.target.length > 0 &&(
                        <Button size="small" href={link.internal?.target[0].url}>{link.internal?.display_label}</Button>)}
                    </CardActions>
                ))}
            </Card>
        </>
    );
}
