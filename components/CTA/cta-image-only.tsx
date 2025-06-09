'use client';
import { CTAProps } from '@/types/component-models';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

//img_only
export function ImageOnly({ cta }: { cta: CTAProps }) {
    return (
        <>
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
                        {link.internal && link.internal.length > 0 && (
                            <Button size="small" href={link.internal[0].target.url}>{link.internal[0].display_label}</Button>)}
                    </CardActions>
                ))}
            </Card>
        </>
    );
}
