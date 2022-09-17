import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts ($category: String! = "all") { 
    category (input: { title: $category }) {
      products {
        id,
        name,
        inStock,
        gallery,
        description,
        category,
        attributes {
          id,
          name,
          type,
          items {
            id,
            displayValue,
            value
          }
        },
        prices {
          currency {
            label,
            symbol
          },
          amount
        },
        brand
      }
    }
  }
`

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`

export const GET_CURRENCIES = gql`
  query GetCurrencies {
    currencies {
      label,
      symbol
    }
  }
`

export const GET_PRODUCT = gql`
  query GetProduct ($id: String!) @client {
    product (id: $id) {
      id,
      gallery,
      name,
      brand,
      inStock,
      description,
      prices {
        currency {
          symbol,
          label
        }
        amount
      }
      attributes {
        id,
        name,
        type,
        items {
          displayValue,
          value,
          id
        }
      }
    }
  }
`
