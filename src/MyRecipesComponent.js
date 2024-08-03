function MyRecipesComponent({label, image, calories, ingredients, types}) {
     return (
        <div>
            <div className="container">
            <h2>{label}</h2>
            </div>
            <div className="container">
            <img src={image}  width='300px' alt='food'/>
            </div>
            <div className="container list">
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" className="icon" alt="icon"/>
                            {ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="container">
            <p>Dish type: {types}</p>
            <p> Calories {calories.toFixed()}</p>
            </div>
            
        </div>
         )
}

export default MyRecipesComponent;