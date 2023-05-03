import React from "react";

import styled from "styled-components";
import { Container } from "../styles";

import Welcome from '../components/admin/Welcome';
import PortfolioTable from "../components/admin/PortfolioTable";

function openTab(event, tabName) {
    let tabcontent = document.querySelectorAll('.tab-content');
    tabcontent.forEach(tab => {
        tab.classList.remove('active');
    })

    let tablinks = document.querySelectorAll('.tab-link');
    tablinks.forEach(tab => {
        tab.classList.remove('active');
    })

    document.querySelector('#' + tabName).classList.add('active');
    event.target.classList.add('active');
}

function Admin() {
    return (
        <AdminContainer>
            <h1>Administração</h1>

            <div className="tab-nav">
                <button className="tab-link active" onClick={event => openTab(event, 'home')}>Home</button>
                <button className="tab-link" onClick={event => openTab(event, 'portfolio')}>Portfólio</button>
            </div>

            <div id="home" className="tab-content active">
                <Welcome />
            </div>

            <div id="portfolio" className="tab-content">
                <PortfolioTable />
            </div>
        </AdminContainer >
    )
}

const AdminContainer = styled(Container)`
    width:100%;
    display: flex;
    flex-direction: column;

    h1{
        text-align: center;
        color: #00ff00;
        margin-bottom: 2rem;
    }

    .tab-nav {
        button {
            float: left;
            color: #ccc;
            border: 1px solid #ccc;
            border-bottom: none;
            border-radius: .3rem .3rem 0 0;
            padding: .5rem .5rem;

            :hover {
                background-color: #ccc;
                color: #000;
            }
        }

        .active {
            background-color: #ccc;
            color: #000;
        }
    }

    .tab-content {
        display: none;
        padding: .5rem;
        background-color: #ccc;
        color: #000;
    }

    .active{
        display: block;
    }
`;

export default Admin;