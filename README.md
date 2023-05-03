## A web app built with Angular, Node js, Express and Mongo DB 

### Run locally - npm start

https://vase-shop-test.herokuapp.com

![app screenshot](<img width="1470" alt="Screenshot 2023-05-03 at 20 52 56" src="https://user-images.githubusercontent.com/79061412/236039115-3ad03158-0a5e-4f09-9bb2-8285c1684268.png">
)

*Heroku app not showing products on home page from database but it shows when run on local server http://localhost:9000/*

**Features:**
- Add new products
- Provide a detail view for each product
- Have add and edit product details(user can upload product image with no description then add description/detail later; and edit original description after publishing product listing)
- Validate user input in form (product name: string/text, 5-25 characters; price: number, min $0; description: text, max 1000 characters;) and display appropriate error messages
- CRUD operations for product list
- JWT-based authentication for login
- Mongo DB database, CRUD
- Server side validation
- Front end: Angular
- Backend: Node js
