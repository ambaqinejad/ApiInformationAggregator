module.exports = [
    {
        time: {
            second: '0',
            minute: '14',
            hour: '10'
        },
        apis: [
            {
                method: 'GET',
                address: 'https://jsonplaceholder.typicode.com/posts',
                collection: 'posts'
            },
            {
                method: 'POST',
                address: 'https://reqres.in/api/login',
                body: {
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                },
                collection: 'login'
            },
            {
                method: 'GET',
                address: 'https://jsonplaceholder.typicode.com/albums',
                collection: 'albums'
            }
        ]
    },
    {
        time: {
            second: '5',
            minute: '14',
            hour: '10'
        },
        apis: [
            {
                method: 'GET',
                address: 'https://jsonplaceholder.typicode.com/photos',
                collection: 'photos'
            },
            {
                method: 'POST',
                address: 'https://reqres.in/api/register',
                body: {
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
                },
                collection: 'register'
            },
            {
                method: 'GET',
                address: 'https://jsonplaceholder.typicode.com/users',
                collection: 'users'
            }
        ]
    }
]