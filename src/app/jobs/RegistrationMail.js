import Mail from '../lib/mail';

export default {
    key: "RegistrationMail",
    async handle({ data }) {
        const { user } = data;
        // console.log('JOB: RegistrationMail');
        await Mail.sendMail({
            from: "Serviço de Fila <Kleber@gmail.com>",
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de Usuário',
            html: `Olá, ${user.name}`
        });
    }
}