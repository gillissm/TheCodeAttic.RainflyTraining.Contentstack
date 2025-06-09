'use client';

import { CTAProps } from '@/types/component-models';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

//txt_only
export function TextOnly({ cta }: { cta: CTAProps }) {

    return (
        <>  <Card variant="outlined" sx={{ maxWidth: 345 }}>
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
                    {link.internal && link.internal.length > 0 &&(
                        <Button size="small" href={link.internal[0].target.url}>{link.internal[0].display_label}</Button>)}
                </CardActions>
            ))}
        </Card>
        </>
    );
}
