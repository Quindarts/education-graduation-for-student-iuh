import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import viLocale from '@fullcalendar/core/locales/vi';
import { Box, Paper, Typography } from '@mui/material';
import Header from './Header';
import SekeletonTable from '@/components/ui/Sekeleton';
import AllEventModal from './Modal/AllEventModal';
import useEvent from '@/hook/api/useEvent';
import { convertEventGrid } from '@/utils/validations/event.validation';
import { useNavigate } from 'react-router-dom';
const todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD của ngày hiện tại

export default function EventManagement() {
  const { HandleGetEvents } = useEvent();
  const { events, isLoading } = HandleGetEvents();
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const navigate = useNavigate();
  //Events
  const [openEvents, setOpenEvents] = useState(false);
  const handleOpenEvents = () => {
    setOpenEvents(true);
  };
  const handleCloseEvents = () => {
    setOpenEvents(false);
  };
  const handleEventClick = (eventInfo: any) => {
    const eventId = eventInfo?.event?.id;
    const event = events?.find((e: any) => e.id === eventId);
    navigate(
      `/events/${event.id}`,
    );
  };
  return (
    <>
      <Box sx={{ px: 10, py: 10, cursor: 'pointer', zIndex: 1 }}>
        <Header />
        <Typography textAlign={'left'} mb={6} variant='h6' color='initial'>
          Sự kiện của tôi:{' '}
          <Typography variant='body1' color='grey.600' fontWeight={'bold'} component='span'>
            {events?.length} sự kiện{' '}
          </Typography>
          <Typography
            sx={{ cursor: 'pointer', '&:hover': { color: 'error.dark' } }}
            component={'span'}
            ml={2}
            variant='body1'
            color='primary.dark'
            onClick={handleOpenEvents}
          >
            Xem chi tiết
          </Typography>
        </Typography>
        <Box sx={{ fontSize: 12, color: 'primary.dark' }}>
          {isLoading ? (
            <SekeletonTable />
          ) : (
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              locale={viLocale}
              timeZone='UTC+7'
              initialView='dayGridMonth'
              eventStartEditable={false}
              eventDurationEditable={false}
              editable={true}
              selectable={true}
              selectMirror={true}
              droppable={false}
              dayMaxEvents={true}
              weekends={weekendsVisible}
              initialEvents={convertEventGrid(events)}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
              eventClassNames={() => 'custom-event-class'}
            />
          )}
        </Box>
      </Box>
      <AllEventModal onClose={handleCloseEvents} open={openEvents} />
    </>
  );
}

function renderEventContent(eventInfo) {
  return (
    <Box sx={{ height: 30, px: 4, py: 2 }}>
      <Typography variant='body2' fontSize={10} color='grey.100'>
        {eventInfo.event.title}
      </Typography>
    </Box>
  );
}
