import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CartCard } from '../../components/CartCard/CartCard';
import useProtectedPage from "../../hooks/useProtectedPage";
import { useRequestData } from '../../hooks/useRequestData';
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { ContainerTiposComida, RestaurantMenu } from './styled';
import { TiposDeComida } from './styled';
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input, MenuItem, FormControl, Select } from "@material-ui/core";
import RestaurantMenuCard from '../../components/RestaurantMenuCard/RestaurantMenuCard';

import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    borderRadius: 4,
    border: "1px solid #ced4da"
  },
  title: {
    fontSize: "15px",
    textAlignLast: "center",
    fontWeight: 'bold',
    marginTop: "10px",
  },
  formButton: {
    color: "#5094E3",
    '&:hover': {
      color: "#e86e5a",
    },
  }
}));

const RestaurantMenuPage = () => {
  useProtectedPage();
  const token = localStorage.getItem('token')
  const pathParams = useParams()
  const classes = useStyles();
  const { data, loading } = useRequestData(`/restaurants/${pathParams.id}`, token)
  const { cart, addToCart, removeItemFromCart } = useContext(GlobalStateContext);
  const [restaurant, setRestaurant] = useState()
  const [products, setProducts] = useState()
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");


  useEffect(() => {
    if (data) {

      const cat = []

      data.restaurant.products.forEach((product) => {

        const exists = cat.filter((category) => {
          if (category.name === product.category) {
            return true
          }
          return false
        })

        if (exists.length > 0) {
          cat.forEach((category) => {
            if (category.name === product.category) {
              category.products.push(product)
            }
          })
        } else {
          cat.push({ name: product.category, products: [product] })
        }
        setRestaurant(data.restaurant)
        setProducts(cat)
      })
    }
  }, [data])

  const handleOpen = (product) => {
    setOpen(true);
    setSelectedProduct(product);
  }

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct("");
    setQuantity("")
  };

  // const addItemToCart = (id) => {
  // }

  const handleChange = (event) => {
    setQuantity(Number(event.target.value) || "");
  };

  const addItemToCart = () => {

    // const product = {
    //   ...selectedProduct,
    //   quantity: quantity,
    //   restaurant: restaurant.id
    // }

    addToCart(selectedProduct, quantity, restaurant)
    handleClose();
  }

  return (
    <RestaurantMenu>
      <Header title={restaurant && restaurant.name} />
      {restaurant && <RestaurantMenuCard restaurant={restaurant} />}
      {
        restaurant && products ?
          products.map((category) => {
            return (
              <div key={category.name}>
                {category.products.length > 0 && <ContainerTiposComida><TiposDeComida>{category.name}</TiposDeComida></ContainerTiposComida>}
                {category.products.map((product) => {
                  const isInCart = cart.find(cartProduct => cartProduct.id === product.id)

                  return (
                    <CartCard 
                    product={product} 
                    key={product.id} 
                    actionCartBtn={isInCart ? false : true} 
                    handleOpen={handleOpen}
                    cart={cart} 
                    removeItemFromCart={removeItemFromCart}
                    />
                  )
                })}
              </div>
            )
          }) :
          !loading && <p>Este Restaurante ainda não tem pratos disponíveis :(</p>
      }
      <Footer />
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle disableTypography="true" className={classes.title}>Selecione a quantidade desejada</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={quantity}
                  onChange={handleChange}
                  disableUnderline={true}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={addItemToCart} className={classes.formButton}>
              ADICIONAR AO CARRINHO
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </RestaurantMenu>

  )
}

export default RestaurantMenuPage