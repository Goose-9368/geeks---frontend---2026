import { useDispatch, useSelector } from 'react-redux'
import {
  selectIsFavoriteById,
  toggleFavorite,
} from '../../features/favorites/favoritesSlice'
import { HeartIcon } from '../Icons'

const priceFormatter = new Intl.NumberFormat('ru-RU')

export function ProductCard({ product }) {
  const dispatch = useDispatch()
  const isFavorite = useSelector((state) =>
    selectIsFavoriteById(state, product.id),
  )

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(product))
  }

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <img
          className="product-image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <button
          className={`favorite-button${isFavorite ? ' is-favorite' : ''}`}
          type="button"
          onClick={handleFavoriteClick}
          aria-label={
            isFavorite
              ? `Удалить «${product.name}» из избранного`
              : `Добавить «${product.name}» в избранное`
          }
          aria-pressed={isFavorite}
          title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        >
          <HeartIcon filled={isFavorite} />
        </button>
      </div>

      <div className="product-content">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <p className="product-price">
            {priceFormatter.format(product.price)} <span>сом</span>
          </p>
          <span className="color-dot" style={{ background: product.color }} aria-label={`Цвет: ${product.colorName}`} />
        </div>
      </div>
    </article>
  )
}

