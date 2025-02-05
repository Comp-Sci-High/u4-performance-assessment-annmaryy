const express = require('express')
const app = express()

let menu = {
foods: [
    {
      "name": "Classic Lasagna",
      "description": "A hearty Italian dish layered with rich meat sauce, creamy ricotta, and melted cheese.",
      "ingredients": "Ground beef, lasagna noodles, ricotta cheese, mozzarella cheese, parmesan cheese, marinara sauce, garlic, onion, olive oil, salt, pepper",
      "measurements": "1 lb ground beef, 12 lasagna noodles, 1 cup ricotta cheese, 2 cups mozzarella cheese, 1/2 cup parmesan cheese, 2 cups marinara sauce, 2 cloves garlic, 1 small onion, 1 tbsp olive oil, 1 tsp salt, 1/2 tsp pepper",
      "timeInOven": 45,
      "imageUrl": "https://example.com/lasagna.jpg"
    },
    {
      "name": "Chocolate Chip Cookies",
      "description": "Soft and chewy chocolate chip cookies with a golden brown finish.",
      "ingredients": "Flour, sugar, brown sugar, butter, eggs, vanilla extract, baking soda, salt, chocolate chips",
      "measurements": "2 1/4 cups flour, 1 cup sugar, 1/2 cup brown sugar, 1 cup butter, 2 eggs, 1 tsp vanilla extract, 1 tsp baking soda, 1/2 tsp salt, 2 cups chocolate chips",
      "timeInOven": 12,
      "imageUrl": "https://example.com/cookies.jpg"
    },
    {
      "name": "Garlic Butter Roasted Chicken",
      "description": "Juicy roasted chicken seasoned with garlic butter and fresh herbs.",
      "ingredients": "Whole chicken, butter, garlic, rosemary, thyme, lemon, salt, black pepper",
      "measurements": "1 whole chicken, 1/2 cup butter, 4 cloves garlic, 1 sprig rosemary, 1 sprig thyme, 1 lemon, 1 tsp salt, 1/2 tsp black pepper",
      "timeInOven": 90,
      "imageUrl": "https://example.com/roasted-chicken.jpg"
    },
    {
      "name": "Banana Bread",
      "description": "Moist and flavorful banana bread with a hint of cinnamon.",
      "ingredients": "Bananas, flour, sugar, eggs, butter, baking soda, vanilla extract, cinnamon",
      "measurements": "3 ripe bananas, 2 cups flour, 1 cup sugar, 2 eggs, 1/2 cup butter, 1 tsp baking soda, 1 tsp vanilla extract, 1/2 tsp cinnamon",
      "timeInOven": 60,
      "imageUrl": "https://example.com/banana-bread.jpg"
    },
    {
      "name": "Baked Mac and Cheese",
      "description": "Creamy and cheesy macaroni baked to perfection with a crispy topping.",
      "ingredients": "Elbow macaroni, cheddar cheese, milk, butter, flour, breadcrumbs, salt, black pepper",
      "measurements": "2 cups elbow macaroni, 2 cups cheddar cheese, 2 cups milk, 1/4 cup butter, 2 tbsp flour, 1/2 cup breadcrumbs, 1 tsp salt, 1/2 tsp black pepper",
      "timeInOven": 25,
      "imageUrl": "https://example.com/mac-and-cheese.jpg"
    },
    {
      "name": "Lemon Pound Cake",
      "description": "A moist and buttery pound cake infused with fresh lemon zest.",
      "ingredients": "Flour, sugar, butter, eggs, lemon zest, lemon juice, baking powder, salt",
      "measurements": "2 cups flour, 1 1/2 cups sugar, 1 cup butter, 4 eggs, 1 tbsp lemon zest, 1/4 cup lemon juice, 1 tsp baking powder, 1/2 tsp salt",
      "timeInOven": 50,
      "imageUrl": "https://example.com/lemon-pound-cake.jpg"
    },
    {
      "name": "Stuffed Bell Peppers",
      "description": "Bell peppers stuffed with seasoned ground beef, rice, and tomato sauce.",
      "ingredients": "Bell peppers, ground beef, rice, onion, garlic, tomato sauce, mozzarella cheese, salt, pepper",
      "measurements": "4 bell peppers, 1 lb ground beef, 1 cup cooked rice, 1 small onion, 2 cloves garlic, 1 cup tomato sauce, 1/2 cup mozzarella cheese, 1 tsp salt, 1/2 tsp pepper",
      "timeInOven": 35,
      "imageUrl": "https://example.com/stuffed-peppers.jpg"
    },
    {
      "name": "Blueberry Muffins",
      "description": "Soft and fluffy muffins loaded with fresh blueberries.",
      "ingredients": "Flour, sugar, butter, eggs, milk, baking powder, salt, vanilla extract, blueberries",
      "measurements": "2 cups flour, 3/4 cup sugar, 1/2 cup butter, 2 eggs, 1 cup milk, 2 tsp baking powder, 1/2 tsp salt, 1 tsp vanilla extract, 1 1/2 cups blueberries",
      "timeInOven": 20,
      "imageUrl": "https://example.com/blueberry-muffins.jpg"
    },
    {
      "name": "Shepherd's Pie",
      "description": "A comforting dish made with seasoned ground beef and mashed potatoes.",
      "ingredients": "Ground beef, potatoes, butter, milk, onion, carrots, peas, beef broth, salt, pepper",
      "measurements": "1 lb ground beef, 4 potatoes, 1/4 cup butter, 1/2 cup milk, 1 small onion, 2 carrots, 1/2 cup peas, 1 cup beef broth, 1 tsp salt, 1/2 tsp pepper",
      "timeInOven": 30,
      "imageUrl": "https://example.com/shepherds-pie.jpg"
    },
    {
      "name": "Apple Crisp",
      "description": "A warm and comforting apple dessert with a crispy oat topping.",
      "ingredients": "Apples, oats, flour, brown sugar, cinnamon, butter",
      "measurements": "4 apples, 1 cup oats, 1/2 cup flour, 1/2 cup brown sugar, 1 tsp cinnamon, 1/4 cup butter",
      "timeInOven": 40,
      "imageUrl": "https://example.com/apple-crisp.jpg"
    }
  ]
  
}

app.set('view engine', 'ejs');

app.use((req,res,next)=>{
  console.log(req.method + " " + req.path)
  next()
})

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/public/index.html")
})

app.get("/all", (req,res)=>{
  res.render("menu.ejs", menu[0])
})

app.get("/dish/:id", (req,res)=>{
  res.render("foods.ejs",menu[0].foods[0])
})

app.listen(3000, () =>{
  console.log("Server running")
})