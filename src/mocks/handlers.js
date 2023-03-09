import { rest } from 'msw';
const baseURL = 'https://petfriends-api.herokuapp.com/'

export const handlers = [
    rest.get(`${baseUrl}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json(
            {
                "pk": 3,
                "username": "Finn",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 3,
                "profile_image": "https://res.cloudinary.com/dmqu7iqfu/image/upload/v1/media/images/Screenshot_2023-02-23_at_16.06.15_p8loaq"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    })
];