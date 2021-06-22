import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i <= 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context/Situation #1
// We are running this file in devlopment in isolation
// We are using local index.html file
// Which DEFINETLY has an element with an id of 'dev-product'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  // Assuming our CONTAINER doen't have an element 
  // with id 'dev-products'
  if (el) {

    // We are probably running in isolation 
    mount(el);
  }
}

// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-product'
// WE DO NOT WANT , try to immediately render the app

export { mount };
