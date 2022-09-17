import { graphql } from '@apollo/client/react/hoc';
import { GET_CURRENCIES } from 'constants/Queries';
import CurrencySwitcher from 'components/header/currency_switcher/CurrencySwitcher'

export default graphql(GET_CURRENCIES)(CurrencySwitcher)
