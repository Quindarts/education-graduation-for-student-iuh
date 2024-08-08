class StudentService {
    endpoint: string;
    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/students';
    }

}
export default StudentService;  