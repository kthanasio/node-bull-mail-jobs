# Redis

``docker run --name redis -p 6379:6379 -d -t redis:alpine``

# SMTP

- http://mailtrap.io/
- Copy .env.example to .env
- Configure the smtp variables on .env

# API + Job Consumer

``npm run-script dev``

# Bull Board

* Check job events
  
``http://localhost:3333/admin/queues``

# Test

``curl --location --request POST 'http://localhost:3333/users' --header 'Content-Type: application/json' --data-raw '{"name": "Test User","email":"test@user.com","password": "test123"}'``