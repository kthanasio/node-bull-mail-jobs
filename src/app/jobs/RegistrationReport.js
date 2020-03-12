export default {
    key: "RegistrationReport",
    async handle({ data }) {
        const { user } = data;
        console.log('JOB: RegistrationReport');
        console.log(`User <${user.name}> created!`);

    }
}