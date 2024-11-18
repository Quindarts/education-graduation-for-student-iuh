enum EnumRole {
  LECTURER = 'LECTURER',
  HEAD_LECTURER = 'HEAD_LECTURER',
  HEAD_COURSE = 'HEAD_COURSE',
  ADMIN = 'ADMIN',
}

enum EnumGender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
}

enum RoleCheck {
  HEAD_COURSE = 'HEAD_COURSE',
  LECTURER = 'LECTURER',
  HEAD_LECTURER = 'HEAD_LECTURER',
  ADMIN = 'ADMIN',
}
enum EnumStatusSubmit {
  SUBMITTED = 'SUBMITTED',
  NOT_SUBMITTED = 'NOT_SUBMITTED',
  EXPIRED = 'EXPIRED',
}
enum EnumChatMessageType {
  SEND = 'send',
  REPLY = 'reply',
}

export { EnumRole, EnumGender, EnumStatusSubmit, RoleCheck, EnumChatMessageType };
