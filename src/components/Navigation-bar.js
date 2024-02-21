// Imports Below 
//`npm install react-router-dom` first
import { HashRouter, Routes, Route } from "react-router-dom";
import {useEffect} from 'react';

/* Import links below ↓ */
import Layout from '../JS/Layout.js';
import DashBoard from '../JS/DashBoard.js';
import NoPage from '../JS/Layout.js';
import Products from '../JS/Products.js';
import Orders from '../JS/Orders.js';
import Settings from '../JS/Settings.js';
import Customers from '../JS/Customers.js';
import Home from '../JS/Login.js';
import Queue from "../JS/Queue.js";
import Import_Product from "../JS/Products/ImportProduct.js";
import Export_Product from "../JS/Products/ExportProduct.js";
import Add_Product from "../JS/Products/AddProduct.js";


// Import Style sheet below
import '../CSS/navigation-bar.css'
function Navigation_Bar(props)
{
    useEffect(()=> 
    {
        /* Change the style of navigation bar */
        let navigation = document.getElementById("navbar");
        let navbar = document.querySelectorAll(".dropbtn");

        /* The user clicks on 'Products' button */
        navbar[1].onclick = function(event)
        {
            if(navbar[1].onclick)
            {
                navigation.style.left = "30%";
                navigation.style.position = "absolute";
                navigation.style.width = "70%";
                navigation.style.animation = "MoveLeft 1.2s ease";
            } 
        }

        /* The user clicks on Buttons other than products or home */
        for(let i = 3; i < navbar.length; i++)
        {
            navbar[i].onclick = function(event)
            {
                if(navbar[i].onclick)
                {
                    navigation.style.left = "0%";
                    navigation.style.position = "relative";
                    navigation.style.width = "100%";
                }
            }
        }
        
        /* The user clicks on 'Queue' button */
        navbar[4].onclick = function(event)
        {
            if(navbar[4].onclick)
            {
                navigation.style.left = "30%";
                navigation.style.position = "absolute";
                navigation.style.width = "70%";
                navigation.style.animation = "MoveLeft 1.2s ease";
            } 
        }

        /* The user clicks on 'Dashboard' button */
        navbar[0].onclick = function(event)
        {
            if(navbar[0].onclick)
            {
                navigation.style.animation = "MoveRight 1.2s ease";
                navigation.style.position = "fixed";
                navigation.style.left = "0%";
                navigation.style.width = "100%";
            }
        }

    }, []);


    return (
        <div id = "navigation" style = {{display: props.Display}}>
            <HashRouter>
                <Routes>
                    <Route path = "/" element = {<Layout />}>
                        <Route index element = {<Home />}></Route>
                        <Route path = "dashboard" element = {<DashBoard />}></Route>
                        <Route path = "products" element = {<Products />}></Route>
                        <Route path = "orders" element = {<Orders />}></Route>
                        <Route path = "customers" element = {<Customers />}></Route>
                        <Route path = "queue" element = {<Queue />}></Route>
                        <Route path = "settings" element = {<Settings />}></Route>
                        <Route path = "importProducts" element = {<Import_Product />}></Route>
                        <Route path = "exportProducts" element = {<Export_Product />}></Route>
                        <Route path = "addProduct" element = {<Add_Product />}></Route>
                        <Route path = "*" element = {<NoPage />}></Route>
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default Navigation_Bar;
