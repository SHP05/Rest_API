# Product API (Sample Data)

Product REST API! This API provides information about electronic products like Phone , Smart watch , Laptop , TV etc. product including their names, price , rating , features , company.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Endpoints](#endpoints)
- [Search Features](#search-features)
- [Sample Requests](#sample-requests)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)

## Introduction

Briefly introduce your Product REST API. Describe its purpose, what it offers, and who its intended users are. Mention any unique features or advantages of your API.

## Getting Started

Provide instructions on how to get started with your API. This should include information on installation, usage, and any prerequisites.


### Installation

To install and run this API locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/SHP05/Rest_API.git
   cd Rest_API

2. Install dependencies:
   ```bash
    npm install

3. Start the API:
    ```bash
    npm start    

4. Usage
    - open in browser using link which is provide in console
    - write /data after url you get all data of API
    - It also provide 

## Endpoints

The API provides the following endpoints:

- `GET /product/testing`: Retrieve a list of data of all place.
- `GET /data?name={iphone}`: Retrieve a list of cities.
- `GET /data?price={800}`: Retrieve a list of states.
- `GET /data?company={apple}`: Retrieve details about a specific place.
- `POST http://localhost:3030/product/create`: Create new product and add json data as a request
- `PUT http://localhost:3030/product/update` : Update Data by pass id as a request
- `DELETE http://localhost:3030/product/delete` : Delete Perticular record by id


# Sample Requests and Responses

### Request
    http://localhost:3030/product/testing


  Provide all Data

## Authentication

This API does not require authentication to access the endpoints. However, rate limiting may apply to prevent abuse.

## Search Features

### Search Parameters

- `name`: The name of the product you want to search for.
- `price`: The price of product which you want to find.
- `company`: The company name of the product.

### Fields

The API response will include the following fields:

- `name`
- `price`
- `feature`
- `company`

## sample request
- `GET http://localhost:3030/product/testing`:Get ALL data of API
- `POST http://localhost:3030/product/create`: Create new product and add json data as a request
- `PUT http://localhost:3030/product/update` : Update Data by pass id as a request
- `DELETE http://localhost:3030/product/delete` : Delete Perticular record by id
