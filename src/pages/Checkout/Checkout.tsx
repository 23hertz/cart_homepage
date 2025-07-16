import styles from "./checkout.module.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCheck,
  faCircle,
  faLock,
  faTag,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
  return (
    <section className={styles.layout}>
      <section className={styles.container}>
        <nav className={styles.navbar}>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.lin}>
            <div className={styles.c1}>
              <FontAwesomeIcon icon={faCheck} /> Cart{" "}
            </div>
            <div className={styles.c2}>
              <FontAwesomeIcon icon={faCheck} />
              Review
            </div>
            <div className={styles.c3}>
              {" "}
              <FontAwesomeIcon icon={faCircle} /> Checkout
            </div>
          </div>
        </nav>
      </section>
      <div className={styles.item}>
        <div className={styles.item1}>
          <main className={styles.checkoutContent}>
            <section className={styles.shippingInfo}>
              <h2>Checkout </h2>
              <h3>Shipping Information</h3>

              <div className={styles.deliveryOptions}>
                <button className={`${styles.deliveryOption} ${styles.active}`}>
                  <FontAwesomeIcon icon={faTruck} /> Delivery
                </button>
                <button className={styles.deliveryOption}>
                  <FontAwesomeIcon icon={faBox} /> Pick up
                </button>
              </div>

              <form className={styles.shippingForm}>
                <div className={styles.formGroup}>
                  <label htmlFor={styles.fullName}>Full name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter full name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone number *</label>
                  <div className={styles.phoneInput}>
                    <span className={styles.countryCode}>🇳🇬 +234</span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="country">Country *</label>
                  <select id="country" name="country" required>
                    <option value="">Choose country</option>
                    <option value="nigeria">Nigeria</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="state">State *</label>
                  <select id="state" name="state" required>
                    <option value="">Choose state</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                  </select>
                </div>

                <div className={styles.formRow}>
                  <div className={`${styles.formGroup} ${styles.halfWidth}`}>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Enter city"
                    />
                  </div>
                  <div className={`${styles.formGroup} ${styles.halfWidth}`}>
                    <label htmlFor="zipCode">ZIP Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      placeholder="Enter ZIP code"
                    />
                  </div>
                </div>

                <div
                  className={`${styles.htmlFormGroup} ${styles.checkboxGroup}`}
                >
                  <input type="checkbox" id="terms" name="terms" required />
                  <label htmlFor="terms">
                    I have read and agree to the Terms and Conditions.
                  </label>
                </div>
              </form>
            </section>
          </main>
        </div>

        <div className={styles.item2}>
          <section className={styles.reviewCart}>
            <h3>Review your cart</h3>

            <div className={styles.cartItem}>
              <img
                src="https://img.kwcdn.com/product/fancy/cad20e75-5430-49ce-b5e7-a394225423f6.jpg?imageView2/2/w/800/q/70/format/webp"
                alt="DuoComfort Sofa Premium"
              />
              <div className={styles.itemDetails}>
                <p className={styles.itemName}>DuoComfort Sofa Premium</p>
                <p className={styles.itemQuantity}>1x</p>
              </div>
              <p className={styles.itemPrice}>$20.00</p>
            </div>

            <div className={styles.cartItem}>
              <img
                src="https://media.istockphoto.com/id/517381328/photo/folding-brazier-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=_rNgKwmaH-gICM2ZppiI6OzCfVn2_TFCFcVjYvIXNdA="
                alt=""
              />
              <div className={styles.itemDetails}>
                <p className={styles.itemName}>IronOne Desk</p>
                <p className={styles.itemQuantity}>1x</p>
              </div>
              <p className={styles.itemPrice}>$25.00</p>
            </div>

            <div className={styles.discountCode}>
              <FontAwesomeIcon icon={faTag} /> Discount code
              <a href="# " className={styles.applyLink}>
                Apply
              </a>
            </div>

            <div className={styles.orderSummary}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>$45.00</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Discount</span>
                <span>-$10.00</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Total</span>
                <span>$40.00</span>
              </div>
            </div>

            <button className={styles.payNowBtn}>Pay Now</button>

            <div className={styles.secureCheckout}>
              <FontAwesomeIcon icon={faLock} /> Secure Checkout - SSL Encrypted
              <p>
                Ensuring your financial and personal details are secure during
                every transaction.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
export default Checkout;

