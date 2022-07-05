import Image from 'next/image'
import star from '../../assets/icons/star.svg'
import styles from './product-card.module.scss'

const ProductCard = ({
  image,
  name = '',
  price = '',
  stars = 3
}) => {
  const starsArr = [0,1,2,3,4,5]
  return(
    <div className={styles.product_card}>
      <div style={{
        width: '90px',
        height: '90px',
        borderRadius: '10px',
        position: 'relative',
        ...styles
      }}>
        <div><Image src={image} alt={name} quality={100} layout='fill'></Image></div></div>
      <div className={styles.details}>
        <h3>{name}</h3>
        <div className={styles.stars}>
          {starsArr.map(item =>{
            return (
                <div key={item} style={{
                  opacity: `${stars > item ? 1 : 0.3}`
                }}><Image  src={star} alt=''/></div>
            )
          })}
        </div>
        <h3>${price}</h3>
      </div>
    </div>
  )
}

export default ProductCard;