import ImageComponent from '@/components/image-card';
import styles from './page.module.css';
import { ProductInfo, products } from '@/lib/data';

const Home: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1>My Pet Store!</h1>
      <div className={styles['product-area']}>
        {products.map((product: ProductInfo) => (
          <div className={styles.card} key={product.name}>
            <h2>{product.name}</h2>
            <ImageComponent
              src={product.imageUrl}
              alt={product.name}
              transformations={product.transformation}
            />
            Price: <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
