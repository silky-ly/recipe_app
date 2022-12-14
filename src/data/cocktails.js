const cocktails = [
    {
        _id: '1',
        name: 'Cape Codder',
        image: '/images/cocktail-cape-codder.jpg',
        description:'',
        ingredients: [
            '2 ounces vodka',
            '3 ounces cranberry juice',
            'Lime wedge, for garnish',
        ],
        preparation: [
            'Gather the ingredients.',
            'In a highball glass with ice cubes, pour the vodka and cranberry juice.',
            'Stir well.',
            'Garnish with a lime wedge. Serve and enjoy',
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '2',
        name: 'Margarita and Daiquiri',
        image: '/images/cocktail-magarita.jpg',
        description:'',
        ingredients: [
        'Lime wedge, for optional rim and garnish',
        'Coarse salt, or granulated sugar, for optional rim',
        '1 1/2 ounces tequila',
        '1 ounce premium triple sec',
        '3/4 ounce freshly squeezed lime juice',
        ],
        preparation: [
        'Gather the ingredients. If desired, rim a chilled cocktail or margarita glass: Wet the rim with a lime wedge, then dip or roll it in a small dish of salt or sugar.',
        'Pour the tequila, triple sec, and lime juice into a cocktail shaker filled with ice cubes.',
        'Shake well.',
        'Strain into the prepared glass with or without fresh ice.',
        'Garnish with a lime wedge. Serve and enjoy.',
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '3',
        name: 'The Classic Daiquiri',
        image: '/images/cocktail-daquiri.jpg',
        description:'',
        ingredients: [
            '1 1/2 ounces light rum',
            '3/4 ounce freshly squeezed lime juice',
            '1/2 to 3/4 ounce simple syrup, to taste',
        ],
        preparation: [
            'Gather the ingredients.',
            'Add the ingredients to a cocktail shaker with ice cubes.',
            'Shake well.',
            'Strain into a chilled cocktail glass. Serve and enjoy.',
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '4',
        name: 'Black Russian Cocktail',
        image: '/images/cocktail-black-russian.jpg',
        description:'',
        ingredients: [
            '1 1/2 ounces vodka',
            '3/4 ounce coffee liqueur',
            'Maraschino cherries, optional, for garnish',
        ],
        preparation: [
            'Gather the ingredients.',
            'In an old-fashioned glass filled with ice, pour the vodka and coffee liqueur.',
            'Stir well.',
            'Garnish with cherries, if desired. Serve and enjoy.'
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '5',
        name: 'Lemon Drop Martini',
        image: '/images/cocktail-lemon-drop-martini.jpg',
        description:'',
        ingredients: [
            'Granulated sugar, for rimming',
            'Lemon wedge, for rimming',
            '2 ounces vodka',
            '1 ounce freshly squeezed lemon juice',
            '1/2 to 3/4 ounce simple syrup, to taste',
            'Lemon twist, for garnish',
        ],
        preparation: [
            'Gather the ingredients.',
            'Rim a cocktail glass with sugar: Place the sugar in a shallow dish. Wipe a lemon wedge around the glass to wet the surface, then dip it into the sugar. Set aside to dry while you mix the drink.',
            'In a cocktail shaker filled with ice, pour the vodka, lemon juice, and simple syrup.',
            'Shake well.',
            'Strain into the rimmed glass.',
            'Garnish with a lemon twist. Serve and enjoy.'
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '6',
        name: 'Highball',
        image: '/images/cocktail-highball-2.jpg',
        description:'',
        ingredients: [
            '2 ounces whiskey',
            '4 to 6 ounces ginger ale, or club soda, to taste',
        ],
        preparation: [
            'Gather the ingredients.',
            'Fill a highball glass with ice.',
            'Pour the whiskey into the glass.',
            'Top with ginger ale. Serve and enjoy.',
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '7',
        name: 'Gin Rickey',
        image: '/images/cocktail-gin-rickey.jpg',
        description:'',
        ingredients: [
            '2 ounces gin',
            '1/2 ounce freshly squeezed lime juice',
            '4 ounces club soda, or to taste',
            'Lime wedge, for garnish',
        ],
        preparation: [
            'Gather the ingredients.',
            'Fill a highball glass with ice.',
            'Pour the gin and lime juice over the ice.',
            'Top with club soda.',
            'Garnish with a lime wedge. Serve and enjoy.'
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '8',
        name: 'Gin and Tonic',
        image: '/images/cocktail-gin-tonic.jpg',
        description:'',
        ingredients: [
            '2 ounces gin',
            '4 to 6 ounces tonic water, to taste',
            'Lime wedge, for garnish',
        ],
        preparation: [
            'Gather the ingredients.',
            'In a highball glass filled with ice cubes, pour the gin, then top with tonic.',
            'Gently stir to combine, but not so much so that you lose carbonation.',
            'Garnish with a lime wedge. Serve and enjoy.'
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '9',
        name: 'The Rum and Coke',
        image: '/images/cocktail-rum-coke.jpg',
        description:'',
        ingredients: [
            '2 ounces light or dark rum',
            '4 to 6 ounces Coca-Cola, to taste',
            'Lime wedge, for garnish',
        ],
        preparation: [
            'Gather the ingredients.',
            'Pour the rum into a highball glass filled with ice.',
            'Top with cola.',
            'Garnish with a lime wedge. Serve and enjoy.'
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '10',
        name: 'Kir Cocktail',
        image: '/images/cocktail-kir.jpg',
        description:'',
        ingredients: [
            '1/4 ounce cr??me de cassis liqueur',
            '5 ounces dry white wine, chilled',
        ],
        preparation: [
            'Gather the ingredients.',
            'In a wine glass, pour the cr??me de cassis.',
            'Slowly add the dry white wine.',
            'Serve and enjoy.'
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '11',
        name: 'The Classic Cuban Mojito',
        image: '/images/cocktail-mojito.jpg',
        description:'',
        ingredients: [
            '2 teaspoons superfine sugar',
            '6 to 8 fresh mint leaves',
            '2 to 3 ounces club soda, divided, to taste',
            '1 lime',
            '2 ounces light rum',
            'Mint sprig, for garnish',
        ],
        preparation: [
            'Gather the ingredients.',
            'In a highball glass, add the sugar, mint leaves, and a splash of the club soda.',
            'Muddle just enough to dissolve the sugar and release the flavor of the mint.',
            'Squeeze the juice from the 2 halves of lime into the glass. Drop 1 squeezed half into the glass if you like.',
            'Add the rum and stir well.',
            'Fill the glass with ice cubes and top with club soda.',
            'Garnish with a mint sprig. Serve and enjoy.'
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '12',
        name: 'Moscow Mule',
        image: '/images/cocktail-moscow-mule.jpg',
        description:'',
        ingredients: [
            '2 ounces vodka',
            '1/2 ounce freshly squeezed lime juice',
            '4 ounces ginger beer',
            'Lime wedge, for garnish',
        ],
        preparation: [
            'Gather the ingredients.',
            'Pour the vodka and lime juice into a copper mug, stainless steel mug, or collins glass filled with ice cubes.',
            'Top off with the ginger beer and garnish with a lime wedge. Serve and enjoy.',
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '13',
        name: 'Michelada',
        image: '/images/cocktail-michelada.jpg',
        description:'',
        ingredients: [
            '1 ounce lime juice',
            '3 dashes hot sauce',
            '3 dashes soy sauce',
            '2 dashes Worcestershire sauce',
            'Ground black pepper, to taste',
            '1 (12-ounce) bottle Mexican beer',
            'Lime slice, for garnish',
        ],
        preparation: [
            'Gather the ingredients.',
            'Fill a chilled beer mug or pint glass halfway with ice.',
            'Add the lime juice, sauces, and pepper.',
            'Stir until well mixed.',
            'Slowly top with beer.',
            'Garnish with a slice of lime. Serve and enjoy.'
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '14',
        name: 'Caf?? Caribbean Cocktail',
        image: '/images/cocktail-cafe-caribbean.jpg',
        description:'',
        ingredients: [
            '1 ounce rum',
            '1/2 ounce amaretto liqueur',
            '6 ounces hot black coffee',
            'Whipped cream, for garnish',
            'Sliced almonds, for garnish',
        ],
        preparation: [
            'Gather the ingredients.',
            'Pour the rum and amaretto into an Irish coffee glass or coffee mug.',
            'Fill with hot coffee.',
            'Top with whipped cream and garnish with sliced almonds. Serve and enjoy!'
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '15',
        name: 'Strawberry Vodka Lemonade',
        image: '/images/cocktail-strawberry-vodka.jpg',
        description:'',
        ingredients: [
            '4 medium strawberries, sliced',
            '1 1/2 ounces vodka',
            '3 ounces lemonade',
            'Sliced strawberry, for garnish',
        ],
        preparation: [
            'Gather the ingredients.',
            'Muddle the strawberries in the bottom of a tumbler or old-fashioned glass.',
            'Add ice, followed by the vodka.',
            'Top with the lemonade.',
            'Garnish with strawberry slices laid out in a fan. Serve and enjoy.'
        ],
        rating: 4.5,
        numReviews: 12,
    },

  ]
  
  export default cocktails
  