export const checktTypeGroupLecturer = (type: string) => {
    switch (type) {
        case 'reviewer':
            return 'Chấm Phản biện';
        case 'report_poster':
            return 'Chấm Poster';
        case 'report_council':
            return 'Chấm Hội đồng';
    }
    return;
};

export const ENUM_STATUS_LECTURER = {
    NO_GROUP: 'NO_GROUP',
    HAVE_GROUP: 'HAVE_GROUP',
};
export const ENUM_GROUP_LECTURER_REPORT = [
    {
        _id: 'report_poster',
        name: 'Nhóm chấm poster',
    },
    {
        _id: 'report_council',
        name: 'Nhóm chấm hội đồng',
    },
];
export const ENUM_GROUP_LECTURER = [
    {
        name: 'Chấm Phản biện',
        _id: 'reviewer',
    },
    {
        name: 'Chấm Poster',
        _id: 'report_poster',
    },
    {
        name: 'Chấm Hội đồng',
        _id: 'report_council',
    },
];