import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import { MouseEvent, useState } from 'react';
import { Fab, Fade, Popper, Tooltip } from '@mui/material';
import ChatBox from '@/page/ChatBox';

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <Box sx={{ position: 'fixed', bottom: 60, right: 20 }}>
      <Tooltip onClick={handleClick} placement='left' title='Chat bot'>
        <Fab aria-describedby={'123'} size='large' aria-label='chat'>
          <Icon height={30} width={30} icon='fluent-color:chat-more-20' />
        </Fab>
      </Tooltip>
      <Popper
        placement='left'
        id={id}
        open={open}
        sx={{ zIndex: 100 }}
        anchorEl={anchorEl}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={300}>
            <Box>
              <ChatBox />
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}
