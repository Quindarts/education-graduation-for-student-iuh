import { IPartOfTerm, ITerm } from '@/types/term.type';
import dayjs from 'dayjs';
export enum ENUM_STATUS_OF_DATE_TERM {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  EXPIRED = 'EXPIRED',
}
export const statusOfDate = (startDate: string, endDate: string) => {
  const dayOfStartDate = dayjs(startDate);
  const dayOfEndDate = dayjs(endDate);
  let currentStatus;
  const dateNow = dayjs();
  if (dateNow < dayOfStartDate) currentStatus = ENUM_STATUS_OF_DATE_TERM.INACTIVE;
  else if (dateNow > dayOfEndDate) currentStatus = ENUM_STATUS_OF_DATE_TERM.EXPIRED;
  else currentStatus = ENUM_STATUS_OF_DATE_TERM.ACTIVE;
  return currentStatus;
};
export const checkExpiredDate = (date: string) => {
  const dateNow = dayjs();
  return dateNow > dayjs(date);
};

export const checkColorStatusPartTerm = (status?: string) => {
  let color = '';
  switch (status) {
    case ENUM_STATUS_OF_DATE_TERM.ACTIVE:
      color = '#009e6c';
      break;
    case ENUM_STATUS_OF_DATE_TERM.EXPIRED:
      color = '#b23838';
      break;
    case ENUM_STATUS_OF_DATE_TERM.INACTIVE:
      color = '#2c8cd6';
      break;
  }
  return color;
};

export const checkStatusPart = (startDate: any, endDate: any) => {
  let data: {
    mess: string;
    status: ENUM_STATUS_OF_DATE_TERM;
  };
  if (startDate && endDate) {
    if (statusOfDate(startDate, endDate) === ENUM_STATUS_OF_DATE_TERM.EXPIRED)
      data = {
        mess: `Đã đóng, ngày kết thúc ${dayjs(endDate).format('DD/MM/YYYY HH:mm')}`,
        status: ENUM_STATUS_OF_DATE_TERM.EXPIRED,
      };
    else if (statusOfDate(startDate, endDate) === ENUM_STATUS_OF_DATE_TERM.INACTIVE)
      data = {
        mess: `Sắp diễn ra, bắt đầu từ ngày ${dayjs(startDate).format('DD/MM/YYYY HH:mm')}`,
        status: ENUM_STATUS_OF_DATE_TERM.INACTIVE,
      };
    else
      data = {
        mess: `Đang diễn ra, ngày kết thúc ${dayjs(endDate).format('DD/MM/YYYY HH:mm')}`,
        status: ENUM_STATUS_OF_DATE_TERM.ACTIVE,
      };
  } else {
    data = { mess: 'Đã đóng', status: ENUM_STATUS_OF_DATE_TERM.EXPIRED };
  }
  return data;
};

export const checkListPartOfTerm = (term: ITerm): IPartOfTerm => {
  const partOfTerm = {
    InTerm: checkStatusPart(term.startDate, term.endDate),
    ChooseGroup: checkStatusPart(term.startChooseGroupDate, term.endChooseGroupDate),
    PublicTopic: checkStatusPart(term.startPublicTopicDate, term.endPublicTopicDate),
    ChooseTopic: checkStatusPart(term.startChooseTopicDate, term.endChooseTopicDate),
    Discussion: checkStatusPart(term.startDiscussionDate, term.endDiscussionDate),
    Report: checkStatusPart(term.startReportDate, term.endReportDate),
    PublicResult: checkStatusPart(term.startPublicResultDate, term.endPublicResultDate),
  };
  return partOfTerm;
};
