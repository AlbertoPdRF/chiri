import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import ProductCard from './ProductCard';

import Style from './Style';

const Products = () => {
  const style = Style();

  return (
    <Fragment>
      <div className={style.root}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            {groupProducts(products)
              .sort((a, b) => -b.category.localeCompare(a.category))
              .map((productsGroup) => (
                <ExpansionPanel key={productsGroup.category}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    {productsGroup.category}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container justify="center" spacing={2}>
                      {productsGroup.products
                        .map((product) => (
                          <Grid item key={product.id} md={4} sm={6} xs={12}>
                            <ProductCard product={product} />
                          </Grid>
                        ))}
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ))}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

const groupProducts = (products) => {
  const productsGroups = {};
  const groupedProducts = [];

  products.forEach((product) => {
    if (!productsGroups[product.category]) {
      productsGroups[product.category] = [];
      groupedProducts.push({
        category: product.category,
        products: productsGroups[product.category],
      });
    }
    productsGroups[product.category].push(product);
  });

  return groupedProducts;
};

const products = [
  {
    name: "Giant burger XXL",
    description: "220 g de carne de vacuno 100 % especiada, lechuga, tomate en rodajas, salsa burger, salsa mostaza dulce, pepinillos y cebolla frita crujiente, en nuestro pan XXL con semillas de sésamo",
    category: "Hamburguesas",
    price: 790,
  },
  {
    name: "Piscina",
    description: "Carne ranch gourmet (150 g), lechuga picada, tomate natural y cebolla natural, en nuestro pan con semillas de sésamo",
    category: "Hamburguesas",
    price: 590,
  },
  {
    name: "Crispy chicken",
    description: "140 g de pechuga de pollo crujiente y un toque picante, lechuga picada, tomate y salsa yogurt, en nuestro pan con semillas de sésamo",
    category: "Hamburguesas",
    price: 590,
  },
  {
    name: "Route 66",
    description: "Deliciosas tiras de carne de cerdo a la parrilla con salsa BBQ, acompañada de lechuga, en nuestro pan con semillas de sésamo",
    category: "Hamburguesas",
    price: 690,
  },
  {
    name: "Suplementos",
    description: "Bacon, jamón york, queso, pepinillos, cebolla frita crujiente y/o huevo. El precio es por unidad",
    category: "Hamburguesas",
    price: 50,
  },
  {
    name: "Piscina",
    description: "Salchicha erik roja, salsa hot dog, salsa burger, pepinillos y cebolla frita crujiente",
    category: "Hot dogs",
    price: 490,
  },
  {
    name: "Baby",
    description: "Pan especial baby con salchicha alemana strasbourg",
    category: "Hot dogs",
    price: 250,
  },
  {
    name: "Suplementos",
    description: "Pepinillos y/o cebolla frita crujiente. El precio es por unidad",
    category: "Hot dogs",
    price: 30,
  },
  {
    name: "Bacon queso",
    description: "Pan chapata, tomate, orégano, queso y bacon",
    category: "Tosta pizzas",
    price: 550,
  },
  {
    name: "York queso",
    description: "Pan chapata, tomate, orégano, queso mozzarella y jamón york",
    category: "Tosta pizzas",
    price: 550,
  },
  {
    name: "Cuatro quesos",
    description: "Pan chapata, tomate, orégano, queso mozzarella, queso edam, queso cheddar y queso azul",
    category: "Tosta pizzas",
    price: 550,
  },
  {
    name: "Morcilla plancha",
    description: "",
    category: "Bocatas",
    price: 450,
  },
  {
    name: "Tortilla española",
    description: "",
    category: "Bocatas",
    price: 450,
  },
  {
    name: "Calamares",
    description: "",
    category: "Bocatas",
    price: 500,
  },
  {
    name: "Atún",
    description: "",
    category: "Bocatas",
    price: 450,
  },
  {
    name: "Lomo plancha",
    description: "",
    category: "Bocatas",
    price: 500,
  },
  {
    name: "Bacon",
    description: "",
    category: "Bocatas",
    price: 450,
  },
  {
    name: "Panceta",
    description: "",
    category: "Bocatas",
    price: 450,
  },
  {
    name: "Pepito ternera",
    description: "",
    category: "Bocatas",
    price: 550,
  },
  {
    name: "Chorizo plancha",
    description: "",
    category: "Bocatas",
    price: 450,
  },
  {
    name: "Pollo plancha",
    description: "",
    category: "Bocatas",
    price: 500,
  },
  {
    name: "Suplementos",
    description: "El precio es por unidad",
    category: "Bocatas",
    price: 50,
  },
  {
    name: "Montado",
    description: "Mismos tipos que bocatas excepto pepito ternera y calamares",
    category: "Bocatas",
    price: 350,
  },
  {
    name: "Sumplementos montados",
    description: "El precio es por unidad",
    category: "Bocatas",
    price: 30,
  },
  {
    name: "Mixto",
    description: "Jamón york y queso",
    category: "Sandwiches",
    price: 350,
  },
  {
    name: "Mixto con huevo",
    description: "Jamón york, queso y huevo",
    category: "Sandwiches",
    price: 450,
  },
  {
    name: "Vegetal",
    description: "Lechuga, tomate, atún, espárragos y mayonesa",
    category: "Sandwiches",
    price: 500,
  },
  {
    name: "Vegetal con pollo",
    description: "Pollo, lechuga, tomate, atún, espárragos y mayonesa",
    category: "Sandwiches",
    price: 550,
  },
  {
    name: "Alitas",
    description: "",
    category: "Raciones",
    price: 850,
  },
  {
    name: "Salchipapas",
    description: "Salchichas nurember, bremen, brockwurst, erik y patatas",
    category: "Raciones",
    price: 990,
  },
  {
    name: "Croquetas de jamón",
    description: "",
    category: "Raciones",
    price: 900,
  },
  {
    name: "Oreja plancha",
    description: "",
    category: "Raciones",
    price: 800,
  },
  {
    name: "Tortilla española",
    description: "",
    category: "Raciones",
    price: 850,
  },
  {
    name: "Choricillos al jerez",
    description: "",
    category: "Raciones",
    price: 850,
  },
  {
    name: "Morcilla plancha",
    description: "",
    category: "Raciones",
    price: 850,
  },
  {
    name: "Panceta",
    description: "",
    category: "Raciones",
    price: 800,
  },
  {
    name: "Patatas bravas",
    description: "",
    category: "Raciones",
    price: 600,
  },
  {
    name: "Patatas ali-oli",
    description: "",
    category: "Raciones",
    price: 600,
  },
  {
    name: "Patatas mixtas",
    description: "Bravas y ali-oli",
    category: "Raciones",
    price: 600,
  },
  {
    name: "Patatas burger",
    description: "",
    category: "Raciones",
    price: 500,
  },
  {
    name: "Calamares",
    description: "",
    category: "Raciones",
    price: 950,
  },
  {
    name: "Chopitos",
    description: "",
    category: "Raciones",
    price: 950,
  },
  {
    name: "Ensalada mixta pequeña",
    description: "",
    category: "Raciones",
    price: 450,
  },
  {
    name: "Ensalada mixta grande",
    description: "",
    category: "Raciones",
    price: 650,
  },
  {
    name: "Costillar BBQ",
    description: "Acompañado con patatas fritas y salsa BBQ",
    category: "Raciones",
    price: 1100,
  },
  {
    name: "Nuggets de pollo",
    description: "",
    category: "Raciones",
    price: 800,
  },
  {
    name: "Bacon-cheese fries",
    description: "Patatas fritas con mezcla de 3 quesos, bacon crispy y nuestra inconfundible crema ranch, todo ello al horno",
    category: "Raciones",
    price: 790,
  },
  {
    name: "Piña colada",
    description: "",
    category: "Cocktails",
    price: 550,
  },
  {
    name: "Mojito clásico",
    description: "",
    category: "Cocktails",
    price: 550,
  },
  {
    name: "Mojito fresa",
    description: "",
    category: "Cocktails",
    price: 550,
  },
  {
    name: "Zumo",
    description: "Naranja, melocotón o piña",
    category: "Bebidas",
    price: 200,
  },
  {
    name: "Batido",
    description: "Chocolate, vainilla o fresa",
    category: "Bebidas",
    price: 200,
  },
  {
    name: "Refresco",
    description: "",
    category: "Bebidas",
    price: 200,
  },
  {
    name: "Tubo cerveza",
    description: "",
    category: "Bebidas",
    price: 250,
  },
  {
    name: "Mini cerveza",
    description: "",
    category: "Bebidas",
    price: 550,
  },
  {
    name: "Combinado",
    description: "",
    category: "Bebidas",
    price: 600,
  },
  {
    name: "Mini combinado",
    description: "",
    category: "Bebidas",
    price: 1200,
  },
  {
    name: "Café",
    description: "Solo, con leche, etc.",
    category: "Bebidas",
    price: 140,
  },
  {
    name: "Licor",
    description: "",
    category: "Bebidas",
    price: 300,
  },
]

export default Products;
