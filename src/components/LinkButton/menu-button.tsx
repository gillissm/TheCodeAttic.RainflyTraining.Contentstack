'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { MenuItem as MenuItemModel } from '@/types/component-models';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


export default function BasicMenuItem({ menuModel, indexKey }: { menuModel: MenuItemModel, indexKey: number }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Stack direction="row" spacing={2} >
            <Box key={indexKey}>
                <Button
                    id={`b-${indexKey}`}
                    aria-controls={open ? `m-${indexKey}` : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    variant="contained"
                    color="secondary"
                >
                    {menuModel.menu_title}
                </Button>
                <Menu
                    id={`m-${indexKey}`}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': `b-${indexKey}`,
                    }}
                >
                    {menuModel.menu_item.map((mi, index) => (
                        <MenuItem key={index}>
                            <a key={index} href={mi.href}>{mi.title}</a>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Stack>
    );
}
