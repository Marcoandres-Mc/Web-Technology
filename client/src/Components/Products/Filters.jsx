import React, { useReducer } from 'react'

export const Filters = () => {
    const [datosBd, setDatosBd] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect (() => {
        const fetchProducts = async () => {
            const products = await getProductsLaptos();
            setProductsLaptos(products);
            console.log(products);
        };
        fetchProducts();
    }, []);
    
    fuction useReducer(reducer, initialState) {
        const [state, setState] = useState(initialState);
        const dispatch = (action) => {
            const nextState = reducer(state, action);
            setState(nextState);
        };
        return [state, dispatch];
    }
    
  return (
    <div>Filters</div>
  )
}
