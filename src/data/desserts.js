const desserts = [
  {
      _id: '1',
      name: 'Fluffy Pancakes',
      image: '/images/fluffy-pancakes.jpg',
      description:'',
      ingredients: [
          '4 cups flour (500 g), sifted',
          '4 tablespoons baking powder',
          '4 cups milk (960 mL), warm to the touch',
          '¾ cup butter (170 g), melted',
          '3 egg yolks',
          '4 egg whites',
          'maple syrup, to serve'
      ],
      preparation: [
          'Whisk together the flour and baking powder in a large bowl.',
          'In a separate bowl, add the butter, milk, and egg yolks, stirring to combine.',
          'In a third bowl, use a hand mixer to beat the egg whites until soft peaks form.',
          'Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine.',
          'Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter.',
          'Serve with maple syrup.',
          'Enjoy!'
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '2',
      name: 'Oreo Truffles',
      image: '/images/oreo-truffles.jpg',
      description:'',
      ingredients: [
      '1 (14 oz.) package Oreos',
      '8 oz. cream cheese, softened',
      '1 tsp. pure vanilla extract',
      '2 c. white chocolate chips, melted',
      '1/2 c. semisweet chocolate chips, melted',
      ],
      preparation: [
      'Use a food processor to crush cookies into fine crumbs.',
      'Add all but 2 tablespoons crushed cookies to a medium bowl. Add cream cheese and vanilla and stir until evenly combined.',
      'Line a baking sheet with parchment paper. Using a small cookie scoop, form mixture into small balls. Place on prepared baking sheet and freeze until slightly hardened, about 30 minutes.',
      'Dip the frozen balls in melted white chocolate until coated and return to baking sheet. Drizzle with semisweet chocolate. Freeze until chocolate hardens, about 15 minutes.',
      'Want to drizzle your truffles with chocolate instead? Melt 1/4 cup semisweet chocolate chips in the microwave and use a spoon to drizzle over hardened truffles. Place back in the freezer to harden, 10 to 15 minutes, before serving.',
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '3',
      name: 'Chocolate Covered Oreos',
      image: '/images/chocolate-oreo.jpg',
      description:'',
      ingredients: [
          '12 Oreos',
          '1 1/2 c. semisweet chocolate chips, melted',
          '2 tsp. coconut oil, optional',
          '1/4 c. white chocolate chips, melted',
          '1/2 c. semisweet chocolate chips, melted',
      ],
      preparation: [
          'Line a small baking sheet with parchment paper. In a medium shallow bowl, stir together melted semisweet chocolate and coconut oil if using. Dip each Oreo in the melted chocolate, then place on the parchment lined baking sheet. Place in the refrigerator to set, 10 minutes.',
          'Use a spoon to drizzle white chocolate onto Oreos. Return to the refrigerator to set, 10 minutes longer.',
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '4',
      name: 'Cookie Dough Ice Cream Sandwiches',
      image: '/images/ice-cream-sandwich.jpg',
      description:'',
      ingredients: [
          '1 c. (2 sticks) melted butter',
          '1 c. packed brown sugar',
          '3/4 c. sugar',
          '1/4 c. milk (preferably whole or 2%)',
          '1 tsp. pure vanilla extract',
          '2 1/2 c. all-purpose flour*',
          '1 tsp. kosher salt',
          '1 1/2 c. mini chocolate chips',
          '3 qt. vanilla ice cream, softened',
      ],
      preparation: [
          'Line a large baking sheet with parchment paper, leaving overhang on sides. In a large bowl, stir together melted butter, both sugars, milk, and vanilla until combined. Stir in flour and salt, then fold in chocolate chips.',
          'Press cookie dough into prepared baking sheet, evening it out as much as possible (a cutting board can help). Top with a second piece of parchment and freeze until firm, 1 hour.',
          'Remove cookie dough from pan and place on a cutting board. Slice dough down the center. Scoop ice cream on one half, then gently place other half of cookie dough on top. Transfer back to pan and freeze at least 4 hours and up to overnight.',
          'Slice into sandwiches and serve.',
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '5',
      name: 'Chocolate-Covered Cake Balls',
      image: '/images/chocolate-cake-balls.jpg',
      description:'',
      ingredients: [
          '1 box cake mix, plus ingredients called for on box',
          '3/4 c. (1 1/2 sticks butter), softened',
          '3 c. powdered sugar',
          '3 tbsp. heavy cream',
          '1 tsp. pure vanilla extract',
          'Pinch kosher salt',
          '2 c. white chocolate chips',
          '2 c. semi-sweet chocolate chips',
          '4 tbsp. coconut oil, divided',
          'Sprinkles, for decorating',
      ],
      preparation: [
          'Preheat oven to 350° and grease a 9”-x-13” baking pan with cooking spray. Prepare cake mix according to box instructions and spread evenly into prepared pan. Bake until a toothpick inserted into the center comes out clean, about 30 minutes. Let cool then break cake into small crumbs.',
          'In a large bowl using a hand mixer, beat butter until smooth, then add sugar and beat until combined. Add cream, vanilla, and salt and mix until smooth. (Add more cream if frosting is too thick.)',
          'Line a large baking sheet with parchment paper. Stir cake crumbs into frosting, then form mixture into tablespoon-sized balls. Place on a prepared baking sheet and refrigerate until firm, 1 hour.',
          'In a deep-sided heatproof bowl, microwave white chocolate and 2 tablespoons coconut oil in 30 second intervals until melted. Repeat process with semisweet chocolate.',
          'Dip chilled cake balls into melted chocolate, shaking off excess chocolate. Immediately decorate with sprinkles and return to baking sheet. Refrigerate until hardened, 15 minutes.',
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '6',
      name: 'Chess Pie',
      image: '/images/chess-pie.jpg',
      description:'',
      ingredients: [
          '1 pie crust',
          '4 large eggs',
          '1 1/2 c. granulated sugar',
          '1/2 c. (1 stick) butter, melted and cooled slightly',
          '1/4 c. milk',
          '1 tbsp. white vinegar',
          '2 tsp. pure vanilla extract',
          '1/4 c. cornmeal',
          '1 tbsp. all-purpose flour',
          '1/2 tsp. kosher salt',
      ],
      preparation: [
          'Preheat oven to 425°. Roll out pie crust and place in a 9” round pie dish. Trim and crimp edges and poke bottom of crust all over with a fork. Place in freezer to chill for 15 minutes.',
          'Place parchment paper inside pie crust and fill with pie weights or dried beans. Bake until golden about 15 minutes, then carefully remove parchment and pie weights and bake 10 minutes more. Let cool while making pie filling.',
          'Reduce oven temperature to 325°. In a large bowl whisk eggs and sugar together. Add melted butter, milk, vinegar, and vanilla and whisk until incorporated. Add cornmeal, flour, and salt and whisk until combined.',
          'Pour filling into pie crust and bake until just set in the middle, 50 minutes. Let cool at room temperature for at least 4 hours, then place in refrigerator until ready to serve.',
          'Dust with powdered sugar before serving.',
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '7',
      name: 'Brownie Lasagna',
      image: '/images/brownie-lasagna.jpg',
      description:'',
      ingredients: [
          'Cooking spray',
          '2 boxes brownie mix, plus ingredients called for on box',
          '2 (8-oz.) blocks cream cheese, softened',
          '4 c. powdered sugar',
          '2 tsp. pure vanilla extract',
          '1/4 tsp. kosher salt',
          '2 c. chocolate chips',
          '1 c. heavy cream',
          '1/4 c. chocolate shavings',
      ],
      preparation: [
          'Preheat oven to 350° and line a 9”-x-13” baking pan with parchment paper and grease with cooking spray. Prepare brownie mixes according to package directions and pour both batters into prepared pan. Bake until a toothpick inserted into the middle comes out clean, 40 minutes. Let cool completely.',
          'Make cream cheese layer: In a large bowl, using a hand mixer, beat cream cheese until smooth. Add powdered sugar and beat until no lumps remain, then add vanilla and salt and beat until combined.',
          'Make ganache: Place chocolate chips in a medium, heatproof bowl. In a small saucepan over medium heat, heat heavy cream and bring to a boil. Pour cream over chocolate chips and let sit 5 minutes then whisk until smooth. Let cool slightly.',
          'Remove brownie from pan and cut in half widthwise then cut each piece in half horizontally, to make a total of 4 thin layers. Place one piece of brownie on a platter then spread a thin layer of ganache on top. Add about ⅓ of cream cheese filling then top with another layer of brownie. Repeat layers, topping the final layer of brownie with ganache, reserving some for serving. Refrigerate for 1 hour or until well chilled.',
          'Top with chocolate shavings and drizzle with additional ganache before serving.',
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '8',
      name: 'Reese\'s Stuffed Rice Krispies Treats',
      image: '/images/stuffed-rice-krispies.jpg',
      description:'',
      ingredients: [
          'Cooking spray, for pan',
          '5 tbsp. butter',
          '1 (10-oz.) bag marshmallows',
          '1/2 c. smooth peanut butter',
          'Pinch kosher salt',
          '6 c. Rice Krispies Cereal',
          '24 Reese\'s cups',
          '1/4 c. melted peanut butter, for garnish',
          '1/4 c. melted chocolate, for garnish',
      ],
      preparation: [
          'Line a 9”-x-13” pan with parchment paper and grease with cooking spray. In a large pot over medium-low heat, melt butter. Stir in marshmallows, peanut butter, and salt and stir until mixture is melted. Remove from heat.',
          'Immediately add Rice Krispies and stir with a rubber spatula until combined. Working quickly, press half of mixture into an even layer in pan, then top with a layer of Reese’s. Press remaining mixture over Reese’s.',
          'Drizzle with melted chocolate and peanut butter, then refrigerate until cool, about 30 minutes.',
          'Slice into squares and serve.',
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '9',
      name: 'Blueberry Cheesecake Egg Rolls',
      image: '/images/cheesecake-eggrolls.jpg',
      description:'',
      ingredients: [
          '2 1/2 c. blueberries',
          'Juice of 1/2 lemon',
          '1 tbsp. granulated sugar',
          '2 (8-oz.) blocks cream cheese, softened',
          '1/2 c. granulated sugar',
          '1/2 c. sour cream',
          '1 tsp. pure vanilla extract',
          'Pinch kosher salt',
          '18 egg roll wrappers',
          'Vegetable oil, for frying',
          'Powdered sugar, for garnish',
      ],
      preparation: [
          'Make blueberry sauce: In a small sauce pan over medium heat, combine blueberries, lemon juice, and sugar. Bring to a simmer and cook until thick and jammy, 5 to 7 minutes. Remove from heat and let cool slightly.',
          'Make cheesecake mixture: In a large bowl using a hand mixer, beat together cream cheese, sugar, sour cream, vanilla, and kosher salt until fully combined.',
          'Place an egg roll wrapper on a clean surface in a diamond shape and spoon approximately 2 tablespoons cream cheese mixture into a line in the center. Top with a heaping spoonful of blueberry sauce. Fold up bottom half and tightly fold in sides. Gently roll, then seal fold with a couple drops of water.',
          'In a large skillet over medium heat, pour enough oil to reach 1" up the side of skillet. Heat until oil starts to bubble when a drop of water is added. Add egg rolls and fry until golden, 1 minute per side. Transfer to a paper towel-lined plate to cool slightly. Dust with powdered sugar and serve.',
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '10',
      name: 'Peanut Butter No-Bake Cookies',
      image: '/images/peanut-butter-cookies.jpg',
      description:'',
      ingredients: [
          '1 c. granulated sugar',
          '3/4 c. packed brown sugar',
          '1/2 c. (1 stick) butter, cut into cubes',
          '1/2 c. milk',
          '1 c. smooth peanut butter',
          '2 tsp. pure vanilla extract',
          '1/2 tsp. kosher salt',
          '2 1/2 c. old-fashioned oats',
      ],
      preparation: [
          'Line a large baking sheet with parchment paper. In a medium saucepan over medium heat, combine sugars, butter, and milk. Bring mixture to a boil and boil 1 minute.',
          'Remove from heat and stir in peanut butter, vanilla, and salt until combined, then stir in oats.',
          'Drop tablespoonfuls of mixture onto prepared baking sheet and let set until cooled and hardened, about 30 minutes.',
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '11',
      name: 'No-Bake Cheesecake',
      image: '/images/no-bake-cheesecake.jpg',
      description:'',
      ingredients: [
          '1 sleeve graham crackers, crushed',
          '5 tbsp. butter, melted',
          '1/4 c. granulated sugar',
          'Pinch kosher salt',
          '1 c. heavy cream',
          '2 (8-oz.) blocks cream cheese, softened',
          '1/4 c. sour cream',
          '1 c. powdered sugar',
          '1 tsp. pure vanilla extract',
          '1 tsp. lemon juice',
          'Pinch of kosher salt',
      ],
      preparation: [
          'In a large bowl, mix together graham cracker crumbs, butter, sugar, and salt. Press into the bottom of an 8" springform pan and up the sides.',
          'In a large bowl using a hand mixer (or in the bowl of a stand mixer), beat heavy cream until stiff peaks form, 5 minutes.',
          'In another large bowl beat cream cheese and sour cream until smooth then add powdered sugar, vanilla, lemon juice, and salt. Fold whipped cream into cream cheese mixture then pour mixture over crust and smooth top with an offset spatula.',
          'Cover and refrigerate at least 4 hours.',
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '12',
      name: 'Mrs. Fields Chocolate Chip Cookies',
      image: '/images/mrs-fields-chocolate-cookies.jpg',
      description:'',
      ingredients: [
          '2 3/4 c. all-purpose flour',
          '1 tsp. baking soda',
          '3/4 tsp. kosher salt',
          '1 c. (2 sticks) butter, cold, cut into cubes',
          '1 c. packed dark brown sugar',
          '1/2 c. granulated sugar',
          '2 large eggs',
          '2 tsp. pure vanilla extract',
          '2 c. chocolate chips',
      ],
      preparation: [
          'Preheat oven to 350° and line two large baking sheets with parchment paper. In a medium bowl, whisk together flour, baking soda, and salt. ',
          'In another large bowl, using a hand mixer, cream together butter and sugars until mixture resembles coarse sand. Add eggs, one at a time, beating well after each. Scrape down sides of bowl, add vanilla, and beat until combined. Add dry ingredients and mix until just combined, then stir in chocolate chips.',
          'Using a medium cookie scoop, scoop dough 2" apart onto prepared pans. Bake until golden and edges are set, but middles are still soft, 13 to 15 minutes.',
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '13',
      name: 'Death by Chocolate Brownies',
      image: '/images/death-by-chocolate-brownies.jpg',
      description:'',
      ingredients: [
          '1 1/4 c. all-purpose flour',
          '1 tsp. kosher salt',
          '1/4 c. unsweetened cocoa powder',
          '2 c. chocolate chips, divided',
          '1 c. (2 sticks) butter, cut into 1" pieces',
          '1 1/2 c. granulated sugar',
          '1/2 c. packed brown sugar',
          '5 large eggs, at room temperature',
          '2 tsp. pure vanilla extract',
      ],
      preparation: [
          'Preheat oven to 350°. Butter a 9”-×-13” inch baking pan and line with parchment paper. In a medium bowl, whisk together flour, salt, and cocoa powder.',
          'Set a large heat-proof bowl over a saucepan of simmering water to create a double-boiler. Add butter and 1 1/2 cups chocolate chips to bowl. Heat, stirring occasionally until the chocolate and butter are completely melted and smooth. Remove bowl from heat, then whisk in sugars and stir until combined.',
          'Add eggs one at a time, stirring well between each addition, then stir in vanilla. Add flour mixture to chocolate mixture and fold in dry ingredients with a rubber spatula until just combined. Fold in remaining 1/2 cup chocolate chips.',
          'Pour batter into prepared pan. Bake until a toothpick inserted into center of brownies comes out with a few moist crumbs, about 30 minutes. Let cool completely in pan.'
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '14',
      name: 'S\'mores Grilled Cheese',
      image: '/images/grilled-cheese.jpg',
      description:'',
      ingredients: [
          '4 tbsp. butter',
          '8 slices white bread',
          '4 c. mini marshmallows',
          '1 c. chocolate chips',
          '4 graham crackers, crushed',
          '1/4 c. cinnamon sugar',
      ],
      preparation: [
          'To make one sandwich, top a slice of bread with 1 cup marshmallows, 1/4 cup chocolate chips, and ¼ of crushed graham crackers. Repeat to make 4 sandwiches.',
          'In a large skillet over medium heat, melt butter. Working in batches, cook sandwiches until golden and toasted on both sides, about 2 minutes per side.',
          'Immediately sprinkle cinnamon sugar over sandwiches and serve warm.',
      ],
      rating: 4.5,
      numReviews: 12,
  },
  {
      _id: '15',
      name: 'Earthquake Cake',
      image: '/images/earthquake-cake.jpg',
      description:'',
      ingredients: [
          '1 c. sweetened shredded coconut',
          '1/2 c. chopped toasted pecans',
          '1 box German chocolate cake mix, plus ingredients called for on box',
          '8 oz. cream cheese, softened to room temperature',
          '1/2 c. butter, melted',
          '1 tsp. pure vanilla extract',
          'kosher salt',
          '2 c. chocolate chips',
          'Vanilla ice cream, for serving (optional)',
      ],
      preparation: [
          'Preheat oven to 350° and grease a 9"-x-13” baking pan with cooking spray. Spread coconut and pecans on the bottom of the pan.',
          'Prepare cake batter according to package directions, then pour on top of coconut and pecans.',
          'In a large bowl, combine cream cheese, butter, powdered sugar, vanilla and a pinch of salt. Beat with a hand mixer until light and fluffy. Spread the mixture over the chocolate batter then sprinkle chocolate chips on top. Bake until a toothpick inserted into the middle of the cake comes out clean, about 50 minutes.',
          'Serve warm with ice cream.'
      ],
      rating: 4.5,
      numReviews: 12,
  },

]

export default desserts
