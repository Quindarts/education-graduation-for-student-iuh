import { IUser } from "./auth.type";
import { ITerm } from "./term.type";

export default interface ResponseType {
    success?: boolean;
    message?: string;
    params?: any,
    lecturer?: any,
    student?: any,
    topic?: any,
    term: ITerm,
    lecturerTerm?: any,
    user?: IUser,
    major?: any,
    groupLecturer?: any,
    evaluation?: any,
    assign?: any,
    achievement?: any,
    groupStudent?: any,
    transcript?: any,
    data?: any,
    lecturers?: any,
    students?: any,
    topics?: any,
    terms?: any,
    lecturerTerms?: any,
    majors?: any,
    groupLecturers?: any,
    evaluations?: any,
    assigns?: any,
    achievements?: any,
    groupStudents?: any,
    transcripts?: any,

}