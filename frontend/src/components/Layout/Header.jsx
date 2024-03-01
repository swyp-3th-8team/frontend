import { Link } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Link to="/main">
        <svg
          width="190"
          height="43"
          viewBox="0 0 190 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M159.92 27.2171C159.968 17.8571 166.112 11.1851 175.568 11.1851C185.12 11.1851 189.68 19.2971 189.68 27.2171C189.584 35.2331 183.968 42.3371 175.424 42.3371C166.496 42.3371 159.92 35.8571 159.92 27.2171ZM173.36 29.9051C172.976 30.6251 174.368 31.3451 175.04 30.4331C176.336 28.5131 176.672 25.9211 176.72 23.5211C176.768 22.4171 175.136 22.4651 175.088 23.2811C174.896 25.6331 174.512 27.6011 173.36 29.9051Z"
            fill="#F0832C"
          />
          <path
            d="M132.286 41.4252C128.686 41.0412 124.99 38.1132 124.654 33.0732C124.174 24.7212 124.318 17.2332 124.702 8.78518C124.99 3.69718 128.686 0.817179 132.286 0.433178C134.734 0.193178 137.614 0.00117874 140.446 0.00117874C151.294 -0.09482 159.166 5.66519 159.166 20.1132C159.214 34.5132 151.294 41.8092 140.542 41.8572C137.662 41.8572 134.782 41.6652 132.286 41.4252ZM140.206 22.9932C139.822 23.7132 141.262 24.4332 141.886 23.5212C143.182 21.6972 143.566 19.0572 143.614 16.7052C143.614 15.5532 141.934 15.6012 141.934 16.3692C141.79 18.7212 141.358 20.6892 140.206 22.9932Z"
            fill="#F0832C"
          />
          <path
            d="M108.953 13.7292C108.953 9.74517 111.545 7.20117 115.385 7.20117C119.273 7.20117 121.721 9.74517 121.721 13.7292C121.721 17.0892 119.033 19.4892 115.385 19.4892C111.593 19.4892 108.953 17.0892 108.953 13.7292ZM108.953 30.9612C108.953 26.9772 111.545 24.3852 115.385 24.3852C119.273 24.3852 121.721 26.9772 121.721 30.9612C121.721 34.2732 119.033 36.7212 115.385 36.7212C111.593 36.7212 108.953 34.2732 108.953 30.9612Z"
            fill="#F0832C"
          />
          <path
            d="M90.7905 32.6411C90.6945 33.6491 90.6465 34.6091 90.5505 35.5691C90.1665 39.1691 88.1985 41.5211 84.2145 41.5211C80.1345 41.5211 78.0225 39.1691 77.6385 35.5691C77.3025 32.4011 77.1585 28.7051 77.0625 25.5371V16.9451C77.0625 13.4891 79.3665 11.1851 82.8225 11.1851C85.5585 11.1851 88.3425 11.9531 89.3505 14.1131C86.8545 17.1371 85.6065 20.6411 85.9905 24.3851C86.1345 25.5371 87.4305 25.4411 87.3825 24.4811C86.9985 19.5851 89.6865 14.4491 92.8065 12.5771C94.1985 11.7611 95.7345 11.1851 97.3185 11.1851C99.9585 11.1851 102.695 12.0491 104.471 14.0171C107.159 16.9451 107.351 20.4491 107.303 24.2891C107.255 27.8891 106.919 32.2091 106.151 35.5691C105.335 39.1691 103.511 41.5211 99.3345 41.5211C95.1105 41.5211 92.9505 39.1691 92.5185 35.5691C92.4225 34.7531 92.3265 33.8891 92.2785 33.0251C92.2785 31.8251 91.1265 31.6811 90.7905 32.6411Z"
            fill="#6AB23A"
          />
          <path
            d="M65.2092 37.9691C63.0492 41.2331 59.7372 42.3371 55.9932 42.3371C50.5212 42.3371 46.2012 39.4571 46.2012 34.1771C46.2012 29.3771 49.8972 26.3531 54.7932 25.3931C59.2572 24.4811 62.3772 22.4651 63.9612 20.0651C64.5852 19.1051 63.1932 18.1451 62.5692 19.0571C60.6972 21.7931 56.9532 23.8091 52.8252 23.8091C49.0812 23.8091 47.1132 21.8411 47.1132 19.1531C47.1132 14.3051 53.4012 11.1851 60.8412 11.1851C68.4732 11.1851 72.8412 13.8731 74.8092 19.4411C76.4892 24.1451 76.4412 31.7291 75.0972 37.5851C74.4732 40.4171 72.8412 41.9051 70.1052 41.9051C67.4172 41.9051 65.7852 40.5611 65.2092 37.9691ZM57.0492 34.5611C59.3532 34.2731 61.5132 32.7371 63.2892 31.2491C64.2492 30.4811 63.0492 29.3291 62.4252 29.8091C60.6012 31.3451 58.8732 32.3531 56.3292 32.9771C55.5612 33.1691 55.9452 34.7051 57.0492 34.5611Z"
            fill="#6AB23A"
          />
          <path
            d="M29.328 33.0251H29.28C29.232 33.8891 29.184 34.7531 29.088 35.5691C28.704 39.1691 26.448 41.5211 22.272 41.5211C18.048 41.5211 15.888 39.1691 15.456 35.5691C15.36 34.7531 15.264 33.8891 15.216 33.0251C15.216 31.8251 14.064 31.6811 13.728 32.6411C13.632 33.6491 13.584 34.6091 13.488 35.5691C13.104 39.1691 11.136 41.5211 7.152 41.5211C3.072 41.5211 0.96 39.1691 0.576 35.5691C0.24 32.4011 0.096 28.7051 0 25.5371V16.9451C0 13.4891 2.304 11.1851 5.76 11.1851C8.496 11.1851 11.28 11.9531 12.288 14.1131C9.792 17.1371 8.544 20.6411 8.928 24.3851C9.072 25.5371 10.368 25.4411 10.32 24.4811C9.936 19.5851 12.624 14.4011 15.744 12.5771C17.088 11.7131 18.672 11.1851 20.256 11.1851C22.896 11.1851 25.872 12.0011 27.696 14.0171C25.584 16.7051 24.672 20.0171 24.864 23.4251C25.104 24.5771 26.208 24.2411 26.208 23.3771C25.92 18.5771 28.8 14.1611 31.104 12.5771C32.304 11.7611 34.176 11.2331 36.144 11.2331C39.216 11.2331 41.712 12.3371 43.536 14.9291C44.976 17.0411 45.264 19.0091 45.216 26.1611C45.168 29.9531 44.976 31.9691 44.496 35.5691C44.016 39.1691 41.952 41.5211 37.776 41.5211C33.552 41.5211 31.488 39.1691 31.056 35.5691C30.96 34.7531 30.864 33.9371 30.816 33.0731C30.816 31.6811 29.328 31.6331 29.328 33.0251Z"
            fill="#6AB23A"
          />
        </svg>
      </Link>
      <HeaderLogin />
    </header>
  );
}
