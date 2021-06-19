import React, { useState, useEffect } from 'react'
import { useCart } from '../../contexts/CartContext/CartContext'
import { Col, Container, Row } from 'reactstrap'
import RestroDetailsCard from '../../components/RestroDetailsCard/RestroDetailsCard'
import DishCard from '../../components/DishCard/DishCard'
import classes from './Restro.module.css'
import gclasses from '../../Generic/generic.module.css'
import MenuHeading from '../../components/Heading/MenuHeading/MenuHeading'
import CategoryHeading from '../../components/Heading/CategoryHeading/CategoryHeading'
import RestroFooter from '../../components/Footer/Restro-Footer/RestroFooter'
import ViewCartButton from '../../components/Button/ViewCartButton/ViewCartButton'

export default function Restro() {
    //using context API
    const { cart } = useCart();

    //declaring and initilizing restro-data
    const [RestroData, setRestroData] = useState(null)

    useEffect(() => {
        setRestroData({
            res_id: "r123",
            res_username: "domino123",
            res_name: "Domino's Pizza",
            res_food_types: "Italian, Mexican, Continental",
            res_address: "Celebration Mall, Udaipur",
            res_whatsapp_number: "+917665673186",
            res_contact_number: "+917665673186",
            res_email: "vikassonix@gmail.com",
            res_images: [
                {
                    res_img_id: "",
                    res_img_url: ""
                }
            ],
            dish: [{
                dish_id: "d1",
                dish_name: "Moroccon Spice Pasta Pizza",
                dish_category: "Recommended",
                dish_display_price: "240",
                dish_cost_price: "300",
                dish_offer_percent: "",
                dish_description: "Saucy Pasta Topping | Fresh Veggies | Hand tossed pizza base",
                dish_type: "In Pasta Pizza",
                dish_image_url: "",
                dish_cat_bagde: [
                    {
                        dish_badge_id: "1",
                        dish_badge_name: "Veg"
                    }, {
                        dish_badge_id: "3",
                        dish_badge_name: "Bestseller"
                    }
                ],
                dish_availability: "Yes",
            }, {
                dish_id: "d2",
                dish_name: "Veggy Paradise",
                dish_category: "Recommended",
                dish_display_price: "260",
                dish_cost_price: "300",
                dish_offer_percent: "",
                dish_description: "Fresh Veggies | Olives | Hand tossed pizza base",
                dish_type: "In Veg Pizza",
                dish_image_url: "",
                dish_cat_bagde: [
                    {
                        dish_badge_id: "1",
                        dish_badge_name: "Veg"
                    }, {
                        dish_badge_id: "3",
                        dish_badge_name: "Bestseller"
                    }
                ],
                dish_availability: "Yes",
            }, {
                dish_id: "d3",
                dish_name: "Cocacola",
                dish_category: "Starter",
                dish_display_price: "40",
                dish_cost_price: "40",
                dish_offer_percent: "",
                dish_description: "Cold Drink",
                dish_type: "In Beverages",
                dish_image_url: "",
                dish_cat_bagde: [
                    {
                        dish_badge_id: "1",
                        dish_badge_name: "Veg"
                    }
                ],
                dish_availability: "Yes",
            }, {
                dish_id: "d4",
                dish_name: "Garlic Bread",
                dish_category: "Starter",
                dish_display_price: "240",
                dish_cost_price: "300",
                dish_offer_percent: "",
                dish_description: "Garlic Flavour | Fresh Veggies",
                dish_type: "In Starter",
                dish_image_url: "",
                dish_cat_bagde: [
                    {
                        dish_badge_id: "1",
                        dish_badge_name: "Veg"
                    }
                ],
                dish_availability: "Yes",
            }, {
                dish_id: "d5",
                dish_name: "Golden Corn Pizza",
                dish_category: "Main Course",
                dish_display_price: "240",
                dish_cost_price: "300",
                dish_offer_percent: "",
                dish_description: "Fresh Corn | Hand tossed pizza base",
                dish_type: "In Main Course",
                dish_image_url: "",
                dish_cat_bagde: [
                    {
                        dish_badge_id: "1",
                        dish_badge_name: "Veg"
                    },
                    {
                        dish_badge_id: "3",
                        dish_badge_name: "Bestseller"
                    }
                ],
                dish_availability: "Yes",
            }, {
                dish_id: "d6",
                dish_name: "Chicken Fire Pizza",
                dish_category: "Main Course",
                dish_display_price: "360",
                dish_cost_price: "400",
                dish_offer_percent: "",
                dish_description: "Fresh Chicken Toppings | Hand tossed pizza base",
                dish_type: "In Main Course",
                dish_image_url: "",
                dish_cat_bagde: [
                    {
                        dish_badge_id: "2",
                        dish_badge_name: "Non-Veg"
                    }
                ],
                dish_availability: "Yes",
            }, {
                dish_id: "d7",
                dish_name: "Veg Farmhouse Pizza",
                dish_category: "Main Course",
                dish_display_price: "240",
                dish_cost_price: "300",
                dish_offer_percent: "",
                dish_description: "Mushroom | Olives | Fresh Veggies | Hand tossed pizza base",
                dish_type: "In Pasta Pizza",
                dish_image_url: "",
                dish_cat_bagde: [
                    {
                        dish_badge_id: "1",
                        dish_badge_name: "Veg"
                    }
                ],
                dish_availability: "Yes",
            }],
            category: [
                {
                    cat_id: "c1",
                    cat_name: "Recommended"
                }, {

                    cat_id: "c2",
                    cat_name: "Starter"
                }, {

                    cat_id: "c3",
                    cat_name: "Main Course"
                }
            ],
            restro_badge: [
                {
                    text1: "HYGIENIC",
                    text2: "SERVICE"
                },
                {
                    text1: "MAX",
                    text2: "SAFETY"
                }
            ]
        })

    }, [])

    //mapping category and dish
    let renderRestroMenu = null;
    if (RestroData != null) {
        renderRestroMenu = RestroData.category.map(cat =>
            <Col xs="12" key={cat.cat_id}>
                <Row>
                    {/* rendering category */}
                    <CategoryHeading heading={cat.cat_name} />
                    {/* rendering items in the above caetgory */}
                    {RestroData.dish.map((d => (
                        d.dish_category.toLowerCase() === cat.cat_name.toLowerCase() ?
                            <Col key={d.dish_id} xs="12" md="6" className={classes.colDish}>
                                <DishCard
                                    id={d.dish_id}
                                    name={d.dish_name}
                                    type={d.dish_type}
                                    price={d.dish_display_price}
                                    desc={d.dish_description}
                                    cat_badge={d.dish_cat_bagde} />
                            </Col> : null
                    )))}
                </Row>
            </Col>
        )
    }

    //rendering restro details
    let renderRestroDetails = null;
    if (RestroData != null) {
        renderRestroDetails = <RestroDetailsCard
            name={RestroData.res_name}
            type={RestroData.res_food_types}
            address={RestroData.res_address} />
    }

    return (
        <div>
            <Container>
                <Row className={[classes.below, gclasses.g_bgRestroDetails].join(' ')}>
                    <Col xs="12" className={classes.colRestroDetails}>
                        {renderRestroDetails}
                    </Col>
                    {/* <button onClick={()=>console.log(cart)} >Log</button> */}
                </Row>
                <div className={[classes.above].join(' ')}>
                    <Row className={[classes.bgWhite].join(' ')}>
                        {/* Heading MENU */}
                        <Col xs="12" className={[classes.colHead, gclasses.g_bgRestroDetails].join(' ')}>
                            <MenuHeading heading="MENU" />
                        </Col>

                        {/* Category and Dish */}
                        {renderRestroMenu}

                        {/* go to cart */}
                        <Col xs="12" className={classes.colHead}>
                            <ViewCartButton />
                        </Col>

                        {/* Restro Footer */}
                        <Col xs="12" className={classes.colHead}>
                            <RestroFooter />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
