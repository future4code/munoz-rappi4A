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
  const [restaurant, setRestaurant] = useState()
  const [products, setProducts] = useState()
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState("");


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
  
const handleOpen = () => {
      setOpen(true);
    }

    const addItemToCart = (id) => {
    }

    const handleChange = (event) => {
      setQuantity(Number(event.target.value) || "");
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleClick = () => {
      handleClose(); 
      addItemToCart();
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
                  return <CartCard product={product} key={product.id} actionCartBtn={true} handleOpen={handleOpen}/>
                })}
              </div>
            )
          }) :
          !loading && <p>Este Restaurante ainda não tem pratos disponíveis :(</p>
      }
       <Footer />
            <div>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle disableTypography="true"  className={classes.title}>Selecione a quantidade desejada</DialogTitle>
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
                  <Button onClick={handleClick} className={classes.formButton}>
                    ADICIONAR AO CARRINHO
                  </Button>
                </DialogActions>
              </Dialog>
          </div>
        </RestaurantMenu>

  )
}

export default RestaurantMenuPage