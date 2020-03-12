import Queues from '../lib/Queue';

export default {
    async store (req, res) {
        const { name, email, password} = req.body;
        console.log(req.body);
        const user = {
            name,
            email,
            password,
        };
        
        await Queues.add('RegistrationMail',{ user });
        await Queues.add('RegistrationReport',{ user });

        return res.json(user);
    }
};