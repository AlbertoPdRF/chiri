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
    price: 850,
  },
  {
    name: "Piscina",
    description: "Carne ranch gourmet (150 g), lechuga picada, tomate natural y cebolla natural, en nuestro pan con semillas de sésamo",
    category: "Hamburguesas",
    price: 650,
  },
  {
    name: "Crispy chicken",
    description: "140 g de pechuga de pollo crujiente y un toque picante, lechuga picada, tomate y salsa yogurt, en nuestro pan con semillas de sésamo",
    category: "Hamburguesas",
    price: 650,
  },
  {
    name: "Route 66",
    description: "Deliciosas tiras de carne de cerdo a la parrilla con salsa BBQ, acompañada de lechuga, en nuestro pan con semillas de sésamo",
    category: "Hamburguesas",
    price: 750,
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
    price: 590,
  },
  {
    name: "Baby",
    description: "Pan especial baby con salchicha alemana strasbourg",
    category: "Hot dogs",
    price: 280,
  },
  {
    name: "Suplementos",
    description: "Pepinillos y/o cebolla frita crujiente. El precio es por unidad",
    category: "Hot dogs",
    price: 50,
  },
  {
    name: "Bacon queso",
    description: "Pan chapata, tomate, orégano, queso y bacon",
    category: "Tosta pizzas",
    price: 600,
  },
  {
    name: "York queso",
    description: "Pan chapata, tomate, orégano, queso mozzarella y jamón york",
    category: "Tosta pizzas",
    price: 600,
  },
  {
    name: "Cuatro quesos",
    description: "Pan chapata, tomate, orégano, queso mozzarella, queso edam, queso cheddar y queso azul",
    category: "Tosta pizzas",
    price: 600,
  },
  {
    name: "Morcilla plancha",
    description: "",
    category: "Bocatas",
    price: 500,
  },
  {
    name: "Tortilla española",
    description: "",
    category: "Bocatas",
    price: 500,
  },
  {
    name: "Calamares",
    description: "",
    category: "Bocatas",
    price: 550,
  },
  {
    name: "Atún",
    description: "",
    category: "Bocatas",
    price: 500,
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
    price: 500,
  },
  {
    name: "Panceta",
    description: "",
    category: "Bocatas",
    price: 500,
  },
  {
    name: "Pepito ternera",
    description: "",
    category: "Bocatas",
    price: 600,
  },
  {
    name: "Chorizo plancha",
    description: "",
    category: "Bocatas",
    price: 500,
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
    price: 400,
  },
  {
    name: "Mixto",
    description: "Jamón york y queso",
    category: "Sandwiches",
    price: 380,
  },
  {
    name: "Mixto con huevo",
    description: "Jamón york, queso y huevo",
    category: "Sandwiches",
    price: 490,
  },
  {
    name: "Vegetal",
    description: "Lechuga, tomate, atún, espárragos y mayonesa",
    category: "Sandwiches",
    price: 530,
  },
  {
    name: "Vegetal con pollo",
    description: "Pollo, lechuga, tomate, atún, espárragos y mayonesa",
    category: "Sandwiches",
    price: 590,
  },
  {
    name: "Alitas",
    description: "",
    category: "Raciones",
    price: 950,
  },
  {
    name: "Salchipapas",
    description: "Salchichas nurember, bremen, brockwurst, erik y patatas",
    category: "Raciones",
    price: 1090,
  },
  {
    name: "Croquetas de jamón",
    description: "",
    category: "Raciones",
    price: 950,
  },
  {
    name: "Oreja plancha",
    description: "",
    category: "Raciones",
    price: 900,
  },
  {
    name: "Tortilla española",
    description: "",
    category: "Raciones",
    price: 900,
  },
  {
    name: "Choricillos al jerez",
    description: "",
    category: "Raciones",
    price: 900,
  },
  {
    name: "Morcilla plancha",
    description: "",
    category: "Raciones",
    price: 900,
  },
  {
    name: "Panceta",
    description: "",
    category: "Raciones",
    price: 900,
  },
  {
    name: "Patatas bravas",
    description: "",
    category: "Raciones",
    price: 650,
  },
  {
    name: "Patatas ali-oli",
    description: "",
    category: "Raciones",
    price: 650,
  },
  {
    name: "Patatas mixtas",
    description: "Bravas y ali-oli",
    category: "Raciones",
    price: 650,
  },
  {
    name: "Patatas burger",
    description: "",
    category: "Raciones",
    price: 600,
  },
  {
    name: "Bacon-cheese fries",
    description: "Patatas fritas con mezcla de 3 quesos, bacon crispy y nuestra inconfundible crema ranch, todo ello al horno",
    category: "Raciones",
    price: 850,
  },
  {
    name: "Calamares",
    description: "",
    category: "Raciones",
    price: 1050,
  },
  {
    name: "Chopitos",
    description: "",
    category: "Raciones",
    price: 1050,
  },
  {
    name: "Costillar BBQ",
    description: "Acompañado con patatas fritas y salsa BBQ",
    category: "Raciones",
    price: 1200,
  },
  {
    name: "Nuggets de pollo",
    description: "",
    category: "Raciones",
    price: 900,
  },
  {
    name: "Fingers de queso",
    description: "",
    category: "Raciones",
    price: 800,
  },
  {
    name: "Tequeños",
    description: "",
    category: "Raciones",
    price: 800,
  },
  {
    name: "Ensalada mixta pequeña",
    description: "",
    category: "Ensaladas",
    price: 490,
  },
  {
    name: "Ensalada mixta grande",
    description: "",
    category: "Ensaladas",
    price: 690,
  },
  {
    name: "Kebab",
    description: "",
    category: "Kebab",
    price: 700,
  },
  {
    name: "Refresco",
    description: "",
    category: "Bebidas",
    price: 200,
  },
  {
    name: "Zumo",
    description: "Naranja, melocotón o piña",
    category: "Bebidas",
    price: 200,
  },
  {
    name: "Red Bull",
    description: "",
    category: "Bebidas",
    price: 250,
  },
  {
    name: "Agua pequeña",
    description: "",
    category: "Bebidas",
    price: 100,
  },
  {
    name: "Agua grande",
    description: "",
    category: "Bebidas",
    price: 200,
  },
  {
    name: "Batido",
    description: "",
    category: "Bebidas",
    price: 200,
  },
  {
    name: "Smoothie",
    description: "",
    category: "Bebidas",
    price: 400,
  },
  {
    name: "Botellín",
    description: "",
    category: "Bebidas",
    price: 150,
  },
  {
    name: "Tercio",
    description: "",
    category: "Bebidas",
    price: 250,
  },
  {
    name: "Caña",
    description: "",
    category: "Bebidas",
    price: 150,
  },
  {
    name: "Tubo cerveza",
    description: "",
    category: "Bebidas",
    price: 250,
  },
  {
    name: "Vaso 1/3 l cerveza",
    description: "",
    category: "Bebidas",
    price: 250,
  },
  {
    name: "Vaso 1/2 l cerveza",
    description: "",
    category: "Bebidas",
    price: 350,
  },
  {
    name: "Mini cerveza",
    description: "",
    category: "Bebidas",
    price: 600,
  },
  {
    name: "Lata cerveza",
    description: "",
    category: "Bebidas",
    price: 200,
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
    name: "Licor",
    description: "",
    category: "Bebidas",
    price: 300,
  },
  {
    name: "Cocktails",
    description: "",
    category: "Bebidas",
    price: 600,
  },
  {
    name: "Café",
    description: "Solo, con leche, etc.",
    category: "Desayunos y meriendas",
    price: 150,
  },
  {
    name: "Café con hielo",
    description: "Solo, con leche, etc.",
    category: "Desayunos y meriendas",
    price: 160,
  },
  {
    name: "Nesquick",
    description: "",
    category: "Desayunos y meriendas",
    price: 150,
  },
  {
    name: "Infusión",
    description: "",
    category: "Desayunos y meriendas",
    price: 150,
  },
  {
    name: "Infusión premium",
    description: "",
    category: "Desayunos y meriendas",
    price: 180,
  },
  {
    name: "Bollería",
    description: "",
    category: "Desayunos y meriendas",
    price: 150,
  },
  {
    name: "Donuts",
    description: "",
    category: "Desayunos y meriendas",
    price: 130,
  },
  {
    name: "Desayuno con bollería o tostada",
    description: "",
    category: "Desayunos y meriendas",
    price: 250,
  },
  {
    name: "Tostada",
    description: "",
    category: "Desayunos y meriendas",
    price: 150,
  },
  {
    name: "1/2 tostada",
    description: "",
    category: "Desayunos y meriendas",
    price: 100,
  },
  {
    name: "Desayuno con 1/2 tostada",
    description: "",
    category: "Desayunos y meriendas",
    price: 220,
  },
  {
    name: "Tostada de jamón",
    description: "",
    category: "Desayunos y meriendas",
    price: 200,
  },
  {
    name: "Desayuno con tostada de jamón",
    description: "",
    category: "Desayunos y meriendas",
    price: 300,
  },
  {
    name: "Tarta",
    description: "",
    category: "Desayunos y meriendas",
    price: 350,
  },
  {
    name: "Tortitas",
    description: "",
    category: "Desayunos y meriendas",
    price: 350,
  },
  {
    name: "Gofre",
    description: "",
    category: "Desayunos y meriendas",
    price: 350,
  },
  {
    name: "Pincho de tortilla",
    description: "",
    category: "Desayunos y meriendas",
    price: 300,
  },
  {
    name: "Patatillas",
    description: "",
    category: "Snacks",
    price: 150,
  },
  {
    name: "Pringles",
    description: "",
    category: "Snacks",
    price: 130,
  },
  {
    name: "Patatas variadas",
    description: "",
    category: "Snacks",
    price: 100,
  },
  {
    name: "Chuches",
    description: "",
    category: "Snacks",
    price: 100,
  },
  {
    name: "Chocolatinas",
    description: "",
    category: "Snacks",
    price: 120,
  },
  {
    name: "Decoración de cumpleaños",
    description: "",
    category: "Suplemento cumpleaños",
    price: 1000,
  },
]

export default Products;
