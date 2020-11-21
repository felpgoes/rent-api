export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    password: string;
    emailConfirmation: boolean;
    twoFactorConfirmation: boolean;
    username: string;
    document: string;
    documentType: string;
}
