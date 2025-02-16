import './App.css';
import { ProductList } from './principles/SRP/ProductList';
// import { BadProductList } from './principles/SRP/BadProductList';

function App() {
    return (
        <div className="min-w-full h-full justify-center items-center p-8">
            {/* <BadProductList /> */}
            <ProductList />
        </div>
    );
}

export default App;
