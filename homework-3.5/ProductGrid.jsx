import { products } from '../../data/products'
import { ProductCard } from '../ProductCard/ProductCard'

export function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

