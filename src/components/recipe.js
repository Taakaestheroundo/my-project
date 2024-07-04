import  React from 'react';


const recipes = [
    {
        id: 1,
        title: 'Organic Banana Bread',
        description: 'A delicious and healthy banana bread made with organic flour.',
        ingredients: ['3 ripe bananas', '1/3 cup melted butter', '1 teaspoon baking soda', 'Pinch of salt', '3/4 cup sugar', '1 beaten egg', '1 teaspoon vanilla extract', '1 1/2 cups of organic flour'],
        steps: [
            'Preheat your oven to 350°F (175°C), and butter a 4x8 inch loaf pan.',
            'In a mixing bowl, mash the ripe bananas with a fork until smooth. Stir the melted butter into the mashed bananas.',
            'Mix in the baking soda and salt. Stir in the sugar, beaten egg, and vanilla extract. Mix in the flour.',
            'Pour the batter into your prepared loaf pan. Bake for 60-65 minutes at 350°F (175°C), or until a tester inserted into the center comes out clean.',
            'Remove from oven and let cool in the pan for a few minutes, then remove the banana bread from the pan and let cool completely before serving.'
        ]
    },
    {
        id: 2,
        title: 'Organic Maize Porridge',
        description: 'A nutritious and hearty maize porridge perfect for breakfast.',
        ingredients: ['1 cup maize flour', '4 cups water', '1/2 teaspoon salt', 'Milk or sugar to taste'],
        steps: [
            'Bring the water to a boil in a pot.',
            'Add the maize flour gradually while stirring continuously to avoid lumps.',
            'Reduce the heat and let it simmer for about 10-15 minutes, stirring occasionally.',
            'Add salt and continue to cook until the porridge thickens to your desired consistency.',
            'Serve hot with milk or sugar to taste.'
        ]
    }
];

const Recipes = () => {
    return (
        <section id="recipes">
            <h2>Our Recipes</h2>
            {recipes.map(recipe => (
                <div key={recipe.id} className="recipe">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <h4>Ingredients:</h4>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h4>Steps:</h4>
                    <ol>
                        {recipe.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            ))}
        </section>
    );
}

export default Recipes;

