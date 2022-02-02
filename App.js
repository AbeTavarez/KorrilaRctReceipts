const receipt1 =
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  }
const receipt2 = {
  person: 'Jerrica',
  order: {
    main: 'Rice Bowl',
    protein: 'Ginger Soy Chix',
    rice: 'Sticky Rice',
    sauce: 'Korilla',
    toppings: [
      'Yuzu Pickled Sweet Pepper', 'Kale'
    ],
    drink: 'Korchata',
    cost: 19
  },
  paid: false
}
const receipt3 = {
  person: 'Matt',
  order: {
    main: 'Salad Bowl',
    protein: 'Organic Tofu',
    rice: 'none',
    sauce: "K'lla",
    toppings: [
      'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
    ],
    drink: 'Sparkling Blood Orange Soda',
    cost: 20
  },
  paid: true
}

// TODO: 1.Create an <App /> component that renders an H1 with some text.
class App extends React.Component {
    state = {
        receipt1,
        receipt2,
        receipt3
    }

    render() {
        return(
           <div>
               <h1>Korilla React Receipts</h1>
               {receipt1.paid ? <Receipt receipt={receipt1}/> : ''}
               {receipt2.paid ? <Receipt receipt={receipt2}/> : ''}
               {receipt3.paid ? <Receipt receipt={receipt3}/> : ''}
           </div>
        )
    }
}

// TODO: 2.Make a <Receipt /> component that renders the first receipt's 
//* person
//* order: main, protein, rice, sauce, drink, cost

class Receipt extends React.Component {
    render() {
        const { person, order } = this.props.receipt;
        return(
            <div>
                <h2>Person: { person }</h2>
                <h3>Main: { order.main }</h3>
                <p>Protein: { order.protein }</p>
                <p>Rice: { order.rice }</p>
                <p>Sauce: { order.sauce }</p>
                <p>Drink: { order.drink }</p>
                <p>Cost: { order.cost }</p>
            </div>
        )
    }
}

// TODO: Use ReactDOM to render your App in the browser.
ReactDOM.render(<App />, document.getElementById('root'));