import { EnumStatusSubmit } from "@/types/enum";
import { EventContentArg } from "fullcalendar";

export const convertEventGrid = (listEvents: any): Partial<EventContentArg[]> => {
  if (listEvents !== undefined && listEvents?.length < 1) {
    return [];
  } else {
    return listEvents?.map((event: any) => {
      return {
        id: event?.id,
        title: event.name,
        start: event.endDate,
        end: event.endDate,
        allDay: true,
        name: event.name,
        backgroundColor: '#0A3B7EFF',
      };
    });
  }
};


export default function submissionStatus(status: string) {

  switch (status) {
    case EnumStatusSubmit.NOT_SUBMITTED:
      return {
        text: 'Chưa nộp bài',
        color: 'primary.main',
        bg: '#D7EAFCFF',
      };
    case EnumStatusSubmit.SUBMITTED:
      return {
        text: 'Đã nộp bài',
        color: 'success.main',
        bg: '#DDF7E4FF',
      };
    case EnumStatusSubmit.EXPIRED:
      return {
        text: 'Nộp trễ',
        color: 'error.main',
        bg: '#ffe7e7',
      };
  }
}