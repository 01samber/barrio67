export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  tags?: string[];
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const MENU_DATA: MenuCategory[] = [
  {
    name: 'BREAKFAST',
    items: [
      { name: 'Lebanese Mix Plate', description: 'Labneh platter, scrambled eggs, white cheese, zaatar, mini manakish, foul mdammas, veggies, halewe and jam', price: '25.00 $', tags: ['Popular', 'New'] },
      { name: 'TUNA MELT', description: 'Canned Tuna, siracha ranch, mozarella, avocado, mixed greens and pickled oinions on crispy sourdough', price: '8.00 $', tags: ['New'] },
      { name: 'SMOKED SALMON BITE', description: 'Smoked salmon, mixed greens, lemon juice, capres, pickled oinions and cream cheese on crispy sourdough', price: '14.50 $', tags: ['New'] },
      { name: 'AROMA YOGURT', description: 'Homemade greek yogurt, blueberries, strawberries & granolla', price: '8.50 $', tags: ['New'] },
      { name: 'Croissant Cheese', price: '4.00 $' },
      { name: 'Croissant Zaatar', price: '4.00 $' },
      { name: 'Croissant Chocolat', price: '4.50 $' },
      { name: 'Croissant Plain', price: '3.00 $' },
      { name: 'Ham And Cheese Croissant', price: '5.00 $' },
      { name: 'Turkey And Cheese Croissant', price: '5.00 $' },
      { name: 'Labne Platter', description: 'Fresh labne served with fresh veggies', price: '8.00 $' },
      { name: 'Lebanese Omelet', description: 'Eggs blended with milk and labneh, parsley, onion and bell pepper', price: '6.00 $' },
      { name: 'Avocado Egg Toast', description: 'Crispy sour bread, topped with avocado sauce and scrambled eggs', price: '10.00 $' },
      { name: 'Grilled Halloumi', description: 'Grilled halloumi served on crispy sour bread with Lolo rosso and Pomegranate', price: '8.00 $' },
      { name: 'Omlette A La Barrio', description: 'Omelet topped with Ham and cheddar cheese, Asian spices and crispy bacon, served with cherry tomato and cucumber on the side', price: '11.00 $' },
      { name: 'Egg Burger', description: 'Sunny side up egg, avocado with mayo sauce, lolo rosso, tomatoes, mixed cheese and crispy bacon', price: '8.00 $' },
      { name: 'Ham And Cheese Bagle', description: 'Sunny side up egg, Ham and cream cheese, lolo rosso, Mexican Guacamole', price: '9.00 $' }
    ]
  },
  {
    name: 'SALADS',
    items: [
      { name: 'Chicken Salad', description: 'Grilled chicken breast, mixed greens, tomato, apple slices, avocado and cucumber. Served with lemon mayo sauce', price: '15.00 $' },
      { name: 'Halloumi Salad', description: 'Grilled halloumi, Mixed greens, Cherry tomato, cucumber, radish and red cabbage, served with white balsamic sauce', price: '13.00 $' },
      { name: 'Chicken Tacos', description: 'Fried tortilla bread filled with grilled chicken strips with green pepper, onions and mozarella cheese, topped with guacamole, pico de gallo and avocado slices, served with nachos chips', price: '17.00 $' }
    ]
  },
  {
    name: 'NEW DROPS',
    items: [
      { name: 'CORN RIBS', description: 'Fried corn ribs mixed with asian spices and lime wedge', price: '7.00 $' },
      { name: 'BACON AND BREE BRUSCHETTA', description: 'Bacon, brie cheese, fig jam, hot honey & balsamic reduction', price: '16.00 $' },
      { name: 'FETTA FILO', description: 'Authentic greek fetta cheese wrapped with filo pastry and topped with hot honey & sesame seeds', price: '8.00 $' },
      { name: 'TRUFFLE FRIES', description: 'Fries served with truffle mayo and topped with parmesan cheese', price: '7.00 $' },
      { name: 'SALMON SALAD', description: 'Mixed greens, cherry tomatoes, cucumber, red bell pepper, lemon slices & tarragon vinigrette', price: '19.00 $' },
      { name: 'MINI BURGERS', description: 'Three mini burgers served with caramelized onions, cheddar cheese, parmesan powder and siracha mayo', price: '13.00 $' },
      { name: 'STEAK SANDWICH', description: 'Grilled tenderloin with onions, cheddar and edam cheese, siracha mayo and pico de gallo sauce served in ciabatta bread', price: '14.00 $' },
      { name: 'CEASER SCHNITZEL', description: 'Breaded chicken breast topped with iceberg and baby rockets and served with ceaser sauce and parmesan cheese', price: '17.00 $' },
      { name: 'CHICKEN CORDON BLEU', description: 'Breaded Chicken breast filled with mozarella cheese and ham served with mashed potato and veggies topped with white sauce', price: '17.00 $' }
    ]
  },
  {
    name: 'APPETIZERS',
    items: [
      { name: 'Goat Cheese Bruschetta', description: 'Goat cheese topped with a mix of cherry tomatoes, Basil and Pomegranate, drizzled with olive oil and balsamic vinegar', price: '12.00 $' },
      { name: 'Spinach Dip', description: 'Fresh spinach, mixed cheese, cooked with garlic and onions', price: '16.00 $' },
      { name: 'Bacon Date', description: 'Wrapped bacon with brie cheese, pepperoni and dates', price: '11.00 $' },
      { name: 'Edamame', description: 'Garnished with sea salt flakes, served with soy sauce', price: '7.00 $' },
      { name: 'French Fries', price: '6.00 $' },
      { name: 'Chicken Tenders', description: 'Served with cocktail and BBQ sauce', price: '13.00 $' },
      { name: 'BRIE EN BRIOCHE', description: 'Brioche bread filled with Brie cheese, Strawberry jam and pistachios', price: '13.00 $' },
      { name: 'Crispy Halloumi Puffs', description: 'Breaded halloumi served with tomato salsa', price: '15.00 $' },
      { name: 'Chicken Teryaki Skewers', description: 'Grilled chicken breast, teriyaki sauce and sesame seeds', price: '12.00 $' },
      { name: 'Nachos', description: 'Add guacamole: 4$ add cheese: 2$ add sour cream: 2$ add salsa: 2$', price: '8.00 $' },
      { name: 'Baby Calamari With Oyster Sauce', description: 'Grilled baby calamari served with oyster sauce', price: '15.00 $' }
    ]
  },
  {
    name: 'SANDWICHES',
    items: [
      { name: 'Pulled Pork Sandwich', description: 'Pulled pork, BBQ sauce side fries', price: '12.00 $' },
      { name: 'Chicken Tai', description: 'Grilled chicken breast, onions and green bell pepper, topped with mozarella cheese, served with mayo, soy sauce and French fries', price: '13.00 $' }
    ]
  },
  {
    name: 'BURGERS',
    items: [
      { name: 'Classic Burger', description: '200g fresh beef patty, cheddar cheese, lolo rosso, grilled onions, tomato and pickles, served with our special sauce side fries. Add bacon: 2$ add eggs: 2$', price: '15.00 $' },
      { name: 'Supersonic Chicken Burger', description: 'Grilled chicken breast, emmental cheese, crispy bacon, pickles and tomatoes, topped with BBQ and Mayo sauce side fries', price: '12.00 $' },
      { name: 'Smash Burger', description: '3 beef patties, emmental and cheddar cheese, tomato onion salsa and truffle mayo sauce', price: '18.00 $' }
    ]
  },
  {
    name: 'MAIN DISHES',
    items: [
      { name: 'Bbq Ribs', description: 'Slow cooked baby ribs in beer and BBQ sauce, served with steak fries', price: '20.00 $' },
      { name: 'Salmon Crust', description: 'Grilled salmon, grilled carrots, Zucchini and eggplant, side salad, served with ginger white sauce', price: '25.00 $' },
      { name: 'Chicken Champagne', description: 'Grilled chicken breast, grilled Zucchini and carrots, topped with fresh mushrooms, served with champagne white sauce', price: '16.00 $' },
      { name: 'Ozzie Filet', description: '200g beef fillet cooked to your desire, served with mushroom sauce and steak fries', price: '25.00 $' },
      { name: 'Veggie Platter', description: 'Grilled zucchini, carrots, broccoli, eggplant and steak fries. Served with chimichurri sauce. Add chicken breast: 6$ add salmon fillet: 8$', price: '15.00 $' }
    ]
  },
  {
    name: 'DESSERT',
    items: [
      { name: 'Cheesecake', price: '12.00 $' },
      { name: 'Chocolate Pain Perdu', price: '10.00 $' }
    ]
  },
  {
    name: 'COCKTAILS',
    items: [
      { name: 'Jean', description: 'Gin infused in pears, japanese yuzu, lemon juice', price: '12.00 $' },
      { name: 'Darzito', description: 'Vodka, homemade limoncello, lemon juice, passionfruit pure, dash ginger ale mint leaves', price: '12.00 $' },
      { name: 'Granapa', description: 'Gin, lime cordial, pomegranate juice, basil leaves', price: '12.00 $' },
      { name: 'Barrio Spritz', description: 'Gin, Aperol, lemon juice, elder flower syrup, orange bitter dash', price: '12.00 $' },
      { name: 'Kamakura', description: 'Nordes gin, dry vermouth, Umeshu', price: '14.00 $' },
      { name: 'Zaatarita', description: 'Homemade Limoncello, thym liquor, japanese yuzu', price: '12.00 $' },
      { name: 'Rosemary Kiss', description: 'Vodka, lychee, lemon juice, dragon fruit, strawberry pure, rosemary leafs, soda water dash', price: '12.00 $' },
      { name: 'Summer Detox', description: 'Jamaican white rum, watermelon cordial, lillet blanc, archers, fresh ginger, pinch of salt', price: '12.00 $' },
      { name: 'Gin Basil', price: '9.99 $' },
      { name: 'Marguerita', price: '9.00 $' },
      { name: 'Moscow Mule', price: '10.00 $' },
      { name: 'Aperol Spritz', price: '10.00 $' },
      { name: 'Bloody Mary', price: '10.00 $' },
      { name: 'Old Fashioned', price: '9.00 $' },
      { name: 'Pitcher Gin Basil', price: '50.00 $' },
      { name: 'Pitcher Marguerita', price: '60.00 $' },
      { name: 'Passion-Fruit Martini', price: '10.00 $' },
      { name: 'Espresso Martini', price: '10.00 $' }
    ]
  },
  {
    name: 'HOT BEVERAGES',
    items: [
      { name: 'Espresso', price: '3.00 $' },
      { name: 'Double Espresso', price: '4.00 $' },
      { name: 'French Press', price: '4.50 $' },
      { name: 'Cafe Latte', price: '5.00 $' },
      { name: 'Cappuccino', price: '5.00 $' },
      { name: 'Hot Chocolate', price: '6.00 $' },
      { name: 'Infusion', price: '4.00 $' },
      { name: 'Nescafe', price: '2.50 $' },
      { name: 'Americano', price: '4.00 $' },
      { name: 'American Coffee', price: '5.00 $' },
      { name: 'Cafe Blanc', price: '2.00 $' }
    ]
  },
  {
    name: 'SOFT DRINKS',
    items: [
      { name: 'Pepsi', price: '3.00 $' },
      { name: 'Pepsi Diet', price: '3.00 $' },
      { name: '7up', price: '3.00 $' },
      { name: '7up Diet', price: '3.00 $' },
      { name: 'Large Water', price: '2.00 $' },
      { name: 'Small Water', price: '2.00 $' },
      { name: 'Ice Tea Lemon', price: '2.50 $' },
      { name: 'Ice Tea Peach', price: '2.50 $' },
      { name: 'Red Bull', price: '6.00 $' },
      { name: 'Wata', price: '3.10 $' },
      { name: 'Perrier', price: '4.00 $' },
      { name: 'Fresh Lemonade', price: '6.00 $' },
      { name: 'Fresh Orange Juice', price: '6.00 $' },
      { name: 'Three Cents Tonic', price: '3.50 $' },
      { name: 'Three Cents Dry Tonic', price: '3.50 $' },
      { name: 'Three Cents Pink Grapefruit Soda', price: '3.50 $' },
      { name: 'Three Cents Ginger Beer', price: '3.50 $' }
    ]
  },
  {
    name: 'BEER',
    items: [
      { name: 'Almaza', description: 'Lebanese pilsner beer', price: '4.00 $' },
      { name: 'Almaza Light 33cl', description: '2.2% alcohol and 77 calories per bottle', price: '4.00 $' },
      { name: 'Corona', description: 'Mexican lager beer', price: '6.00 $' },
      { name: 'Heineken', description: 'Dutch pale lager. Half Pint 5.99$ / Pint 7.00$', price: '7.00 $' },
      { name: 'Submarine', price: '10.00 $' },
      { name: 'Carlsberg', description: 'Danish style pale lager', price: '4.00 $' },
      { name: 'Budweiser Beer', description: 'American style pale lager', price: '6.00 $' },
      { name: 'Stella Artois Beer', description: 'Belgium lager beer', price: '6.00 $' },
      { name: 'El Mir Amber', description: 'Medium-bodied ale with aromas of caramelized malt and nuts', price: '6.05 $' },
      { name: 'El Mir Anfe', description: 'Medium dry sour wheat ale with soft wine like aroma', price: '6.05 $' },
      { name: 'El Mir IPA', price: '6.05 $' },
      { name: 'El Mir Pilsner', description: 'Medium-dry crisp German Pilsner with floral bouquet', price: '6.05 $' },
      { name: 'Noam', description: 'German natural, unfiltered lager', price: '8.33 $' }
    ]
  },
  {
    name: 'WINE & SPIRITS',
    items: [
      { name: 'SINGLE MALT', description: 'Glenfiddich, Macallan, Laphroaig & more', price: 'From 8.00 $' },
      { name: 'VODKA', description: 'Beluga, Grey Goose, Belvedere & more', price: 'From 10.00 $' },
      { name: 'RUM', description: 'Havana Club, Bacardi, Zacapa & more', price: 'From 8.00 $' },
      { name: 'GIN', description: 'Hendricks, Tanqueray, Portofino & more', price: 'From 8.00 $' },
      { name: 'TEQUILA', description: 'Jose Cuervo, Cenote, Kah & more', price: 'From 8.00 $' },
      { name: 'WHISKEY', description: 'Jameson, Jack Daniels, Chivas & more', price: 'From 7.00 $' },
      { name: 'COGNAC', description: 'Hennessy, Remy Martin & more', price: 'From 15.00 $' },
      { name: 'SPARKLING WINE', description: 'Laurent-Perrier, Prosecco & more', price: 'From 7.00 $' },
      { name: 'WHITE WINE', description: 'Ixir, Batroun Mountains & more', price: 'From 3.00 $' },
      { name: 'ROSE WINE', description: 'Ixir, Domaine Des Tourelles & more', price: 'From 5.00 $' },
      { name: 'RED WINE', description: 'Ixir, Batroun M., Ksara & more', price: 'From 5.00 $' }
    ]
  },
  {
    name: 'SHOTS',
    items: [
      { name: 'Jose Cuervo Gold Shot', price: '5.00 $' },
      { name: 'Jager', description: 'Shot 5.00$ / Glass 9.00$ / Bottle 70.00$', price: '5.00 $' },
      { name: 'B52', price: '8.00 $' },
      { name: 'Brain Damage', price: '5.00 $' },
      { name: 'Doudou', price: '5.00 $' }
    ]
  }
];
