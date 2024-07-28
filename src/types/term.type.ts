import { ENUM_STATUS_OF_DATE_TERM } from "@/utils/validations/term.validation";

export interface ITerm {
    id?: string;
    name?: string;
    startDate?: string;
    endDate?: string;
    startChooseGroupDate?: string;
    endChooseGroupDate?: string;
    startPublicTopicDate?: string;
    endPublicTopicDate?: string;
    startChooseTopicDate?: string;
    endChooseTopicDate?: string;
    startDiscussionDate?: string;
    endDiscussionDate?: string;
    startReportDate?: string;
    endReportDate?: string;
    startPublicResultDate?: string;
    endPublicResultDate?: string;
}

export interface IPartOfTerm {
    InTerm: {
        status: ENUM_STATUS_OF_DATE_TERM;
        mess: string,
    },
    ChooseGroup: {
        status: ENUM_STATUS_OF_DATE_TERM;
        mess: string,
    },
    PublicTopic: {
        status: ENUM_STATUS_OF_DATE_TERM;
        mess: string,
    },
    ChooseTopic: {
        status: ENUM_STATUS_OF_DATE_TERM;
        mess: string,
    },
    Discussion: {
        status: ENUM_STATUS_OF_DATE_TERM;
        mess: string,
    },
    Report: {
        status: ENUM_STATUS_OF_DATE_TERM;
        mess: string,
    },
    PublicResult: {
        status: ENUM_STATUS_OF_DATE_TERM;
        mess: string,
    }
}