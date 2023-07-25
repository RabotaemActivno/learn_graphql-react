import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



export function ListData({data}: any) {


  return (
    <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
      {data && data.map((item: any) => {
        const labelId = `checkbox-list-label-${item.id}`;

        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CloseIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}